import { AJAX } from "./helper";
export const state = {
  query: "",
  results: [],
};

export const loadResults = async function () {
  try {
    const data = await AJAX(
      `https://jsonplaceholder.typicode.com/${state.query}`
    );
    const lastFormat = data.map((person) => {
      return {
        id: person.id,
        title: person.title,
      };
    });
    return lastFormat;
  } catch (err) {
    console.log(err);
  }
};
