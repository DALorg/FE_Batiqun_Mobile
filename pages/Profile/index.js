import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { requireLogin } from "../../AuthVerification/requireLogin";
import { useMoralis } from "react-moralis";
import { getProfile, getUsers } from "../../redux/action/profileAction";
import ProductCard from "../../Components/Product-Components/ProductCard";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
// import "../js/main.js";
//abc

const style = {
  bannerImageContainer: `h-64 w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-black`,
  endRow: `w-full flex justify-end text-black`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-40`,
  socialIconsContent: `flex container justify-around text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[78vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

export default function Home() {
  const dispatch = useDispatch();
  const allProfileData = useSelector((state) => state.Profiles);
  const { loading, error, profile } = allProfileData;
  console.log(profile);
  const { logout } = useMoralis();

  const router = useRouter();
  const { isCreated, isFav, Page } = router.query;

  var created = false;
  var favorite = false;
  var Pagess = 0;
  var TotalDisplayed = 4;

  if (isCreated) {
    created = true;
  }

  if (isFav) {
    favorite = true;
  }

  if (Page == null) {
    Pagess = 1;
  } else {
    Pagess = Page;
  }

  // LOAD DATA
  useEffect(() => {
    dispatch(
      getProfile(
        Cookies.get("ethAddress"),
        Cookies.get("ethAddress"),
        Cookies.get("UserData"),
        created,
        favorite,
        Pagess,
        TotalDisplayed
      )
    );
  }, []);

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.replace("/Login");
  }
  function logoff() {
    deleteAllCookies();
    logout();
  }
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>

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
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/">
                  <a className="nav__link">
                    <i className="bx bx-home-alt nav__icon"></i>
                    <span className="nav__name">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/Leaderboards">
                  <a className="nav__link">
                    <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                    <span className="nav__item">Leaderboards</span>
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/Profile">
                  <a className="nav__link active-link">
                    <i className="bx bx-user nav__icon"></i>
                    <span className="nav__item">Profile</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* <section className="container section section__height" id="home"> */}
        {/* <div className="header-title">
            <h3>Connect your wallet.</h3>
          </div>
          <div className="text-center">
            <button type="button" className="btnConnect">
              <img src="image5.png" />
              Connect with Metamask
            </button>
          </div> */}
        <div className={style.bannerImageContainer}>
          <img className={style.bannerImage} src="bg.jpg" alt="banner" />
        </div>
        <div className={style.infoContainer}>
          <div className={style.midRow}>
            <img
              className={style.profileImg}
              src="profile.jpg"
              alt="profile image"
            />
          </div>
          <div className={style.endRow}>
            <div className={style.socialIconsContainer}>
              <div className={style.socialIconsWrapper}>
                <div className={style.socialIconsContent}>
                  <div className={style.socialIcon}>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className={style.divider} />
                  <div className={style.socialIcon}>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className={style.divider} />
                  <Link href="Profile/EditProfile">
                    <div className={style.socialIcon}>
                      <i className="fa-solid fa-gear"></i>
                    </div>
                  </Link>
                  <div className={style.divider} />
                  <a onClick={logoff}>
                    <div className={style.socialIcon}>
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.midRow}>
            <div className={style.title}>adssa</div>
          </div>
          <div className={style.midRow}>
            <div className={style.createdBy}>
              <i className="fa-brands fa-ethereum" />
              TOKEN
            </div>
          </div>
          <div className={style.midRow}>
            <div className={style.statsContainer}>
              <div className={style.collectionStat}>
                <div className={style.statValue}>342</div>
                <div className={style.statName}>items</div>
              </div>
              <div className={style.collectionStat}>
                <div className={style.statValue}>213</div>
                <div className={style.statName}>owners</div>
              </div>
              <div className={style.collectionStat}>
                <div className={style.statValue}>
                  <i className="fa-brands fa-ethereum"></i>
                  4241
                </div>
                <div className={style.statName}>floor price</div>
              </div>
            </div>
          </div>
          <div className={style.midRow}>
            <div className="w-full mx-auto mt-4  rounded">
              <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
                <li className="px-4 py-2 -mb-px font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    id="default-tab"
                    href="./Profile"
                    className={
                      !isCreated && !isFav ? "nav__link active-link" : "link"
                    }
                  >
                    Koleksi
                  </a>
                </li>
                <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    href="./Profile?isCreated=true"
                    className={isCreated ? "nav__link active-link" : "link"}
                  >
                    Dibuat
                  </a>
                </li>
                <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
                  <a
                    href="./Profile?isFav=true"
                    className={isFav ? "nav__link active-link" : "link"}
                  >
                    Favorit
                  </a>
                </li>
              </ul>

              <div id="tab-contents">
                <div id="collected" className="p-4">
                  <ProductCard
                    ProductData={profile.Products}
                    loading={loading}
                    error={error}
                  />
                </div>
                <div id="created" className="hidden p-4">
                  Second tab
                </div>
                <div id="favorit" className="hidden p-4">
                  Third tab
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export const getServerSideProps = requireLogin((context) => {
  const { req, res } = context;
  const token = req.cookies.ethAddress;
  console.log(token);
  return { props: {} };
});
