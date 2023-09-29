import React, { useRef } from "react";
import video from "../video/video.mp4";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Page1() {
  const play = useRef(null);
  const comp = useRef(null);
  const handelPlayOnEnter = () => {
    gsap.to(play.current, {
      scale: 1,
      opacity: 1,
    });
  };
  const handelPlayOnLeave = () => {
    gsap.to(play.current, {
      scale: 0,
      opacity: 0,
    });
  };
  const handelPlayOnMove = (e) => {
    var ele = document.querySelector("#video-container");
    var offset = ele.getBoundingClientRect();
    gsap.to(play.current, {
      left: e.clientX- offset.left-50,
      top: e.clientY-offset.top-50,
    });
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.from("#page1 h2",{
            opacity:0,
            duration:0.9,
            stagger:0.3,
            delay:0.5,
            y:100
        })
        gsap.from("#video-container",{
            opacity:0,
            duration:0.5,
            stagger:0.3,
            delay:1.3,
            scale:0.9
        })
    }, comp);
    return ()=>{
        ctx.revert();
    }
  },[]);

  return (
    <>
      <div id="page1" ref={comp}>
        <h2 >change </h2>
        <h2> the course</h2>
        <div
          id="video-container"
          onMouseEnter={handelPlayOnEnter}
          onMouseLeave={handelPlayOnLeave}
          onMouseMove={handelPlayOnMove}
        >
          <div id="play" ref={play}>
            Play
          </div>
          <video autoPlay loop muted src={video}></video>
        </div>
      </div>
    </>
  );
}
