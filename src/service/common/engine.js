import axios from "axios";
export const attachImgToId = async function (
  url,
  isEngine = false,
  fullPath = false
) {
  if (isEngine) {
    return new Promise(async (res) => {
      let x = null;
      if (fullPath) x = await axios.get(`${url}`);
      else x = await axios.get(`${getImg}${url}`);
      res(x);
    });
  } else {
    let x = await axios.get(`${getImg}${url}`);
    return x.data.base64;
  }
};
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export async function getDb() {
  return new Promise((resolve, reject) => {
    let request = window.indexedDB.open("IDEEZA", 1);

    request.onerror = (e) => {
      console.log("Error opening db", e);
      reject("Error");
    };

    request.onsuccess = (e) => {
      resolve(e.target.result);
    };

    request.onupgradeneeded = (e) => {
      console.log("onupgradeneeded");
      let db = e.target.result;
      let objectStore = db.createObjectStore("Pro", {
        autoIncrement: true,
        keyPath: "id",
      });
    };
  });
}
export async function getDb2() {
  return new Promise((resolve, reject) => {
    let request = window.indexedDB.open("IDEEZA COVER", 1);
    request.onerror = (e) => {
      console.log("Error opening db", e);
      reject("Error");
    };
    request.onsuccess = (e) => {
      resolve(e.target.result);
    };
    request.onupgradeneeded = (e) => {
      console.log("onupgradeneeded");
      let db = e.target.result;
      let objectStore = db.createObjectStore("Cover", {
        autoIncrement: true,
        keyPath: "id",
      });
    };
  });
}
export async function addCatToDb(item, db) {
  return new Promise((resolve, reject) => {
    let trans = db.transaction(["Pro"], "readwrite");
    trans.oncomplete = (e) => {
      resolve();
    };
    let store = trans.objectStore("Pro");
    store.add(item);
  });
}
