// import ScrollAnimation from "../components/UI/ScrollAnimation";
// import gsap from "gsap";

// export default function About() {
//   return (
//     <section id="about" className="page about" data-scroll-section>
//       <ScrollAnimation
//         animation={(el) =>
//           gsap.from(el, {
//             y: 120,
//             opacity: 0,
//             duration: 1.2,
//             ease: "power4.out"
//           })
//         }
//       >
//         <h1>About Synchronize AI</h1>
//         <p>
//           We design AI systems that integrate cleanly into real businesses.
//           No buzzwords. No chaos. Only execution.
//         </p>
//       </ScrollAnimation>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import { revealUp } from "../../utils/scrollAnimations";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    revealUp(ref.current);
  }, []);

  return (
    <section ref={ref} data-scroll-section>
      <h1>About Us</h1>
    </section>
  );
}
