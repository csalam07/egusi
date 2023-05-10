import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Footer, Header, VideoPlayer } from './components';
import {
  AboutUs,
  Blog,
  ContactUs,
  Faq,
  Hero,
  Portfolio,
  Services,
} from './sections';

function App() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <div className="overflow-hidden">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="w-[400vw] flex flex-row relative">
            <AboutUs />
            <Services />
            <Portfolio />
          </div>
        </div>
      </div>
      <Blog />
      <ContactUs />
      <Faq />
      <Footer />
      <VideoPlayer />
    </div>
  );
}

export default App;
