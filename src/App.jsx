import {
  Testimonials,
  Sidebar,
  Services,
  Resume,
  Pricing,
  Portfolio,
  home,
  Contact,
  Blog,
  About,
} from './components';
import './App.css';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
