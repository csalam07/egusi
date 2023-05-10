import { BsArrowRight } from 'react-icons/bs';
import { articles } from '../assets/articles';

function Blog() {
  return (
    <section id="blog" className="w-[100vw]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-accent-focus text-3xl lg:text-4xl tracking-tight font-extrabold">
            Our Blog
          </h2>
          <p className="font-light  sm:text-xl opacity-75">
            Stay up to date with the latest developments in AI solutions for
            radiology research by subscribing to our blog.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-6 bg-base-200 rounded-lg border border-neutral shadow-md"
            >
              <div className="flex justify-between items-center mb-5 text-secondary/75">
                <span className="bg-base-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded gap-1">
                  {article.Icon}
                  {article.blogType}
                </span>
                <span className="text-sm">{article.time}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight">
                <a href="#">{article.title}</a>
              </h2>
              <p className="mb-5 font-light opacity-75">
                {article.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={article.profile}
                    alt={article.name}
                  />
                  <span className="font-medium">{article.name}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary hover:underline"
                >
                  Read more
                  <BsArrowRight className="ml-1 h-6 w-6" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
