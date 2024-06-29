"strict mood"
import { displayGames } from "./ui.modules.js";
export let response;
export async function getGames(categoreOption="mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoreOption}`,
      options
    );
     response = await api.json();
    displayGames(response);
  }