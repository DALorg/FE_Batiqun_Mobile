import React from "react";
import Image from "next/dist/client/image";
import { useDispatch } from "react-redux";
import "../../../GlobalVariable";

const ProductCard = ({ ProductData, loading, error }) => {
  return (
    <>
      
          {loading
            ? "Loading..."
            : error
            ? error.message
            : ProductData.map((product) => (
                <>
                  <div className="wrapper">
                    <div className="card-rotate-bg"></div>
                    <div className="card">
                      <div className="card-head">
                        {product.Product_image ? (
                          <Image
                            src={global.DataUrl + product.Product_image}
                            alt=""
                            className="object-contain object-scale-down product-img"
                            width="300"
                            height="250"
                          />
                        ) : (
                          <Image
                            src="/profile.jpg"
                            alt=""
                            className="object-contain product-img"
                            width="300"
                            height="250"
                          />
                        )}
                        <button className="buy-btn">Buy</button>
                      </div>
                      <div className="card-body">
                        <a href="">{product.Nama_Product}</a>
                        <p className="deskripsi-product">
                          {product.Description}
                        </p>
                        <div className="wrapper-flex">
                          <div className="current-price">
                            <i className="fa-brands fa-ethereum"></i>&nbsp;
                            {product.Harga ? product.Harga : "Not For Sale"}
                          </div>
                          <div className="react">
                            <i className="fa-regular fa-heart"></i> &nbsp;
                            Favorites
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

    </>
  );
};

export default ProductCard;
