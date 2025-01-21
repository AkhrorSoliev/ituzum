import { useFetch } from "../hooks/useFetch";
import { ProductContainer } from "../components";

function Home() {
  const { data, isPending, error } = useFetch("products");

  if (error) {
    return (
      <div className="flex gap-3 flex-col items-start">
        <h2 className="text-3xl">Products:</h2>
        {error && <div className="alert alert-error">{error}</div>}
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center gap-3">
        <h2 className="text-3xl">Products:</h2>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-3xl">Products:</h2>
      {data && <ProductContainer products={data.products} />}
    </section>
  );
}

export default Home;
