import { faqs } from '../assets/faqs';
import { Collaps } from '../components';

function Faq() {
  return (
    <section id="faq" className="hero w-[100vw]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-accent-focus">
          FAQ
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl opacity-75">
          Have questions about our services? Check out our frequently asked
          questions section for answers to common questions about our pricing,
          timelines, and deliverables. If you still have questions, don&apos;t
          hesitate to get in touch with us directly.
        </p>
        <div>
          {faqs.map((faq) => (
            <Collaps
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              id={faq.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
