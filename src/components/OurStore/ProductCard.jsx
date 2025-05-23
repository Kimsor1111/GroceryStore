import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ImagePreview from "./ImagePreview.jsx";
import Cart_Wish from "./Cart_Wish.jsx";
import { useWishlist } from "../../Context/WishlistContext.jsx";
import { useCart } from "../../Context/CartContext.jsx";
const ProductCard = ({
  id,
  name,
  price,
  discount,
  rate,
  img,
  category,
  stock,
}) => {
  const [fullStock, setfullStock] = useState(false);
  const [alreadywish, setalreadywish] = useState(false);
  const [hover, setHover] = useState(false);
  const [cart, setCart] = useState(false);
  const [wish, setWish] = useState(false);
  const [OpenImg, setOpenImg] = useState(false);
  const [qty, setQty] = useState(0);
  const { wishlist, dispatchWishlist } = useWishlist();
  const { Cart, dispatchCart } = useCart();
  const isAlreadyInWishlist = wishlist.some((item) => item.id === id);
  useEffect(() => {
    rate = Math.round(rate);
  }, []);
  const handleWishlist = (e) => {
    e.preventDefault();
    if (isAlreadyInWishlist) {
      setalreadywish(true);
      setWish(false);
      setTimeout(() => setalreadywish(false), 2500);
    } else {
      dispatchWishlist({
        type: "ADD",
        payload: {
          id: id,
          name: name,
          price: price,
          discount: discount,
          rate: rate,
          img: img,
          category: category,
          stock: stock,
        },
      });
      setWish(true);
      setalreadywish(false);
      setTimeout(() => setWish(false), 2500);
    }
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    const inCart = Cart.find((item) => item.id === id);
    if (inCart && inCart.qty >= stock) {
      setfullStock(true);
      setTimeout(() => setfullStock(false), 2000);
    } else {
      setQty(qty + 1);
      setCart(true);
      setTimeout(() => setCart(false), 2000);
      dispatchCart({
        type: "ADD",
        payload: {
          id: id,
          name: name,
          price: price,
          discount: discount,
          rate: rate,
          img: img,
          category: category,
          stock: stock,
          qty: 1,
        },
      });
    }
  };
  return (
    <>
      {/* Image preview */}
      <ImagePreview
        img={img}
        OpenImg={OpenImg}
        hide={() => setOpenImg(false)}
      />
      {/* Cart_Wishlist */}
      <Cart_Wish
        img={img}
        name={name}
        category={category}
        qty={qty}
        cart={cart}
        wish={wish}
        price={price}
        discount={discount}
        fullStock={fullStock}
        alreadywish={alreadywish}
        hidecart={() => setCart(false)}
        hidewish={() => setWish(false)}
      />
      {/* Main */}
      <Link
        key={id}
        to={
          stock == 0
            ? "#"
            : `/OurStore/${category.replaceAll(" ", "_")}/${name.replaceAll(
                " ",
                "_"
              )}`
        }
        className={`w-fit h-fit  group cursor-pointer ${
          stock == 0 ? "opacity-50" : null
        }`}
        onClick={(e) => {
          stock == 0 ? e.preventDefault() : null;
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="w-full h-fit relative">
          <img
            src={img}
            alt={name}
            className="border rounded border-gray-500/50"
          />
          {stock == 0 ? (
            <div
              className={`w-full h-full absolute flex flex-col justify-between top-0 left-0 p-2 group-hover:bg-gray-500/10 ${
                hover ? "bg-gray-500/10" : ""
              } rounded`}
            >
              <span className="size-fit rounded bg-[#FF6150] px-2.5 right-2 top-2 text-white tracking-wider md:text-[12px] text-[10px] absolute">
                Out of Stock
              </span>
            </div>
          ) : (
            <div
              className={`w-full h-full absolute flex flex-col justify-between top-0 left-0 p-2 group-hover:bg-gray-500/10 ${
                hover ? "bg-gray-500/10" : ""
              } rounded`}
            >
              {discount > 0 ? (
                <span className="size-fit rounded bg-[#FF6150] px-2.5 right-2 top-2 text-white tracking-wider md:text-[12px] text-[10px] absolute">
                  -{discount}%
                </span>
              ) : null}
              <div
                className={`${
                  hover
                    ? "translate-x-0 visible"
                    : "-translate-x-[30px] invisible"
                } w-full h-fit  flex flex-col items-start gap-2 -translate-x-[30px] invisible group-hover:translate-x-0 group-hover:visible transition-all duration-200`}
              >
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenImg(true);
                  }}
                  className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white"
                >
                  <FontAwesomeIcon
                    icon={faImage}
                    className="text-[#59C491] md:text-sm text-[11px]"
                  />
                </span>
                <span
                  onClick={(e) => handleWishlist(e)}
                  className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-[#59C491] md:text-sm text-[11px]"
                  />
                </span>
              </div>
              <button
                onClick={(e) => handleAddToCart(e)}
                className={`${
                  hover
                    ? "translate-y-0 visible"
                    : "translate-y-[30px] invisible"
                } w-full lg:h-[40px] h-[30px] cursor-pointer lg:flex hidden bg-white gap-2 rounded items-center justify-center translate-y-[30px]  invisible group-hover:translate-y-0 group-hover:visible transition-all duration-200`}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#59C491] text-[10px] md:text-[12px]"
                />
                <p className="text-[#59C491] text-[10px] md:text-sm">
                  Add to cart
                </p>
              </button>
            </div>
          )}
        </div>
        <div className="w-full h-fit py-2 bg-white">
          <span className="w-full h-[20px]  flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`text-[13px] ${
                  index < rate ? " text-amber-300" : "text-gray-300"
                }`}
              />
            ))}
          </span>
          <p className="md:text-[15.5px] text-[13px] font-[400] py-2 pr-7 capitalize">
            {name}
          </p>
          <p className="text-[16px] font-medium text-[#6ddca6]">
            $
            {discount > 0 ? (
              <>
                <span>{(price * (1 - discount / 100)).toFixed(2)}</span>
                <del className="pl-2 text-[13px] text-gray-700/40">
                  ${price.toFixed(2)}
                </del>
              </>
            ) : (
              <span>{price.toFixed(2)}</span>
            )}
          </p>
          <button
            onClick={(e) => handleAddToCart(e)}
            className={` w-full h-[30px] lg:hidden flex bg-[#59C491] gap-2 rounded items-center justify-center mt-5 cursor-pointer`}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white text-[12px]"
            />
            <p className="text-white text-sm">Add to cart</p>
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
