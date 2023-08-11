import { Rating, Star } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const ViewDetails = () => {
  const toy = useLoaderData();

  const { name, picture, price, rating } = toy;

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  flex justify-center items-center py-10 lg:py-14">
      <div className="card mx-4 md:mx-0 shadow-2xl shadow-gray-900 rounded-lg">
        <figure>
          <img src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-xl font-semibold">Price: {"$ " + price} k</p>
          <Rating
            readOnly
            style={{ maxWidth: 120 }}
            value={rating}
            itemStyles={myStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
