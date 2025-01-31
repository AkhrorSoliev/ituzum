import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Carousel, StarRating } from "../components";
import { MdOutlineDiscount } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { formatCurrency } from "../utils";
import { MdAddShoppingCart } from "react-icons/md";

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
        <div className="align-elements flex text-center flex-col">
          {/* CAROUSEL */}
          {data.images.length > 1 ? (
            <Carousel images={data.images} />
          ) : (
            <img
              src={data?.images[0]}
              alt="Product"
              className="max-w-80 mx-auto object-contain"
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
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8 mb-8">
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
            <div className="mb-5">
              <button
                onClick={() => {
                  console.log("add to cart");
                }}
                className="btn btn-primary btn-block text-white"
              >
                Add to Cart
                <MdAddShoppingCart className="text-xl" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg text-justify">
              <span className="font-semibold">Desciption:</span>{" "}
              {data.description}
            </p>
          </div>
          <div className="border border-opacity-30 p-2">
            <h2 className="text-left mb-2">
              Reviews: <span className="text-md">{data.reviews.length}</span>
            </h2>
            <div className="flex flex-col gap-2">
              {data.reviews.map((review) => {
                return (
                  <div
                    key={review.rating + Math.random()}
                    className="border p-3"
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">
                        {review.reviewerName}:
                      </span>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-left">{review.comment}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;
