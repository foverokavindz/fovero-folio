import {
  Testimonials,
  Sidebar,
  Services,
  Resume,
  Pricing,
  Portfolio,
  Home,
  Contact,
  Blog,
  About,
} from './components';
import './App.css';
import ThemeToggle from './components/themeToggle/ThemeToggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />

        {/*   
          
        <Blog />
        
        */}
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
