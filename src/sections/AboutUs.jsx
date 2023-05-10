import { AiFillPlayCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { scroll } from '../helper';

function AboutUs() {
  return (
    <section id="about" className="w-[100vw] hero">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg"
            alt="dashboard image"
          />
          <div className="absolute top-[50%] left-[50%]">
            <label htmlFor="videoPlayer">
              <AiFillPlayCircle className="w-12 h-12 bg-accent-focus rounded-full -ml-6 -mt-6 cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-accent-focus">
            About Us
          </h2>
          <p className="mb-6 font-light opacity-75">
            EGUSI is a Software Development and Digital Solution Provider
            working with enterprises and start-ups to deliver solutions tailored
            for their business. Be it mobile apps, eCommerce website, financial
            system, business application and platform, we take on a pragmatic
            and efficient approach towards planning and development.
          </p>
          <p className="mb-6 font-light opacity-75">
            For almost 10 years we’ve had the pleasure of working with our
            clients from industries ranging from Financial, Retail, Logistics,
            Property, Utilities & Telecoms, and Start-ups. We help them create
            innovative, value-adding solutions to address their most complex
            problems.
          </p>
          <button className="btn gap-2" onClick={() => scroll('services')}>
            Services
            <AiOutlineArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
