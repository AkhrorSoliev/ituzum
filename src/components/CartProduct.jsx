import { useState } from "react";
import { formatCurrency } from "../utils";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartProduct({ product }) {
  const { dispatch } = useGlobalContext();
  const [amount, setAmount] = useState(product.quantity);

  // Handle changes to the amount input
  const changeAmount = (value) => {
    if (value >= 1 && value <= product.stock) {
      setAmount(value);
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: product.products.map((p) =>
          p.id === product.id ? { ...p, quantity: value } : p
        ),
      });
    }
  };

  // Increment the amount
  const incrementAmount = () => {
    if (amount < product.stock) {
      setAmount((prev) => prev + 1);
    }
  };

  // Decrement the amount
  const decrementAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={product.thumbnail} alt={`${product.title} Thumbnail`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.title}</div>
            <div className="text-sm opacity-50">Brand: {product.brand}</div>
          </div>
        </div>
      </td>
      <td>
        <p>
          {formatCurrency(
            product.price - (product.price / 100) * product.discountPercentage
          )}
        </p>
      </td>
      <td>
        <div className="flex items-center">
          <button
            onClick={incrementAmount}
            className="btn btn-sm btn-ghost"
            disabled={amount >= product.stock}
          >
            +
          </button>
          <input
            onChange={(e) => changeAmount(Number(e.target.value))}
            type="number"
            className="input w-12 input-sm text-center font-medium"
            min={1}
            max={product.stock}
            value={amount}
          />
          <button
            onClick={decrementAmount}
            className="btn btn-sm btn-ghost"
            disabled={amount <= 1}
          >
            -
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => removeProduct(product.id)}
          className="btn btn-ghost hover:bg-red-400 hover:text-white btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
}

export default CartProduct;
