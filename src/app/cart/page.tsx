"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(courses.slice(0, 3));

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalOriginalPrice = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-8">
          {cartItems.length} {cartItems.length === 1 ? "Course" : "Courses"} in Cart
        </p>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Keep shopping to find a course!</p>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <Link href={`/courses/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Link href={`/courses/${item.id}`}>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight hover:text-purple-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">By {item.instructor}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-sm font-bold text-yellow-700">{item.rating}</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-3 h-3 ${star <= Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            ({item.reviews.toLocaleString()})
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                          <span>{item.duration}</span>
                          <span>&bull;</span>
                          <span>{item.lectures} lectures</span>
                          <span>&bull;</span>
                          <span>{item.level}</span>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right shrink-0">
                        <div className="text-lg font-bold text-purple-600">${item.price}</div>
                        <div className="text-sm text-gray-400 line-through">${item.originalPrice}</div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Original Price:</span>
                    <span className="text-gray-500 line-through">${totalOriginalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discounts:</span>
                    <span className="text-green-600 font-medium">
                      -${(totalOriginalPrice - totalPrice).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-base font-bold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors mb-3">
                  Checkout
                </button>

                {/* Coupon */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Have a coupon?</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
