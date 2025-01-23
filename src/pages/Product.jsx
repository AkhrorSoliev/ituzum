import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Carousel, StarRating } from "../components";
import { MdOutlineDiscount } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { formatCurrency } from "../utils";

function Product() {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(`/products/${id}`);

  if (error) {
    return (
      <div className="flex gap-3 flex-col items-start">
        <h2 className="text-3xl">Products:</h2>
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex gap-3 flex-col items-start">
        <h2 className="text-3xl">Product:</h2>
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      </div>
    );
  }

  return (
    <section>
      {data && (
        <div className="align-elements grid grid-cols-1 text-center">
          {/* CAROUSEL */}
          {data.images.length > 1 ? (
            <Carousel images={data.images} />
          ) : (
            <img
              src={data?.images[0]}
              alt="Product"
              className="max-w-80 mx-auto"
            />
          )}
          {/* TITLE & BRAND */}
          <div className="mb-4">
            <h2 className="text-2xl">{data.title}</h2>
            <p>
              <span className="font-bold">Brand:</span> {data.brand}
            </p>
          </div>
          {/* INFO CARD */}
          <div className="border border-neutral-content rounded-md px-2 py-1 text-left mb-5 grid grid-cols-2 justify-between">
            <div className="flex gap-2 mb-2">
              <h3 className="text-xl">{data.rating}</h3>
              <StarRating rating={data.rating} />
            </div>
            <p className="text-xl">{data.reviews.length} reviews </p>
            <div className="flex items-center gap-2 text-xl mb-2">
              <MdOutlineDiscount /> <span>{data.stock} in stock</span>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <FaShippingFast />
              <span> {data.shippingInformation}</span>
            </div>
          </div>
          <div className="flex items-center gap-8 w-full">
            <h3 className="text-4xl">
              {formatCurrency(
                data.price - (data.price / 100) * data.discountPercentage
              )}
            </h3>
            <p className="text-xl opacity-80 line-through">
              {formatCurrency(data.price)}
            </p>
            <p className="text-md  badge badge-info text-content">
              {data.discountPercentage}%
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;
