import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';

function PortfolioCard({ id, image, title, description, domain }) {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:border border-primary-focus transition duration-300 ease-in-out">
      <a href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg pl-2"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
          <a href="#">{title}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400 capitalize">
          {domain}
        </span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <a href="#" className="">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="#" className="tooltip tooltip-right" data-tip="view live">
              <AiOutlineEye />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
