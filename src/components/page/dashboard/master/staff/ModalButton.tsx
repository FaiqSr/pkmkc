"use client";
import React, { useState } from "react";

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="bg-white border-slate-200 font-semibold px-5 py-2 rounded-sm hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 transition-colors duration-300"
      >
        Tambah Data
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-sm shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <section className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-gray-800">
                Form Tambah Data Staff
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
                aria-label="Tutup modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </section>

            <form className="py-4 space-y-4">
              <div>
                <label
                  htmlFor="kode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kode
                </label>
                <input
                  id="kode"
                  type="text"
                  placeholder="Contoh: STF001"
                  className="w-full rounded-md p-2 border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-md p-2 border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="jabatan"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Jabatan
                </label>
                <input
                  id="jabatan"
                  type="text"
                  placeholder="Contoh: Manajer Operasional"
                  className="w-full rounded-md p-2 border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </form>

            <section className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={closeModal}
                className="bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-sm hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors duration-300"
              >
                Batal
              </button>
              <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
                Simpan Data
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalButton;
