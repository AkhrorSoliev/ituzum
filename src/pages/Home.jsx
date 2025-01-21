import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch("products");
  return (
    <div>
      <h2 className="text-3xl">Products:</h2>
    </div>
  );
}

export default Home;
