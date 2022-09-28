import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDebounce } from "../../hooks";
import { TextField } from "@mui/material";

type SearchFunction = (
  prompt: string,
  fields: string
) => Promise<any[] | undefined>;

interface SearchBarProps {
  setSearchResults: Dispatch<SetStateAction<any[] | undefined>>;
  searchFunction: SearchFunction;
  searchResultFields?: string;
}

export const SearchBar = ({
  setSearchResults,
  searchFunction,
  searchResultFields = "id name image{medium}",
}: SearchBarProps): JSX.Element => {
  const [field, setField] = useState("");
  const debouncedValue = useDebounce(field);

  useEffect(() => {
    if (debouncedValue !== "") {
      searchFunction(debouncedValue, searchResultFields)
        .then((result) => {
          setSearchResults(result);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncedValue]);

  return <TextField onChange={(e) => setField(e.target.value)}></TextField>;
};
