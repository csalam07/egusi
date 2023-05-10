import { menus } from './menus';
import { BiMenuAltRight } from 'react-icons/bi';
import { scroll } from '../../helper';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav>
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">EGUSI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menus?.map((menu) => (
                <li key={menu.title}>
                  <a onClick={() => scroll(menu.id)}>{menu.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-secondary btn-outline btn-sm lg:btn-md">
              Login
            </a>
            <div className="btn btn-sm btn-ghost lg:hidden">
              <BiMenuAltRight className="h-8 w-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
