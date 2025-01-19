

import './App.css';
import HeroCard from './components/HeroCard';
import About from './components/About';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Testimonial from './components/Testimonial';
import JoinUs from './components/JoinUs';
import FooterSection from './components/FooterSection';


function App() {
  return (
    <div className=" bg-white my-2 mx-4 rounded-lg min-h-screen pt-1 ">
      <HeroCard/>
      <About/>
      <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
      <Programs/>
      <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
      <Schedule/>
      <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
      <Testimonial/>
      <hr class="h-1 my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700 ml-auto mr-auto"></hr>
      <JoinUs/>
      <FooterSection/>
       
    </div>
  );
}

export default App;
