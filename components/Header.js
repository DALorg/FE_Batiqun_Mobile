import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="https://nextjs.org">Batiqun</a>
        {/* <input
            id="quick_search"
            className="xs-hide style-2"
            name="quick_search"
            placeholder="search item here..."
            type="text"
          /> */}
        <div className="relative mx-auto text-gray-600">
          <input
            type="text"
            className="border border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            placeholder="Cari NFT disini..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/">
                <a
                  className={
                    router.pathname.includes("/")
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="bx bx-home-alt nav__icon"></i>
                  <span className="nav__name">Home</span>
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/Leaderboards">
                <a
                  className={
                    router.pathname.includes("/Leaderboards")
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                  <span className="nav__item">Leaderboards</span>
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/Profile">
                <a
                  className={
                    router.pathname.includes("/Profile")
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__item">Profile</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
