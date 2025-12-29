
// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function useSmoothScroll(containerRef) {
//   useEffect(() => {
//     if (!containerRef.current) return;

//     let loco;

//     const init = () => {
//       loco = new LocomotiveScroll({
//         el: containerRef.current,
//         smooth: true,
//         multiplier: 1,
//         smartphone: { smooth: true },
//         tablet: { smooth: true }
//       });

//       // Sync ScrollTrigger
//       loco.on("scroll", ScrollTrigger.update);

//       ScrollTrigger.scrollerProxy(containerRef.current, {
//         scrollTop(value) {
//           return arguments.length
//             ? loco.scrollTo(value, { duration: 0, disableLerp: true })
//             : loco.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//           };
//         },
//         pinType: containerRef.current.style.transform
//           ? "transform"
//           : "fixed"
//       });

//       ScrollTrigger.addEventListener("refresh", () => loco.update());

//       // IMPORTANT: refresh AFTER locomotive is ready
//       ScrollTrigger.refresh();
//     };

//     // Delay init until next frame (layout ready)
//     requestAnimationFrame(init);

//     return () => {
//       if (loco) {
//         loco.destroy();
//         loco = null;
//       }
//     };
//   }, [containerRef]);
// }




import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () =>
  window.matchMedia("(max-width: 768px)").matches ||
  "ontouchstart" in window;

export default function useSmoothScroll(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;

    let loco = null;

    /* ============================
       MOBILE → Native Scroll Only
    ============================ */
    if (isMobile()) {
      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? (containerRef.current.scrollTop = value)
            : containerRef.current.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: "fixed"
      });

      ScrollTrigger.refresh();
      return;
    }

   
    loco = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,         
      multiplier: 1,
      smartphone: false,  
      tablet: false       
    });

    loco.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? loco.scrollTo(value, { duration: 0, disableLerp: true })
          : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: "transform"
    });

    ScrollTrigger.addEventListener("refresh", () => loco.update());
    ScrollTrigger.refresh();

    /* ============================
       CLEANUP
    ============================ */
    return () => {
      ScrollTrigger.removeEventListener("refresh", () => loco?.update());
      loco?.destroy();
      loco = null;
    };
  }, [containerRef]);
}
