import { useParams } from "react-router-dom";
import { trimString } from "../functions/functions.js";
import useAdSingle from "../hooks/useAdSingle";

export default () => {
  let { id } = useParams();

  const { data, isLoading, error } = useAdSingle(id);

  return (
    <div className="mt-10 mb-10">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="flex space-between">
          <div className="w-1/2 bg-white p-5">
            <img
              className="w-full mb-5"
              alt={data.title}
              src={trimString(data.image)}
            />
            <div className="text-xl">
              {data.price} {data.currency}
            </div>
            <div className="mt-3 text-xl font-bold">{data.title}</div>
            <div className="mt-3">{data.description}</div>
            <div className="text-xs mt-3 text-gray-500"></div>
          </div>
          <div>user</div>
        </div>
      )}
    </div>
  );
};
