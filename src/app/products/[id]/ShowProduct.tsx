"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ShowProduct = ({ children }: { children: React.ReactNode }) => {
  // I have commented it. The result is same with and without it.
  //   const router = useRouter();

  //   useEffect(() => {
  //     router.refresh();
  //   }, []);

  return <div>{children}</div>;
};

export default ShowProduct;
