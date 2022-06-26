import React from "react";
import Image from "next/dist/client/image";
import { useDispatch } from "react-redux";
import "../../GlobalVariable";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

const ProductCard = ({ ProductData, loading, error, isFav }) => {
  const handleFav = (ProductId) => {
    return function (e) {
      e.preventDefault();
      axios({
        url: global.apiurl + "api/Favorite/Fav",
        method: "POST",
        data: {
          objRequestData: {
            FavoriteProductId: "7Tk$K9N2nJIPW1BkBiCjpA__",
            ProductId: ProductId,
            ethAddress: Cookies.get("ethAddress"),
          },
        },
      }).then((res) => {
        console.log(res);
        location.reload();
      });
    };
  };
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {loading ? (
          <div className="items-center justify-center space-x-2">
            <div
              className="spinner-grow inline-block w-40 h-40 bg-current rounded-full opacity-0"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          error.message
        ) : (
          ProductData?.map((product) => (
            <>
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
                  <Link
                    href={{
                      pathname: "/Products/[id]",
                      query: { id: product.encProductId },
                    }}
                  >
                    <button className="buy-btn">Beli</button>
                  </Link>
                </div>
                <div className="card-body">
                  <h4 className="product-name">
                    <a href="">{product.Nama_Product}</a>
                  </h4>
                  <p className="deskripsi-product">{product.Description}</p>
                  <div className="wrapper-flex">
                    <div className="current-price">
                      <i className="fa-brands fa-ethereum"></i>&nbsp;
                      {product.Harga ? product.Harga : "Not For Sale"}
                    </div>
                    <div className="react">
                      {product.isFavProduct == true ? (
                        <a href="#" onClick={handleFav(product.encProductId)}>
                          <i className="fa-solid fa-heart text-pink-300"></i>{" "}
                          {product.intFavorites}{" "}
                        </a>
                      ) : (
                        <a href="#" onClick={handleFav(product.encProductId)}>
                          <i className="fa-regular fa-heart"></i>{" "}
                          {product.intFavorites}{" "}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default ProductCard;
