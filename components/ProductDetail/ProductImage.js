import React from "react";
import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
};

const ProductImage = () => {
  return (
    <div>
      <div className="card-header">
        <img src="profile.jpg" alt="" />
      </div>
    </div>
  );
};

export default ProductImage;
