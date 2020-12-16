// import React from "react";
import { useState } from "react";
import useCategoriesList from "../hooks/useCategoriesList";

const axios = require("axios");

export default () => {
  const {
    data: categoriesList,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesList();

  const [errors, setErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("6");
  const [categoryId, setCategoryId] = useState("1");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("RON");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        accept: "application/json",
        // "content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("currency", currency);
    formData.append("city", city);
    formData.append("county", county);
    formData.append("user_id", userId);
    formData.append("category_id", categoryId);

    try {
      let res = await axios.post(
        "http://localhost:8000/api/ads",
        formData,
        options
      );
      if (res.data.errors) {
        setErrors(res.data.errors);
      }
    } catch (err) {
      const resErrors = err.response.data.errors;
      const entries = Object.entries(resErrors);

      if (entries.length > 0) {
        const newError = [];
        for (let i in resErrors) {
          newError.push(resErrors[i][0]);
        }
        setErrors(newError);
      }
    }
  };

  return (
    <div className="bg-white p-10 mt-10 mb-10 w-full">
      <h2 className="font-bold text-xl mb-4">Adauga anunt nou</h2>
      {errors.length > 0 && (
        <div>
          {errors.map((e, index) => (
            <ul>
              <li
                key={index}
                className="bg-red-400 border border-red-600 text-white p-1 mb-3"
              >
                {e}
              </li>
            </ul>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="hidden"
          value="6"
          name="userId"
          placeholder="Titlu anunt"
        />

        <div className="mb-3">
          <label className="flex justify-between items-center">
            <span className="w-1/3">Titlu anunt:</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Titlu anunt"
              className="w-2/3 border border-gray-300 px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-3">
          {categoriesLoading && <div>incarcare categorii..</div>}
          {categoriesError && <div>eroare incarcare categorii.</div>}

          {!categoriesLoading && !categoriesError && (
            <label className="flex justify-between  items-center">
              <span className="w-1/3">Categorie:</span>
              <select
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                name="category"
                className="w-2/3 border border-gray-300 px-2 py-1"
              >
                {categoriesList.map((category, index) => {
                  return (
                    <option key={index} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </label>
          )}
        </div>
        <div className="mb-3">
          <label className="flex justify-between items-center">
            <span className="w-1/3">Descriere:</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              className="w-2/3 border border-gray-300 px-2 py-1"
            ></textarea>
          </label>
        </div>
        <div className="mb-3">
          <label className="flex align-center">
            <span className="w-1/3">Pret:</span>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              type="number"
              step="0.01"
              placeholder="Pret"
              className="w-1/3 border border-gray-300 px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="flex align-center">
            <span className="w-1/3">Moneda:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              name="currency"
              className="w-1/3 border border-gray-300 px-2 py-1"
            >
              <option value="ron">RON</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="flex justify-between items-center">
            <span className="w-1/3">Oras:</span>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              name="city"
              placeholder="Oras"
              className="w-2/3 border border-gray-300 px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="flex justify-between items-center">
            <span className="w-1/3">Judet:</span>
            <input
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              type="text"
              name="county"
              placeholder="Judet"
              className="w-2/3 border border-gray-300 px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="flex items-center">
            <span className="w-1/3">Imagine:</span>
            <input
              type="file"
              name="image"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
        <input
          type="submit"
          value="Trimite"
          className="bg-gray-800 text-white px-4 py-1 mt-3"
        />
      </form>
    </div>
  );
};
