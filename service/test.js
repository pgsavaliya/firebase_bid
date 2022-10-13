const firebase = require("firebase/compat/app");
require("firebase/compat/database");
const firebaseConfig = {
  apiKey: "AIzaSyBGNq5r1cno7xj9EziOcHuM5enNlmmkftc",
  authDomain: "crypto-bid-coins.firebaseapp.com",
  databaseURL: "https://crypto-bid-coins-default-rtdb.firebaseio.com",
  projectId: "crypto-bid-coins",
  storageBucket: "crypto-bid-coins.appspot.com",
  messagingSenderId: "419405628251",
  appId: "1:419405628251:web:f1f9c561f87b63e02a107e",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
var time1 = new Date().getMinutes();
const notiRef = db.ref("/PRODUCTS");

// const daysEl = 1;
// const hoursEl = 1;
// const minsEL = 1;
// const secondsEL = 1;
// let abc = [];
// printStatement = async () => {
//   setInterval(countdown, 1000);
// };

// setTimeout(printStatement, 1000);
// async function countdown() {
//   let data = await new Promise(async (res, rej) => {
//     try {
//       await notiRef.on("value", async (snapshot) => {
//         let data = await snapshot.val();
//         res(data);
//       });
//     } catch (e) {
//       rej(e);
//     }
//   });
//   // console.log(data);
//   if (data != null) {
//     data.forEach((element, index) => {
//       const endDate = new Date(element.end_time);

//       // const currentDate = new Date(new Date().getTime() + 330 * 60 * 1000);
//       const currentDate = new Date();
//       const totalSeconds = (endDate - currentDate) / 1000;
//       const minutes = Math.floor(totalSeconds / 60) % 60;
//       const hours = Math.floor(totalSeconds / 3600) % 24;
//       const days = Math.floor(totalSeconds / 3600 / 24);
//       const seconds = Math.floor(totalSeconds) % 60;
//       hoursEl.innerText = hours;
//       minsEL.innerText = minutes;
//       secondsEL.innerText = seconds;
//       var daysP, hoursP, minutesP, secondsP;
//       days < 10 ? (daysP = "0" + days) : (daysP = days);
//       hours < 10 ? (hoursP = "0" + hours) : (hoursP = hours);
//       minutes < 10 ? (minutesP = "0" + minutes) : (minutesP = minutes);
//       seconds < 10 ? (secondsP = "0" + seconds) : (secondsP = seconds);

//       console.log("time =", daysP, ":", hoursP, ":", minutesP, ":", secondsP);
//       let time = "" + daysP + ":" + hoursP + ":" + minutesP + ":" + secondsP;
//       // }
//       if (element.price > element.bid_amount) {
//         if (parseInt(totalSeconds) <= 5) {
//           let date = new Date(element.end_time);
//           date.setSeconds(date.getSeconds() + 4);
//           element.end_time = date.toISOString();
//         }
//       }
//       // console.log("fhdjksh", minutes);

//       if (seconds < 0 || minutes < 0) {
//         if (element.user) {
//           abc[index] = {
//             short_title: element.short_title,
//             bid_amount: element.bid_amount,
//             details: element.details,
//             is_start: "NO",
//             price: element.price,
//             product_id: element.product_id,
//             product_image: element.product_image,
//             short_title: element.short_title,
//             end_time: element.end_time,
//             is_visible: element.is_visible,
//             countdown: "00:00:00:00",
//             // unique_key: element.unique_key,
//             user: element.user,
//           };
//         } else {
//           abc[index] = {
//             short_title: element.short_title,
//             bid_amount: element.bid_amount,
//             details: element.details,
//             is_start: "NO",
//             price: element.price,
//             product_id: element.product_id,
//             product_image: element.product_image,
//             short_title: element.short_title,
//             end_time: element.end_time,
//             is_visible: element.is_visible,
//             countdown: "00:00:00:00",
//             // unique_key: element.unique_key,
//           };
//         }
//       } else {
//         if (element.user) {
//           abc[index] = {
//             short_title: element.short_title,
//             bid_amount: element.bid_amount,
//             details: element.details,
//             is_start: element.is_start,
//             price: element.price,
//             product_id: element.product_id,
//             product_image: element.product_image,
//             short_title: element.short_title,
//             end_time: element.end_time,
//             is_visible: element.is_visible,
//             countdown: time,
//             // unique_key: element.unique_key,
//             user: element.user,
//           };
//         } else {
//           abc[index] = {
//             short_title: element.short_title,
//             bid_amount: element.bid_amount,
//             details: element.details,
//             is_start: element.is_start,
//             price: element.price,
//             product_id: element.product_id,
//             product_image: element.product_image,
//             short_title: element.short_title,
//             end_time: element.end_time,
//             is_visible: element.is_visible,
//             countdown: time,
//             // unique_key: element.unique_key,
//           };
//         }
//       }
//     });

//     notiRef.set(abc);
//   }
//   data = null;
// }

// async function b() {
//   return new Promise(async (res, rej) => {
//     try {
//       await notiRef.on("value", async (snapshot) => {
//         let data = await snapshot.val();
//         res(data);
//       });
//     } catch (e) {
//       rej(e);
//     }
//   });
// }
module.exports = {
  changeback: (id) => {
    // console.log(id);
    return new Promise(async (res, rej) => {
      try {
        let data = await new Promise(async (res, rej) => {
          try {
            await notiRef.on("value", async (snapshot) => {
              let data = await snapshot.val();
              res(data);
            });
          } catch (e) {
            rej(e);
          }
        });
        // console.log("dtaa..........", data);
        await data.map((element, index) => {
          if (element.product_id == id) {
            data[index].is_background = true;
          }
        });
        notiRef.set(data);
        setTimeout(async () => {
          await data.map((element, index) => {
            if (element.product_id == id) {
              data[index].is_background = false;
            }
          });
          //   console.log(data);
          notiRef.set(data);
        }, "1000");
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
