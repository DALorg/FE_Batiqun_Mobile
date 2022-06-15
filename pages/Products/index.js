import Head from "next/head";
import Image from "next/image";
import { getProducts } from "../../redux/action/productAction";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import ProductCard from "../components/Product-Components/ProductCard";
// import "../js/main.js";

export default function Products() {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, products } = allProductsData;

  const router = useRouter();
  const { Page } = router.query;

  var Pagess = 1;
  var TotalDisplayed = 6;

  if (Page) {
    Pagess = Page;
  }
  const [count, setCount] = useState(6);
  function load() {}

  // LOAD DATA
  useEffect(() => {
    dispatch(getProducts(Pagess, count));
  }, [count]);
  return (
    <div>
      <Head>
        <title>All products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>

      <header className="header" id="header">
        <nav className="nav container">
          <a href="https://nextjs.org">NFT Browse</a>
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
                  <a className="nav__link active-link">
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
                  <a className="nav__link">
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
        <section className="container section section__height" id="home">
          <div className="row justify-center">
            <ProductCard
              ProductData={products}
              loading={loading}
              error={error}
            />

            <button
              className="btn btn-blue"
              onClick={() => setCount(count + 6)}
            >
              Load more
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
