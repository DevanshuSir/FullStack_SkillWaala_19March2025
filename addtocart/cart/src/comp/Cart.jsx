import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  carttotalPrice,
  deleteCartItem,
} from "../features/cartSlice/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const productCart = useSelector((state) => state.Cart.cartItems);

  const TotalValues = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  dispatch(carttotalPrice());

  return (
    <div className="max-w-3xl mx-auto  space-y-5 px-4 my-20 ">
      {/* Cart Items */}
      {productCart.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl text-center font-bold">You cart is empty</p>
          <Link className="font-bold text-blue-800" to={"/"}>
            Continue Shopping 🛒
          </Link>
        </div>
      ) : (
        productCart.map((value) => (
          <div className="flex items-center justify-between bg-white shadow-2xl p-10 rounded-lg">
            <div className="flex items-center gap-6">
              <img
                src={value.image}
                alt="Product Image"
                className="w-24 h-24 rounded-lg object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="text-gray-900">Price - ${value.price}</p>
                <p className="text-gray-500 ">Qty:{value.quantity}</p>
              </div>
            </div>
            <button
              className="bg-red-600 font-bold px-5 py-1 text-white hover:bg-red-800 text-xl rounded-lg"
              onClick={() => {
                dispatch(deleteCartItem(value));
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}

      {TotalValues.TotalPrice == 0 ? (
        ""
      ) : (
        <div className="bg-white shadow-md p-4 rounded-lg mt-6 sapce-y-2">
          <div className=" flex justify-between text-lg font-bold">
            <span>Total Quantity :</span>
            <span>{TotalValues.TotalQuantity}</span>
          </div>
        </div>
      )}

      {TotalValues.TotalQuantity == 0 ? (
        ""
      ) : (
        <div className="bg-white shadow-md p-4 rounded-lg mt-6 sapce-y-2">
          <div className=" flex justify-between text-lg font-bold">
            <span>Total Price :</span>
            <span>${TotalValues.TotalPrice}</span>
          </div>
        </div>
      )}

      {productCart.length === 0 ? (
        ""
      ) : (
        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          🛒 Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;
