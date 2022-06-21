import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
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
import "../../components/ApiComponent/GlobalVariable";
import BuyButton from "../../components/ProductDetail/BuyButton";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const {loading,error,product} = allProductsData;

  const router = useRouter();
  const {id}  = router.query;

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
    <Header />
      <div className="SectionContainer">
        <div className="LeftSection">
          <div className="ImageE1">
            <Image
              src={global.apiurl + "Data/" + product.Product_image}
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
          {product.Description}
          </p>
          <div className="AuthorContainer justify-between">
            <div className="">
              <label className="CreatorLabel font-extrabold">Pembuat</label>
              <div className="AvatarE1">
                <Image src="/logo.png" width="50" height="50" />
              </div>
              <span>
                <span>{product.mintedAddress?.substring(0, 7) + "..." + product.mintedAddress?.substring(product.mintedAddress?.length - 7)}</span>
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
                <span>{product.ethAddress?.substring(0, 7) + "..." + product.ethAddress?.substring(product.ethAddress?.length - 7)}</span>
              </span>
            </div>
          </div>
          {product.TokenID != null && product.bitMintedStatus == true && product.txtStatus == "Selling"  ? 
          <BuyButton product={product} />
          : null}
        </div>
      </div>
      <div className="itemActivity">
        <ItemActivity PA={product}/>
      </div>
    </article>
  );
}

export default ProductDetail;
