import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import "../../GlobalVariable";
import Cookies from "js-cookie";
import axios from "axios";

const KaryaCard = ({ ProductData, loading, error }) => {
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
      <section className="container section section__height" id="home">
        <div className="section-header">
          <h2 className="section__title">Karya Terbaru</h2>
          <Link href="/Products">
            <a>Lihat semua</a>
          </Link>
        </div>
        <div className="items">
          {loading ? (
            <div className="flex items-center p-24 justify-center space-x-2">
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
            ProductData.map((product) => (
              <>
                <div className="wrapper">
                  <div className="card-rotate-bg"></div>
                  <div className="card">
                    <div className="card-head">
                      {product.Product_image ? (
                        <Image
                          src={global.DataUrl + product.Product_image}
                          alt=""
                          className="object-contain product-img"
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
                        <button className="buy-btn">Buy</button>
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
                            <a
                              href="#"
                              onClick={handleFav(product.encProductId)}
                            >
                              <i className="fa-solid fa-heart text-pink-300"></i>{" "}
                              {product.intFavorites}{" "}
                            </a>
                          ) : (
                            <a
                              href="#"
                              onClick={handleFav(product.encProductId)}
                            >
                              <i className="fa-regular fa-heart"></i>{" "}
                              {product.intFavorites}{" "}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default KaryaCard;
