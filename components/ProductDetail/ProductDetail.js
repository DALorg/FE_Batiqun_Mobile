import React from "react";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "../../components/ProductDetail/BuyButton";

const ProductDetail = ({ loading, error, product }) => {
  return (
    <div className="SectionContainer">
      <div className="p-[25px] lg:flex lg:flex-col lg:grow lg:shrink lg:basis-[0.7rem]">
        <div className="ImageE1">
          <Image
            src={global.DataUrl + product?.Product_image}
            className="object-contain rounded flex"
            layout="responsive"
            width="300px"
            height="300px"
          />
        </div>
      </div>
      <div className="RightSection">
        <span>
          <h1 className="Title">{product?.Nama_Product}</h1>
        </span>
        <p className="Des">{product?.Description}</p>
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
                    query: { profilid: product?.mintedAddress },
                  }}
                >
                  {product?.mintedAddress?.substring(0, 7) +
                    "..." +
                    product?.mintedAddress?.substring(
                      product?.mintedAddress?.length - 7
                    )}
                </Link>
              </span>
            </span>
          </div>
          <div>
            <label className="CreatorLabel font-black">Pemilik Sekarang</label>
            <div className="AvatarE1">
              <Image src="/logo.png" width="50" height="50" />
            </div>
            <span>
              <span>
                <Link
                  href={{
                    pathname: "/Profile/[profilid]",
                    query: { profilid: product?.ethAddress },
                  }}
                >
                  {product?.ethAddress?.substring(0, 7) +
                    "..." +
                    product?.ethAddress?.substring(
                      product?.ethAddress?.length - 7
                    )}
                </Link>
              </span>
            </span>
          </div>
        </div>
        {product?.TokenID != null &&
        product?.bitMintedStatus == true &&
        product?.txtStatus == "Selling" ? (
          <BuyButton product={product} />
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetail;
