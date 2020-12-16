import { Link } from "react-router-dom";
import { trimString } from "../functions/functions.js";
import moment from "moment";

export const Ad = ({ ad }) => {
  return (
    <div className="flex justify-between mb-2 p-3 bg-white w-full items-center">
      <div className="w-1/6">
        <Link to={`/ads/${ad.id}`}>
          <img alt={ad.title} src={trimString(ad.image)} />
        </Link>
      </div>
      <div className="w-4/6 ml-5">
        <div className="font-bold">
          <Link to={`/ads/${ad.id}`}>{ad.title}</Link>
        </div>
        <div>
          {ad.short_description}
          <div className="text-gray-400">{moment(ad.created_at).fromNow()}</div>
        </div>
      </div>
      <div className="w-1/6 text-center font-bold text-xl">
        {ad.price} {ad.currency.toUpperCase()}
      </div>
    </div>
  );
};
