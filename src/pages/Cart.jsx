import { useGlobalContext } from "../hooks/useGlobalContext";
import { CartProduct } from "../components";

function Cart() {
  const { products } = useGlobalContext();
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
