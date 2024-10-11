import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

const Modal = ({ show, onClose, handleChange,handleClick }) => {


  return (
    <Dialog open={show} onClose={onClose} className="relative z-10 w-64">
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-0  sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 md:w-80">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Want A Free Consultation?
                  </DialogTitle>
                  <div className="mt-2">
                  <form className="text-left  w-full">
                    <div className="mb-4">
                      <label
                        for="name"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        name="name"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="email"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        name="email"
                        onChange={handleChange}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="phone"
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      >
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        style={{
                          border: "2px solid #d1d5db",
                          borderRadius: "0.375rem",
                          width: "100%",
                        }}
                        name="phone"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex w-full justify-center rounded-md effetMoveGradient px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Book Now
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
