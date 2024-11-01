import React, { useEffect, useRef, useState } from "react";
import module from "./Shop.module.scss";
import { useGetBooksByNameQuery } from "../API/storeApi";
import MyButton from "../UI/Button/Button";
import { useSelector } from "react-redux";

const Shop = () => {
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  const [page, setPage] = useState(0);
  const [renderData, setRenderData] = useState([]);
  const scrollStop = useRef(true);
  let cardsOnPage = 40;
  const {
    data = {},
    error,
    isLoading,
  } = useGetBooksByNameQuery({
    name: searchValue,
    amount: cardsOnPage,
    index: page * cardsOnPage,
  });

  const handleScroll = () => {
    const isAtBottom =
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight - 0.5 * window.innerHeight;
    const hasNoScrollbar =
      document.documentElement.scrollHeight <= window.innerHeight;

    if ((!scrollStop.current && isAtBottom) || hasNoScrollbar) {
      setPage((prevPage) => prevPage + 1);
      scrollStop.current = true;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchValue) {
      setPage(0);
      setRenderData([]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (data.items) {
      setRenderData((prevRenderData) => [...prevRenderData, ...data.items]);
      handleScroll();
      scrollStop.current = false;
    }
  }, [data.items]);
  /////////////////////////////
  useEffect(() => {
    console.log("renderData:", renderData);
  }, [renderData]);
  useEffect(() => {
    console.log("page:", page);
  }, [page]);
  console.log("rerender");
  ////////////////////////////
  return (
    <div className={module.container}>
      <MyButton onClick={() => setPage(page + 1)} />
      {error ? (
        <>Error msg</>
      ) : renderData ? (
        <div className={module.grid}>
          {renderData.map((item, index) => (
            <div key={index}>{item.volumeInfo.title}</div>
          ))}
        </div>
      ) : null}
      {isLoading ? (
        <div
          style={{
            width: "100px", // или другой размер
            height: "100px",
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      ) : null}
    </div>
  );
};

export default Shop;
