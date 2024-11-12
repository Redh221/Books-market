import React from "react";
import module from "./ItemCardStandart.module.scss";
import { MyButton } from "../../../globalImports";
const ItemCardStandart = ({ item }) => {
  let price = null;
  if (item.volumeInfo.pageCount) {
    price = item.volumeInfo.pageCount
      ? (item.volumeInfo.pageCount >= 700
          ? item.volumeInfo.pageCount / 80
          : item.volumeInfo.pageCount / 20
        ).toFixed(2) + ""
      : null;
  }

  return (
    <div tabIndex={1} className={module.mainContainer}>
      <div className={module.imgContainer}>
        {item.volumeInfo.imageLinks?.thumbnail ? (
          <img src={item.volumeInfo.imageLinks.thumbnail} alt="thumbnail" />
        ) : (
          <div style={{ color: "red" }}>Нет изображения</div>
        )}
      </div>
      <div className={module.cardBot}>
        <div tabIndex={0} className={module.title}>
          <p>{item.volumeInfo.title}</p>
        </div>
        <div className={module.autor}>
          <p>
            {item.volumeInfo.authors && item.volumeInfo.authors.length > 0
              ? item.volumeInfo.authors.join(", ")
              : "No author found"}
          </p>
        </div>
        <div className={module.year}>
          <p>
            {item.volumeInfo.publishedDate &&
            item.volumeInfo.publishedDate.length > 0
              ? item.volumeInfo.publishedDate.slice(0, 4)
              : null}
          </p>
        </div>
        <div className={module.price}>
          <p>${price ? price.slice(0, -3) : null}</p>
          <span className={module.smollPrice}>
            {price ? price.slice(-3) : null}
          </span>{" "}
        </div>
        <div className={module.buttonContainer}>
          <MyButton></MyButton>
        </div>
      </div>
    </div>
  );
};

export default ItemCardStandart;
