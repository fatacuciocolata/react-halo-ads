import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container mx-auto px-32 py-2 flex justify-between items-center shadow bg-gray-800">
      <div className="text-3xl text-white font-bold">
        <Link to="/">Halo</Link>
      </div>
      <div>
        <div className="flex justify-between items-center text-sm">
          <a className="font-bold text-white">Login</a>
          <button className="ml-10 p-3 bg-white text-gray-800 font-bold text-sm hover:bg-gray-300 transition duration-500">
            <Link to="/add">Post new Ad</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
