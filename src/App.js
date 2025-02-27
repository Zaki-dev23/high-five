
import './App.css';
import HeroSection from "./components/HeroSection"
import Login from './pages/Login';
import Posts from './pages/posts';
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons



function App() {
  return (
    <div>
      <HeroSection />
      <Posts/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
