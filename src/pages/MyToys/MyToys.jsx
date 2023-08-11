import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import MyToyTable from "./MyToyTable";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import titles from "../../title";

const MyToys = () => {
  const { user, logOut } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://toy-cars-market-place-server.vercel.app/addedToys?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setAllToys(data);
        } else {
          logOut().then(() => {
            navigate("/");
          });
        }
      });
  }, []);

  const myToys = allToys.filter((toy) => toy.email === user.email);

  let count = 1;

  return (
    <>
      <Helmet>
        <title>{titles.myToys}</title>
      </Helmet>
      <div className="overflow-x-auto lg:px-5 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-14 lg:py-20">
        <h2 className="text-4xl font-bold text-center mb-14">My Toys</h2>
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
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((loadedToy) => (
              <MyToyTable
                key={loadedToy._id}
                loadedToy={loadedToy}
                count={count++}
                allToys={allToys}
                setAllToys={setAllToys}></MyToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
