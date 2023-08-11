import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import ToyTable from "./ToyTable";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import titles from "../../title";

const AllToys = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [limit, setLimit] = useState(20);

  const url = `https://toy-cars-market-place-server.vercel.app/addedToys?limit=${limit}&email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
        } else {
          logOut()
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.log(error));
        }
      });
  }, [url, limit, navigate]);

  let count = 1;

  return (
    <>
      <Helmet>
        <title>{titles.allToys}</title>
      </Helmet>
      <div className="overflow-x-auto lg:px-5 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-14 lg:py-20">
        <h2 className="text-4xl font-bold text-center mb-14">All Toys</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[16px]">
              <th></th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((loadedToy) => (
              <ToyTable
                key={loadedToy._id}
                loadedToy={loadedToy}
                count={count++}></ToyTable>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-10 w-2/4 mx-auto">
          {limit < 21 ? (
            <button
              onClick={() => setLimit(50)}
              className="btn btn-accent w-full">
              show more
            </button>
          ) : (
            <button
              onClick={() => setLimit(20)}
              className="btn btn-neutral w-full">
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AllToys;
