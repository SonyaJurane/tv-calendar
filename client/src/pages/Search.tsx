import React, { useState, useEffect } from "react";
import { searchShows } from "../api";
import { Show } from "../types";
import { Grid, Card, TextField } from "@mui/material";
import { useDebounce } from "../hooks";

export const Search = (): JSX.Element => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const debouncedValue = useDebounce(searchFieldValue);

  const [shows, setShows] = useState<Show[] | undefined>();

  useEffect(() => {
    if (debouncedValue !== "") {
      searchShows(debouncedValue, "id name")
        .then((result) => {
          setShows(result);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncedValue]);

  return (
    <>
      <TextField
        onChange={(e) => setSearchFieldValue(e.target.value)}
      ></TextField>
      <Grid container spacing={2}>
        {shows?.map((show) => (
          <Grid item key={show.id}>
            <Card sx={{ height: 140, width: 100 }}>{show.name}</Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
