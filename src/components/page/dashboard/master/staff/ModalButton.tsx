"use client";
import { JSX } from "@emotion/react/jsx-runtime";
import React, { useState } from "react";
import { FaPlus, FaEyeSlash, FaEye } from "react-icons/fa";

type Role = "ADMIN" | "OPERASIONAL" | "LAPANGAN" | "PILOT";

interface IFormData {
  kode: string;
  nama: string;
  username: string;
  password: string;
  jabatan: string;
  role: Role;
}

const AddStaffForm = (): JSX.Element => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<IFormData>({
    kode: "",
    nama: "",
    username: "",
    password: "",
    jabatan: "",
    role: "OPERASIONAL",
  });

  const toggleFormVisibility = (): void => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Data Form:", formData);
    setIsFormVisible(false);
  };

  return (
    <>
      <button
        onClick={toggleFormVisibility}
        className="inline-flex items-center justify-between font-semibold gap-2 border-slate-200 border bg-white px-5 py-2.5 rounded-sm hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-200 transition-all duration-300"
      >
        <span className="inline-flex items-center gap-2">
          <FaPlus />
          Tambah Staff
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isFormVisible
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <section className="p-6 mt-2 bg-white border border-slate-200 rounded-sm shadow-sm">
            <section>
              <h5 className="text-xl font-bold text-slate-800 mb-2">
                Form Tambah Staff
              </h5>
              <div className="bg-slate-200 w-full h-[1px]"></div>
            </section>
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
                <div>
                  <label
                    htmlFor="kode"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Kode Staff
                  </label>
                  <input
                    type="text"
                    id="kode"
                    name="kode"
                    value={formData.kode}
                    onChange={handleChange}
                    placeholder="Contoh: STF001"
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-2">
                  <label
                    htmlFor="nama"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap staff"
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="jabatan"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Jabatan
                  </label>
                  <input
                    type="text"
                    id="jabatan"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleChange}
                    placeholder="Contoh: Pilot Drone, Manajer Operasional"
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username untuk login"
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukkan password"
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 top-6 flex items-center pr-3"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-gray-400" />
                    ) : (
                      <FaEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1 h-9"
                    required
                  >
                    <option value="ADMIN">Admin</option>
                    <option value="OPERASIONAL">Operasional</option>
                    <option value="LAPANGAN">Lapangan</option>
                    <option value="PILOT">Pilot</option>
                  </select>
                </div>

                <div className="bg-slate-200 w-full h-[1px] col-span-full"></div>
                <div className="col-span-full flex justify-end pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md border border-transparent bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Simpan Data
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddStaffForm;
