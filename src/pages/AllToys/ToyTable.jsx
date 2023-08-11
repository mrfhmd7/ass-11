import { Link } from "react-router-dom";

const ToyTable = ({ loadedToy, count }) => {
  const { _id, seller, toy, subCategory, price, quantity } = loadedToy;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>{count}</th>
        <td>{toy}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{seller}</td>
        <td className=" w-2/12">
          <Link to={`/details/${_id}`} className="btn btn-primary ">
            view details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyTable;
