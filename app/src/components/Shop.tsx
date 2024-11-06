import React, { useEffect, useRef, useState } from "react";
import module from "./Shop.module.scss";
import { useGetBooksByNameQuery } from "../API/storeApi";
import { useLazyFetchUserProfileQuery } from "../API/loginApi";
import MyButton from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

const Shop = () => {
  // console.log(JSON.parse(localStorage.getItem("user")).user.id);
  const [fetchUserProfile, { dataUser, errorUser, isLoadingUser }] =
    useLazyFetchUserProfileQuery();
  const handleClick = async () => {
    try {
      const userProfile = await fetchUserProfile(
        JSON.parse(localStorage.getItem("user")).user.id
      ).unwrap(); // Выполнить запрос
      console.log(userProfile); // Вывести в консоль
    } catch (err) {
      console.error("Failed to fetch user profile:", err); // Обработка ошибок
    }
  };
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  const [page, setPage] = useState(0);
  const [renderData, setRenderData] = useState([]);
  const scrollStop = useRef(true);
  const [customLoading, setCustomLoading] = useState(true);
  let cardsOnPage = 30;
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
    console.log(hasNoScrollbar);
    if ((!scrollStop.current && isAtBottom) || hasNoScrollbar) {
      setPage((prevPage) => prevPage + 1);
      setCustomLoading(true);
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
    // setrenderData to empty with new request
  }, [searchValue]);

  useEffect(() => {
    if (data.items) {
      setRenderData((prevRenderData) => [...prevRenderData, ...data.items]);
      setCustomLoading(true);
      handleScroll();
      scrollStop.current = false;
    }
  }, [data.items]);
  /////////////////////////////
  useEffect(() => {
    console.log("renderData:", renderData);
  }, [renderData]);
  // useEffect(() => {
  //   console.log("page:", page);
  // }, [page]);
  console.log("rerender");

  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);
  ////////////////////////////
  return (
    <div className={module.container}>
      <MyButton onClick={handleClick} />
      {error ? (
        <>Error msg</>
      ) : renderData ? (
        <div className={module.grid}>
          {renderData.map((item, index) => (
            <div key={index}>
              <div>
                <div className={module.imgContainer}>
                  {item.volumeInfo.imageLinks?.thumbnail ? (
                    <img
                      src={item.volumeInfo.imageLinks.thumbnail}
                      alt="thumbnail"
                    />
                  ) : (
                    <div style={{ color: "red" }}>Нет изображения</div>
                  )}
                </div>
                <div className={module.cardBot}>
                  <div>{item.volumeInfo.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <TailSpin
        visible={customLoading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={module.loading}
      />
    </div>
  );
};

export default Shop;
