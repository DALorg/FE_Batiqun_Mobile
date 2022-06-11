import React from "react";
import Image from "next/dist/client/image";
import { useDispatch } from "react-redux";
import "../../../GlobalVariable";

const KaryaCard = ({ ProductData, loading, error }) => {

    return (
      <>
        <section className="container section section__height" id="home">
          <div className="section-header">
            <h2 className="section__title">Karya Terbaru</h2>
            <a href="">see all</a>
          </div>
          <div className="items">
          {loading
            ? "Loading..." : error ? error.message
            : ProductData.map((product) => (
            <div className="wrapper">
              <div className="card-rotate-bg"></div>
              <div className="card">
                <div className="card-head">
                {product.Product_image
                ?
                  <Image
                    src={global.DataUrl + product.Product_image}
                    alt=""
                    className="product-img"
                    width="300"
                    height="250"
                  />
                  :
                  <Image
                    src="/profile.jpg"
                    alt=""
                    className="product-img"
                    width="300"
                    height="250"
                  />
                }
                  <button className="buy-btn">Buy</button>
                </div>
                <div className="card-body">
                  <h4 className="product-name">
                    <a href="">{product.Nama_Product}</a>
                  </h4>
                  <p className="deskripsi-product">{product.Description}</p>
                  <div className="wrapper-flex">
                    <div className="current-price">
                      <i className="fa-brands fa-ethereum"></i>&nbsp;
                      {product.Harga?
                       product.Harga : "Not For Sale"} 
                    </div>
                    <div className="react">
                      <i className="fa-regular fa-heart"></i> &nbsp; Favorites
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
      </>
    );
  }
  
  export default KaryaCard;