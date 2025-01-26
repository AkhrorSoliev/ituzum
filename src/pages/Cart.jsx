import { useGlobalContext } from "../hooks/useGlobalContext";
import { CartProduct } from "../components";
import { Link } from "react-router-dom";

function Cart() {
  const { products } = useGlobalContext();

  if (products.length === 0) {
    return (
      <section>
        <h1 className="text-center text-3xl font-bold">Your cart is empty</h1>
        <div className="flex justify-center mt-10">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <CartProduct key={product.id} product={product} />;
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </section>
  );
}

export default Cart;
