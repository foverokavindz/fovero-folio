export const collectClientInfo = async () => {
	const info = {
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		language: navigator.language,
		languages: navigator.languages,
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		screen: {
			width: window.screen.width,
			height: window.screen.height,
			availWidth: window.screen.availWidth,
			availHeight: window.screen.availHeight,
			colorDepth: window.screen.colorDepth,
			pixelDepth: window.screen.pixelDepth,
			pixelRatio: window.devicePixelRatio,
			orientation: window.screen.orientation?.type,
		},
		viewport: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		hardware: {
			cores: navigator.hardwareConcurrency,
			memoryGB: navigator.deviceMemory,
		},
		network: navigator.connection
			? {
					type: navigator.connection.effectiveType,
					rtt: navigator.connection.rtt,
					downlink: navigator.connection.downlink,
					saveData: navigator.connection.saveData,
			  }
			: null,
		browser: {
			cookieEnabled: navigator.cookieEnabled,
			doNotTrack: navigator.doNotTrack,
			maxTouchPoints: navigator.maxTouchPoints,
			vendor: navigator.vendor,
			onLine: navigator.onLine,
			pdfViewerEnabled: navigator.pdfViewerEnabled,
		},
		features: {
			localStorage: typeof Storage !== 'undefined',
			sessionStorage: typeof sessionStorage !== 'undefined',
			indexedDB: typeof indexedDB !== 'undefined',
			webWorkers: typeof Worker !== 'undefined',
			serviceWorker: 'serviceWorker' in navigator,
			geolocation: 'geolocation' in navigator,
			notifications: 'Notification' in window,
			webGL: detectWebGL(),
			webRTC: detectWebRTC(),
			touchSupport: 'ontouchstart' in window,
		},
		canvas: getCanvasFingerprint(),
		webGL: getWebGLInfo(),
		plugins: getPlugins(),
		fonts: await detectFonts(),
		timestamp: new Date().toISOString(),
		referrer: document.referrer || 'direct',
		url: window.location.href,
		performance: getPerformanceInfo(),
	};

	// Try to get battery info (may require user permission)
	try {
		if ('getBattery' in navigator) {
			const battery = await navigator.getBattery();
			info.battery = {
				charging: battery.charging,
				level: battery.level,
				chargingTime: battery.chargingTime,
				dischargingTime: battery.dischargingTime,
			};
		}
	} catch (e) {
		info.battery = null;
	}

	// Try to get media devices
	try {
		if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
			const devices = await navigator.mediaDevices.enumerateDevices();
			info.mediaDevices = {
				audioInputs: devices.filter((d) => d.kind === 'audioinput').length,
				audioOutputs: devices.filter((d) => d.kind === 'audiooutput').length,
				videoInputs: devices.filter((d) => d.kind === 'videoinput').length,
			};
		}
	} catch (e) {
		info.mediaDevices = null;
	}

	return info;
};

const detectWebGL = () => {
	try {
		const canvas = document.createElement('canvas');
		return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
	} catch (e) {
		return false;
	}
};

const detectWebRTC = () => {
	return !!(window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection);
};

// Generate a simple canvas fingerprint
const getCanvasFingerprint = () => {
	try {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const txt = 'ClientFingerprint123';
		ctx.textBaseline = 'top';
		ctx.font = '14px Arial';
		ctx.textBaseline = 'alphabetic';
		ctx.fillStyle = '#f60';
		ctx.fillRect(125, 1, 62, 20);
		ctx.fillStyle = '#069';
		ctx.fillText(txt, 2, 15);
		ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
		ctx.fillText(txt, 4, 17);
		return canvas.toDataURL().substring(0, 200);
	} catch (e) {
		return null;
	}
};

const getWebGLInfo = () => {
	try {
		const canvas = document.createElement('canvas');
		const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		if (!gl) return null;

		const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
		return {
			vendor: gl.getParameter(gl.VENDOR),
			renderer: gl.getParameter(gl.RENDERER),
			unmaskedVendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : null,
			unmaskedRenderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
			version: gl.getParameter(gl.VERSION),
			shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
		};
	} catch (e) {
		return null;
	}
};

const getPlugins = () => {
	try {
		return Array.from(navigator.plugins).map((plugin) => ({
			name: plugin.name,
			description: plugin.description,
		}));
	} catch (e) {
		return [];
	}
};

const detectFonts = async () => {
	const baseFonts = ['monospace', 'sans-serif', 'serif'];
	const testFonts = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Times New Roman', 'Comic Sans MS', 'Trebuchet MS', 'Impact'];

	if (!document.fonts || !document.fonts.check) {
		return [];
	}

	const available = [];
	for (const font of testFonts) {
		for (const base of baseFonts) {
			if (await document.fonts.check(`12px "${font}", ${base}`)) {
				available.push(font);
				break;
			}
		}
	}

	return [...new Set(available)];
};

const getPerformanceInfo = () => {
	try {
		const perf = window.performance;
		const timing = perf.timing;
		const memory = perf.memory;

		return {
			navigation: {
				type: perf.navigation?.type,
				redirectCount: perf.navigation?.redirectCount,
			},
			timing: {
				loadTime: timing.loadEventEnd - timing.navigationStart,
				domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
				connectTime: timing.connectEnd - timing.connectStart,
			},
			memory: memory
				? {
						usedJSHeapSize: memory.usedJSHeapSize,
						totalJSHeapSize: memory.totalJSHeapSize,
						jsHeapSizeLimit: memory.jsHeapSizeLimit,
				  }
				: null,
		};
	} catch (e) {
		return null;
	}
};
