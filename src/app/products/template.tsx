import { Product } from "@/types/productTypes";
import { ProductCard } from "./ProductCard";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Lokafy - Products",
  description: "...",
};

async function getData() {
  try {
    // const products: any = setTimeout(async () => {
    //   await fetch("https://fakestoreapi.com/products?limit=500", {
    //     cache: "no-cache",
    //   })
    //     .then((res) => res.json())
    //     .then((data: Product[]) => data);
    // }, 4000);

    const [products] = await Promise.all([
      fetch("https://fakestoreapi.com/products?limit=500", {
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data: Product[]) => data),
    ]);

    return {
      products,
    };
  } catch (error) {
    throw error;
  }
}

const template = async ({ children }: { children: React.ReactNode }) => {
  const {
    products,
  }: {
    products: Product[];
  } = await getData();
  return (
    <div className="container grid grid-cols-12 gap-4 h-screen overflow-hidden">
      <div className="col-span-8 overflow-y-scroll">
        <div className="py-5">
          <h1 className="text-2xl">Top {products.length} products.</h1>
        </div>
        <Suspense
          fallback={<h1 className="text-9xl text-red-500">Loading products</h1>}
        >
          <ProductCard products={products} />
        </Suspense>
      </div>
      <div className="col-span-4">{children}</div>
    </div>
  );
};

export default template;
