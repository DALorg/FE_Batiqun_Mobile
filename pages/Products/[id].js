import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getById } from "../../redux/action/productAction";
import styled from "styled-components";
import React from "react";
import ProductImage from "../../components/ProductDetail/ProductImage";
import GeneralDetails from "../../components/ProductDetail/GeneralDetails";
import Purchase from "../../components/ProductDetail/Purchase";
import ItemActivity from "../../components/ProductDetail/ItemActivity";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import "../../GlobalVariable";
import BuyButton from "../../components/ProductDetail/BuyButton";
import Head from "next/head";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, product } = allProductsData;

  const router = useRouter();
  const { id } = router.query;

  // LOAD DATA
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      dispatch(getById(id));
    }
  }, [id]);

  return (
    //
    <article className="AssetEl">
      <Head>
        <title>Detil Produk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>
      <Header />
      <div className="SectionContainer">
        <div className="LeftSection">
          <div className="ImageE1">
            <Image
              src={global.DataUrl + product.Product_image}
              className="object-contain flex"
              layout="responsive"
              width="400px"
              height="400px"
            />
          </div>
        </div>
        <div className="RightSection">
          <span>
            <h1 className="Title">{product.Nama_Product}</h1>
          </span>
          <p className="Des">{product.Description}</p>
          <div className="AuthorContainer justify-between">
            <div className="">
              <label className="CreatorLabel font-extrabold">Pembuat</label>
              <div className="AvatarE1">
                <Image src="/logo.png" width="50" height="50" />
              </div>
              <span>
                <span>
                  <Link
                    href={{
                      pathname: "/Profile/[profilid]",
                      query: { profilid: product.ethAddress },
                    }}
                  >
                    {product.mintedAddress?.substring(0, 7) +
                      "..." +
                      product.mintedAddress?.substring(
                        product.mintedAddress?.length - 7
                      )}
                  </Link>
                </span>
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
                <span>
                  <Link
                    href={{
                      pathname: "/Profile/[profilid]",
                      query: { profilid: product.ethAddress },
                    }}
                  >
                    {product.ethAddress?.substring(0, 7) +
                      "..." +
                      product.ethAddress?.substring(
                        product.ethAddress?.length - 7
                      )}
                  </Link>
                </span>
              </span>
            </div>
          </div>
          {product.TokenID != null &&
          product.bitMintedStatus == true &&
          product.txtStatus == "Selling" ? (
            <BuyButton product={product} />
          ) : null}
        </div>
      </div>
      <div className="itemActivity">
        <ItemActivity PA={product} />
      </div>
    </article>
  );
};

export default ProductDetail;
