import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsAll = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-2 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo
          distinctio aliquam nam ratione laudantium inventore ut beatae nobis
          nihil aliquid, saepe amet id dolor quaerat fugiat quae quidem tempora.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products?.map((item) => (
          // console.log(item)
           <ProductsCard key={item._id} product={item}/>
        ))}
      </div>
    </div>
  );
};

export default ProductsAll;
