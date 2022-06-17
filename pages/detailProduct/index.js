import React from "react";
import ProductImage from "../../components/ProductDetail/ProductImage";
import GeneralDetails from "../../components/ProductDetail/GeneralDetails";
import Purchase from "../../components/ProductDetail/Purchase";
import ItemActivity from "../../components/ProductDetail/ItemActivity";

const style = {
  wrapper: `flex flex-col items-center text-[#e5e8eb]`,
  container: `p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
};

export default function index() {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <ProductImage />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails />
              <Purchase />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  );
}
