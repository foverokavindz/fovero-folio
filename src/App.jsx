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
} from "./components";
import "./App.css";

function App() {
  return (
    <>
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
