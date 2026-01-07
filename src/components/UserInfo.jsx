import { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import { collectClientInfo } from '../util/tracker';

const UserInfo = () => {
	const trackNewUser = async () => {
		const visitId = `visit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
		const data = await collectClientInfo();
		Sentry.captureMessage('User visited site', {
			level: 'info',
			tags: {
				event_type: 'site_visit',
				referrer_type: document.referrer ? 'referred' : 'direct',
			},
			extra: {
				userCanvalFingerprint: data.canvas,
				...data,
			},
		});

		Sentry.setUser({
			id: visitId,
		});
	};

	useEffect(() => {
		trackNewUser();
	}, []);

	return null;
};

export default UserInfo;
