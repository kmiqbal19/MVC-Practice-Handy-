import { TIMEOUT_SEC } from "./config";
const timeout = function (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Its taking too long!!.."));
    }, sec * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const fetchPro = fetch(url);
    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
