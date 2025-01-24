import Product from "../../components/Product";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center text-center m-5">
        <section className="m-5">
          <div>
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}
