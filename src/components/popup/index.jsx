import React from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

const Modal = ({ show, onClose, handleChange, handleClick }) => {
  return (
    <Dialog open={show} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-6 sm:my-0  sm:max-w-lg">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b pb-3">
            <div className="items-center space-x-2">
              <img
                src="../../img/brigade_logo.png" // Add logo path here
                alt="Brigade Logo"
                className="w-100 h-auto"
              />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              ×
            </button>
          </div>

          {/* Form Section */}
          <div className="mt-4">
            <h3 className="text-lg text-center font-semibold text-gray-700">
              Register Here and Avail the <span className="text-red-500">Best Offers!</span>
            </h3>
            <form className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Mobile No
                </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Mobile No"
                    className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mr-2"
                  checked={true}
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-600"
                >
                  I authorize company representatives to contact me via call, SMS, email, or WhatsApp about its products and offers.
                </label>
              </div>
            </form>
          </div>

          {/* Footer Section */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleClick}
              className="inline-flex w-full justify-center rounded-md effetMoveGradient px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-100"
            >
              Get Instant Call Back
            </button>
          </div>
        </DialogPanel>
        
      </div>
    </Dialog>
  );
};

export default Modal;
