import { Show } from "./types";
import Axios from "axios";

export const searchShow = async (
  namePrompt: string
): Promise<[Show] | undefined> => {
  try {
    const requestString = `https://api.tvmaze.com/search/shows?q=${namePrompt}`;
    console.log(requestString);
    const response = await Axios.get(requestString);
    const data = response.data;
    const shows = data.map(({ show }: { show: Show }) => ({
      ...show,
    }));
    return shows;
  } catch (error) {
    console.error(error);
  }
};
