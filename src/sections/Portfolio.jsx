import { portfolio } from '../assets/portfolio';
import { PortfolioCard } from '../components';

function Portfolio() {
  return (
    <section id="portfolio" className="w-[100vw] hero">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-accent-focus">
            Our work
          </h2>
          <p className="mb-6 font-light opacity-75">
            We partner with our clients to brand, design, and build products and
            platforms that balance form and function, so they work better for
            everyone.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {portfolio.map((data) => (
            <PortfolioCard
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              domain={data.domain}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
