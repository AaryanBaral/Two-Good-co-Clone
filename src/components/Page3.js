import gsap from "gsap";
import React from "react";
import { useContext } from "react";
import { mainContext } from "../App";

export default function Page3() {
  const{cursor} = useContext(mainContext);
  const handelOnMove = (e)=>{
    gsap.to(cursor.current,{
      left:e.clientX,
      top:e.clientY
    })
  }
  const handelOnEnter = ()=>{
    gsap.to(cursor.current,{
      transform: 'translate(-50%,-50%) scale(1)'
    })
  }
  const handelOnLeave = ()=>{
    gsap.to(cursor.current,{
      transform: 'translate(-50%,-50%) scale(0)'
    })
  }
  return (
    <>
    <div className="text">
      <div id="left">
        <h1>WE BELIEVE IN PEOPLE,<br></br> UNTIL THEY BELIEVE IN<br></br> THEMSELVES AGAIN.</h1>
      </div>
      <div id="right">
        <div className="p">Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</div>
        <div className="p">With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</div>
        <div className="support">SHOP TO SUPPORT</div>
      </div>
    </div>
      <div id="page3" >
        <div className="child" id="child1" onMouseEnter={handelOnEnter} onMouseMove={handelOnMove} onMouseLeave={handelOnLeave}>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1280&h=1280&auto=format" alt="" />
          <div className="pname">New Product</div>
          <div className="price">$100</div>
        </div>
        <div className="child" id="child2" onMouseEnter={handelOnEnter} onMouseMove={handelOnMove} onMouseLeave={handelOnLeave}>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=1280&h=1280&auto=format" alt="" />
          <div className="pname">New Product</div>
          <div className="price">$100</div>
        </div>
        <div className="child" id="child3" onMouseEnter={handelOnEnter} onMouseMove={handelOnMove} onMouseLeave={handelOnLeave}>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1280&h=1280&auto=format" alt="" />
          <div className="pname">New Product</div>
          <div className="price">$100</div>
        </div>
        <div className="child" id="child4" onMouseEnter={handelOnEnter} onMouseMove={handelOnMove} onMouseLeave={handelOnLeave}>
          <img src="https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=1280&h=1280&auto=format" alt="" />
          <div className="pname">New Product</div>
          <div className="price">$100</div>
        </div>
      </div>
    </>
  );
}
