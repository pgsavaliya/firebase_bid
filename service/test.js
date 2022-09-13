const firebase = require("firebase/compat/app");
require("firebase/compat/database");
const firebaseConfig = {
  apiKey: "AIzaSyD4Iujim3WdHIBDu97bEZ3IBxvtOLfyUqI",
  authDomain: "fir-d9bc8.firebaseapp.com",
  projectId: "fir-d9bc8",
  storageBucket: "fir-d9bc8.appspot.com",
  messagingSenderId: "1050224159575",
  appId: "1:1050224159575:web:15260baa44ab5543d9ec12",
  measurementId: "G-Y3PJRBP2RY",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
var time1 = new Date().getMinutes();
const notiRef = db.ref("/Pavan1");

let app = {
  title: "test bk 1",
  price: "$50",
  bid_amount: "$30",
  startdate: "2022-09-07T11:05:24.911Z",
  enddate: "2022-09-05T10:09:54.911Z",
  countdown: "",
};

var a = [
  {
    product_id: "1",
    short_title: "Yellow Bluetooth HeadPhones",
    product_image:
      "https://mytradingzone.com/crypto/upload/products/1661323202.png",
    details: "<p>Yellow Bluetooth HeadPhones</p>",
    price: "50.00",
    bid_amount: "10.00",
    countdown: "6000",
    is_start: "YES",
    start_time: "1662632083",
    end_time: "2022-09-14T17:57:50.605Z",
    unique_key: "abc",
  },
  {
    product_id: "2",
    short_title: "iPhone 11",
    product_image:
      "https://mytradingzone.com/crypto/upload/products/1661323345.png",
    details: "<p>iPhone 11</p>",
    price: "500.00",
    bid_amount: "00.00",
    countdown: "36000",
    is_start: "YES",
    start_time: "1662632081",
    end_time: "2022-09-13T17:57:50.605Z",
    unique_key: "abc",
  },
  {
    product_id: "3",
    short_title: "Apple AirPods",
    product_image:
      "https://mytradingzone.com/crypto/upload/products/1661323419.png",
    details: "<p>Apple AirPods</p>",
    price: "300.00",
    bid_amount: "200.00",
    countdown: "48000",
    is_start: "YES",
    start_time: "1662632079",
    end_time: "2022-09-14T10:10:00.605Z",
    unique_key: "abc",
  },
  {
    product_id: "4",
    short_title: "Shoes",
    product_image:
      "https://mytradingzone.com/crypto/upload/products/1661323744.png",
    details: "<p>Shoes</p>",
    price: "400.00",
    bid_amount: "85.00",
    countdown: "64000",
    is_start: "YES",
    start_time: "1662632077",
    end_time: "2022-09-15T17:57:50.605Z",
    unique_key: "abc",
  },
];
// notiRef.set(a);

async function b() {
  return new Promise(async (res, rej) => {
    try {
      await notiRef.on("value", async (snapshot) => {
        var data = await snapshot.val();
        res(data);
      });
    } catch (e) {
      rej(e);
    }
  });
}

const daysEl = 1;
const hoursEl = 1;
const minsEL = 1;
const secondsEL = 1;
let abc = [];
var data = [];
printStatement = async () => {
  setInterval(countdown, 1000);
};

setTimeout(printStatement, 1000);
async function countdown() {
  // console.log(data);
  data = await b();
  // console.log(data);
  if (data != null) {
    data.forEach((element, index) => {
      const endDate = new Date(element.end_time);
      const currentDate = new Date(new Date().getTime() + 330 * 60 * 1000);
      const totalSeconds = (endDate - currentDate) / 1000;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const seconds = Math.floor(totalSeconds) % 60;
      hoursEl.innerText = hours;
      minsEL.innerText = minutes;
      secondsEL.innerText = seconds;
      let time = "" + days + ":" + hours + ":" + minutes + ":" + seconds;
      if (parseInt(totalSeconds) <= 5) {
        let date = new Date(element.end_time);
        element.end_time = date.setSeconds(date.getSeconds() + 4);
      }
      if (element.user) {
        abc[index] = {
          short_title: element.short_title,
          bid_amount: element.bid_amount,
          details: element.details,
          is_start: element.is_start,
          price: element.price,
          product_id: element.product_id,
          product_image: element.product_image,
          short_title: element.short_title,
          end_time: element.end_time,
          countdown: time,
          // unique_key: element.unique_key,
          user: element.user,
        };
      } else {
        abc[index] = {
          short_title: element.short_title,
          bid_amount: element.bid_amount,
          details: element.details,
          is_start: element.is_start,
          price: element.price,
          product_id: element.product_id,
          product_image: element.product_image,
          short_title: element.short_title,
          end_time: element.end_time,
          countdown: time,
          // unique_key: element.unique_key,
        };
      }
    });

    notiRef.set(abc);
  }
}

//---------------------------------------------------//---------------------------------------------
module.exports = {
  add: (a) => {
    return new Promise(async (res, rej) => {
      try {
        data.push(a);
        res("data added");
      } catch (err) {
        console.log("err ...", err);
        rej({
          status: err?.status || 500,
          error: err,
          message: err?.message || "Something Went Wrong!!!",
        });
      }
    });
  },
  addbid: (abc) => {
    return new Promise(async (res, rej) => {
      try {
        data.map(async (item, index) => {
          if (item.product_id == abc) {
            let date = new Date(item.end_time);
            data[index].end_time = date.setSeconds(date.getSeconds() + 4);
          }
        });
        res("data updated");
      } catch (err) {
        console.log("err ...", err);
        rej({
          status: err?.status || 500,
          error: err,
          message: err?.message || "Something Went Wrong!!!",
        });
      }
    });
  },
};
