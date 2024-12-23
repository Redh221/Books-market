import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { MyInput, setSearch } from "../../../globalImports";

const Search = () => {
  const [searchValue, setSearchValue] = useState("flowers");

  const [debouncedValue] = useDebounce(searchValue, 700);

  const dispatch = useDispatch();
  useEffect(() => {
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
