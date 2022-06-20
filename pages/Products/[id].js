import styled from "styled-components";
import React from "react";
import ProductImage from "../../components/ProductDetail/ProductImage";
import GeneralDetails from "../../components/ProductDetail/GeneralDetails";
import Purchase from "../../components/ProductDetail/Purchase";
import ItemActivity from "../../components/ProductDetail/ItemActivity";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getById } from "../../redux/action/productAction";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, product } = allProductsData;

  const router = useRouter();
  const {id}  = router.query;

  console.log(id);
  // LOAD DATA
  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    //
    <article className="AssetEl">
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
      <div className="SectionContainer">
        <div className="LeftSection">
          <div className="ImageE1">
            <Image
              src="/profile.jpg"
              className="object-contain"
              layout="responsive"
              width="500px"
              height="500px"
            />
          </div>
        </div>
        <div className="RightSection">
          <span>
            <h1 className="Title">{product.Nama_Product}</h1>
          </span>
          <p className="Des">
            King Bitcoin is the oldest and wisest of the cryptoskeletons. When
            all hope is lost the others look to him for guidance into the lands
            of unlimited profit.
          </p>
          <div className="AuthorContainer justify-between">
            <div className="">
              <label className="CreatorLabel font-extrabold">Pembuat</label>
              <div className="AvatarE1">
                <Image src="/logo.png" width="50" height="50" />
              </div>
              <span>
                <span>newk3d</span>
              </span>
            </div>
            <div>
              <label className="CreatorLabel font-black">
                Pemilik Sekarang
              </label>
              <div className="AvatarE1">
                <Image src="/logo.png" width="50" height="50" />
              </div>
              <span>
                <span>newk3d</span>
              </span>
            </div>
          </div>
          <Purchase />
        </div>
      </div>
      <div className="itemActivity">
        <ItemActivity />
      </div>
    </article>
  );
}

export default ProductDetail;
