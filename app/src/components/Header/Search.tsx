import React, { useEffect, useState } from "react";
import MyInput from "../../UI/Input/Input";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/sliceMarket";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const [debouncedValue] = useDebounce(searchValue, 700);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(debouncedValue);
    dispatch(setSearch(debouncedValue));
  }, [debouncedValue]);
  return (
    <>
      <MyInput
        value={searchValue}
        setter={setSearchValue}
        // placeholder={"ssssss"}
        sx={{
          color: "blue",
        }}
        variant="standard"
        label="Type here"
      />
    </>
  );
};

export default Search;
