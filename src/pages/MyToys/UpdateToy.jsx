import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import titles from "../../title";

const UpdateToy = () => {
  const loadedToy = useLoaderData();
  const { _id, price, description, quantity } = loadedToy;

  const handleUpdateAToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = { price, quantity, description };

    fetch(`https://toy-cars-market-place-server.vercel.app/addedToys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your toy info has been updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>{titles.update}</title>
      </Helmet>
      <div className="py-14 lg:py-20 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        {/* form */}
        <form
          onSubmit={handleUpdateAToy}
          className="w-11/12 lg:w-7/12 mx-auto px-7 lg:px-10 py-16 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-200 shadow-lg shadow-gray-700">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Update A Toy
          </h2>

          {/* input field row 3 */}
          <div className="w-full lg:w-11/12  mx-auto lg:flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Toy Price"
                name="price"
                defaultValue={price}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* input field row 4 */}
          <div className="w-full lg:w-11/12  mx-auto lg:flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                defaultValue={quantity}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-11/12  mx-auto">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              required
              placeholder="detailed Description"
              className="input input-bordered w-full h-20"
            />
          </div>
          {/* submit */}
          <div className="w-full lg:w-11/12 mx-auto mt-7">
            <input
              type="submit"
              value="Update"
              className=" btn btn-primary w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
