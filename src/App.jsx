import { Testimonials, Sidebar, Services, Resume, Pricing, Portfolio, Home, Contact, Blog, About, TechStack } from './components';
import './App.css';
import ThemeToggle from './components/themeToggle/ThemeToggle';
import ClickSpark from './animations/ClickSpark';
import { useTheme } from './context/theme';
import UserInfo from './components/UserInfo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
	const { isDarkMode } = useTheme();
	return (
		<>
			<UserInfo />
			<ThemeToggle />
			<Sidebar />
			<main className="main">
				<ClickSpark sparkColor={isDarkMode ? '#FF4757' : '#1A1A2E'} sparkSize={20} sparkRadius={70} sparkCount={10} duration={800} extraScale={1.2}>
					<>
						<Home />
						<About />
						<Services />
						<TechStack />
						<Resume />
						<Portfolio />
						{/* <Pricing /> */}
						<Blog />
						<Testimonials />
						<Contact />
					</>
				</ClickSpark>
			</main>
			<Analytics />
			<SpeedInsights />
		</>
	);
}

export default App;
