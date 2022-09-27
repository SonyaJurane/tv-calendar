import { GRAPH_QL_ENDPOINT } from "../constants";
import { Show } from "../types";

export const searchShows = async (
  prompt: string,
  fields: string
): Promise<Show[] | undefined> => {
  const query = `query Search($prompt: String) {
    search(prompt: $prompt) {${fields}}
  }`;

  const fetchParams: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { prompt },
    }),
  };
  try {
    const res = await fetch(GRAPH_QL_ENDPOINT, fetchParams);
    const shows: { data: Show[] } = await res.json();
    return shows.data;
  } catch (error) {
    console.error(error);
  }
};
