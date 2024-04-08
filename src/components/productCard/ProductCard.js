import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const ProductCard = (props) => {
  let { name, displayImage, price, ratings } = props;
  return (
    <div className="w-full max-w-sm bg-[#393939] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-[30px] ml-[300px] bg-black rounded-xl">
        <MdFavoriteBorder className="text-[white] text-[30px] font-lighter " />
      </div>
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={displayImage}
          alt="product image"
        />
      </a>

      <div className="px-5 pb-5 bg-black">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-[#12daa8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {/* Repeat the star rating SVGs */}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {ratings}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-white dark:text-white">
            ₹{price}
          </span>
          <delete className="font-semibold text-m line-through text-white ml-[16px]">
            ₹99999
          </delete>
        </div>
        <div className="flex text-[white] py-[23px]">
          <CiDeliveryTruck className="text-[26px] gap-3 mr-[5px] " />
          <span className="text-[15px] py-[4px]">
            Standard Delivery by Tomorrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
