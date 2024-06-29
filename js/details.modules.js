"strict mood"
import { displayDetails } from "./ui.modules.js";
export let responseDetailsData;
export async function getDetails (id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
  
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
     responseDetailsData = await api.json();
    displayDetails(responseDetailsData);
  };