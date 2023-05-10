import { dummy } from '../assets/dummy';

function Services() {
  return (
    <section id="services" className="w-[100vw] hero mt-12 lg:mt-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md lg:mx-auto mb-8 lg:mb-16 lg:text-center">
          <h2 className="mb-4 text-accent-focus text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl opacity-75">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {dummy.map((data) => (
            <div
              key={data.id}
              className="hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary/20 lg:h-12 lg:w-12">
                {data.Icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

//  onClick={() => scroll('about')}
