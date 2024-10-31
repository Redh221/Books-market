import React, { useState } from "react";
import module from "./Shop.module.scss";
import { useGetBooksByNameQuery } from "../API/storeApi";
import MyButton from "../UI/Button/Button";
import { useSelector } from "react-redux";

const Shop = () => {
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  console.log(searchValue);

  const [dynamicOne, setDynamicOne] = useState("Flowers");
  // console.log(dynamicOne);
  const { data = {}, error, isLoading } = useGetBooksByNameQuery(searchValue);
  console.log(data.items);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={module.container}>
      <MyButton onClick={() => setDynamicOne("React")} />
      {error ? (
        <>Error msg</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className={module.grid}>
          {data.items.slice(0, 10).map((item, index) => (
            <div key={index}>{item.volumeInfo.title}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Shop;
