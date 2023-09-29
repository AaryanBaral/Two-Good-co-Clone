import LocomotiveScroll from "locomotive-scroll";
import { createContext } from "react";
import { useRef, useEffect } from "react";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./App.css";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

library.add(fab, faBars,faCartShopping );
const mainContext = createContext();

function App() {
  const scrollRef = useRef(null);
  const cursor = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    
    return()=>{
      scroll.destroy();
    }
  });
  return (
    <>
    <mainContext.Provider value={{cursor}}>
      <Navbar/>
      <div className="cursor" ref={cursor}></div>
        <main data-scroll-container ref={scrollRef}>
          <Page1 />
          <Page2 />
          <Page3/>
          <Page4/>
        </main>
    </mainContext.Provider>
    </>
  );
}

export default App;
export {mainContext}
