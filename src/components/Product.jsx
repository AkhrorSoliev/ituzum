import { FaStar } from "react-icons/fa";
import { formatCurrency } from "../utils";
import { MdAddShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Product({ product }) {
  const { addToCart } = useGlobalContext();

  const handleAddProduct = (e, product) => {
    e.preventDefault();
    addToCart({
      ...product,
      quantity: 1,
    });
    toast.success("Product added to cart");
  };

  return (
    <Link
      className="p-3 rounded-lg hover:shadow-lg group duration-300 transition"
      to={`/product/${product.id}`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="duration-300 transition w-80 h-80 object-cover group-hover:scale-105"
      />
      <div>
        <p className="line-clamp-2 mb-1">{product.description}</p>
        <p className="flex items-center gap-2 text-base-content text-xs mb-8">
          <FaStar className="text-amber-400" />
          <span>{product.rating}</span>
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="badge badge-primary text-base-100 mr-4">
              {formatCurrency(
                product.price -
                  (product.price / 100) * product.discountPercentage
              )}
            </p>
            <p className="badge line-through opacity-50 ">
              {formatCurrency(product.price)}
            </p>
          </div>
          <div>
            <button
              onClick={(e) => handleAddProduct(e, product)}
              className="border p-1 rounded-full hover:bg-base-200"
            >
              <MdAddShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
