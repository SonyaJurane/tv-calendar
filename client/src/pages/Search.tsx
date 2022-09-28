import React, { useState } from "react";
import { Show } from "../types";
import { searchShows } from "../api";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { SearchBar } from "../components";

export const Search = (): JSX.Element => {
  const [shows, setShows] = useState<Show[] | undefined>();

  return (
    <>
      <SearchBar setSearchResults={setShows} searchFunction={searchShows} />
      <Grid container spacing={2}>
        {shows?.map((show) => (
          <Grid item key={show.id}>
            <Card sx={{ width: 130 }}>
              <CardMedia
                component="img"
                height="140"
                image={show.image?.medium}
              ></CardMedia>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {show.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
