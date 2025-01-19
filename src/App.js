import "./App.css";
import About from "./components/About";
import FooterSection from "./components/FooterSection";
import HeroCard from "./components/HeroCard";
import JoinUs from "./components/JoinUs";
import Programs from "./components/Programs";
import Schedule from "./components/Schedule";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className=" bg-white my-2 mx-4 rounded-lg min-h-screen pt-1 ">
      <HeroCard />
      <div className="container mx-auto">
        <About />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Programs />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Schedule />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <Testimonial />
        <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
        <JoinUs />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
