import Food from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

//import images
import Craft1 from './assets/craft1.jpg'
import Craft2 from './assets/craft2.jpg'
import Chicken from './assets/chicken.jpg'
import Burger from './assets/burger.jpg'
import HeroBg from './assets/hero-bg.jpg'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Food bgImg1={Craft1} bgImg2={Craft2} />
      <Food bgImg={Chicken} />
      <Food bgImg={Burger}/>
      <Footer />
    </div>
  );
}

export default App;
