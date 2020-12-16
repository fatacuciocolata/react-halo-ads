import { useState } from "react";

import useAdsList from "../hooks/useAdsList";
import { Ad } from "../components/ad";

export default () => {
  const [term, setTerm] = useState("");
  const { data, isLoading, error } = useAdsList(term);

  return (
    <div>
      <div className="mt-5 w-full text-base">
        <div className="flex mb-5 w-1/2">
          <input
            className="w-full p-4 focus:outline-none"
            type="text"
            placeholder="Macbook Pro 2018.."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button className="w-40 p-4 text-gray-800 font-bold text-sm bg-white border-l border-gray-300	hover:bg-gray-800 hover:text-white transition duration-500">
            Search
          </button>
        </div>
        <div className="mb-5">
          <span className="text-sm text-gray-800">Top Keywords:</span>
          <span className="p-2 ml-3 bg-gray-300 border text-gray-800 font-bold text-xs">
            Macbook Pro
          </span>
          <span className="p-2 ml-3 bg-gray-300 border text-gray-800 font-bold text-xs">
            Macbook Air
          </span>
          <span className="p-2 ml-3 bg-gray-300 border text-gray-800 font-bold text-xs">
            Macbook Retina
          </span>
        </div>
      </div>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data &&
            data.map((ad, index) => {
              return <Ad key={index} ad={ad} />;
            })}
        </ul>
      )}
    </div>
  );
};
