import { Product } from "@/types/productTypes";
import Link from "next/link";
import ShowProduct from "./ShowProduct";

export const getProductData = async (id: number) => {
  console.log("Hey id: ", id);
  try {
    const product: Product = await fetch(
      "https://fakestoreapi.com/products/" + id.toString(),
      { cache: "no-cache" }
    )
      .then((res) => res.json())
      .then((data: Product) => data);

    if (!product) throw new Error("Product not found.");

    return { product: product };
  } catch (error) {
    throw error;
  }
};

const ProductView = async ({ params: { id } }: { params: { id: number } }) => {
  const { product } = await getProductData(id);

  return (
    <div className="py-5 bg-red-100 h-screen">
      <ShowProduct>
        <div className="flex flex-col justify-center items-center">
          <img src={product.image} width={200} height={200} />

          <div className="py-5 px-3">
            <h1 className="text-2xl">{product.title}</h1>
            <p className="text-base ">{product.description}</p>

            <p className="text-base ">{product.price}</p>

            <div className="py-2">
              <Link href={`/products/${product.id}`} className="primaryButton">
                View details
              </Link>
            </div>
          </div>
        </div>
      </ShowProduct>
    </div>
  );
};

export default ProductView;
