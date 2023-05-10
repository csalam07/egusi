import { VideoBg } from '../components';
import { BsMouse } from 'react-icons/bs';
import { scroll } from '../helper';

function Hero() {
  return (
    <section className="hero">
      <VideoBg />
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            We Are Software Engineers That Focus on Delivery
          </h1>
          <p className="mb-5 text-2xl">
            PRAGMATIC & EFFICIENT APPROACH TOWARDS SOFTWARE DEVELOPMENT
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
        <button
          className="absolute md:bottom-10 bottom-5"
          onClick={() => scroll('about')}
        >
          <BsMouse className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
