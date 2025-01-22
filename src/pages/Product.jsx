import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Carousel({ images }) {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="max-w-80 mx-auto"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${((index + 1) % images.length) + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

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
          {data.images.length > 1 ? (
            <Carousel images={data.images} />
          ) : (
            <img
              src={data?.images[0]}
              alt="Product"
              className="max-w-80 mx-auto"
            />
          )}
          <h2 className="text-2xl mb-4">{data.title}</h2>
          <div className="border border-neutral-content rounded-md px-2 py-1 flex">
            <h3 className="text-xl">{data.rating}</h3>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;
