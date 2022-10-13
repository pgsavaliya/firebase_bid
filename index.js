const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const testService = require("./service/test");
const v1 = require("./router/v1");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Initial Route for firebase!!" });
});

app.use("/v1", v1);

app.listen(5000, () => {
  console.log("Server Started At : ", 5000);
});
const firebase = require("firebase/compat/app");
require("firebase/compat/database");

// const firebase = require("firebase/compat/app");
// require("firebase/compat/database");
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

async function b() {
  return new Promise(async (res, rej) => {
    //one min badhi file live ma chhale che te lai lav
    try {
      await notiRef.on("value", async (snapshot) => {
        let data = await snapshot.val();
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
printStatement = async () => {
  setInterval(countdown, 1000);
};

setTimeout(printStatement, 1000);
async function countdown() {
  let data = await new Promise(async (res, rej) => {
    try {
      let xyz1 = await notiRef.on("value", async (snapshot) => {
        let data = await snapshot.val();
        // console.log("data");
        res(data);
      });
    } catch (e) {
      rej(e);
    }
  });
  // await notiRef.on("value", async (snapshot) => {
  //   data = await snapshot.val();
  //   // console.log("data");
  //   // res(data);
  // });

  // notiRef.on("value", async (snapshot) => {
  //   var data = await snapshot.val();
  //   // console.log("data");
  //   res(data);
  // });
  // let data = await b();
  if (data != null) {
    console.log(data);
    for (const child in data) {
      if (data[child].is_visible == true) {
        var is_background, user, countdown;
        user = data[child].user;
        const endDate = new Date(data[child].end_time);

        const currentDate = new Date();
        const totalSeconds = (endDate - currentDate) / 1000;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const seconds = Math.floor(totalSeconds) % 60;
        hoursEl.innerText = hours;
        minsEL.innerText = minutes;
        secondsEL.innerText = seconds;
        var daysP, hoursP, minutesP, secondsP;
        days < 10 ? (daysP = "0" + days) : (daysP = days);
        hours < 10 ? (hoursP = "0" + hours) : (hoursP = hours);
        minutes < 10 ? (minutesP = "0" + minutes) : (minutesP = minutes);
        seconds < 10 ? (secondsP = "0" + seconds) : (secondsP = seconds);

        // console.log("time =", daysP, ":", hoursP, ":", minutesP, ":", secondsP);
        let time = "" + daysP + ":" + hoursP + ":" + minutesP + ":" + secondsP;
        if (data[child].price > data[child].bid_amount) {
          if (parseInt(totalSeconds) <= 5) {
            let date = new Date(data[child].end_time);
            date.setSeconds(date.getSeconds() + 10);
            data[child].end_time = date.toISOString();
            let name1 = [
              "abdomensqueeze",
              "absurdrotten",
              "astronomerbecoming",
              "avocetwhopping",
              "babyhoglin",
              "bakedkite",
              "brindledpolitics",
              "burgerathletic",
              "channelshamrock",
              "counticicle",
              "curatorvisual",
              "dinnerattend",
              "dropsmooth",
              "educatedunruly",
              "fixbustling",
              "flutherdislike",
              "foremastbrioche",
              "furnitureactress",
              "genoachef",
              "gloomyshelter",
              "gymnasthoodlum",
              "halibutberate",
              "hotpothonk",
              "longingabout",
              "monorailpersonnel",
              "newlyreferee",
              "oleanderbeat",
              "overlookedbold",
              "paceflippant",
              "peanutsversed",
              "podiatristbadly",
              "poontangnerve",
              "rainycannelloni",
              "redwingsunglasses",
              "referenceovercome",
              "reputationcurator",
              "requirerudolph",
              "rustyenergy",
              "silentchestnut",
              "skiverinterfere",
              "socketofficer",
              "sombreroshy",
              "soundersecret",
              "termitescandalous",
              "uttermostworry",
              "votebike",
              "whomroar",
              "wrongcoffle",
              "yeastmall",
              "youthfultension",
            ];
            let name = name1[Math.floor(Math.random() * name1.length)];
            let time1 = new Date();
            user = {
              bid_amount: 0.1,
              bid_time: time1.toISOString(),
              user_name: name,
            };
            is_background = true;
            axios
              .post("https://cryptobidcoins.com/web/api/increase", {
                product_id: data[child].product_id,
              })
              .then((response) => {});
          } else {
            is_background = false;
          }

          if (seconds < 0 || minutes < 0) {
            // if (data[child].user) {
            //   abc[child] = {
            //     short_title: data[child].short_title,
            //     bid_amount: data[child].bid_amount,
            //     details: data[child].details,
            //     is_start: false,
            //     price: data[child].price,
            //     product_id: data[child].product_id,
            //     product_image: data[child].product_image,
            //     short_title: data[child].short_title,
            //     end_time: data[child].end_time,
            //     is_visible: data[child].is_visible,
            //     is_background: data[child].is_background,
            countdown = "00:00:00:00";
            //     // unique_key: data[child].unique_key,
            //     user: data[child].user,
            //   };
            // } else {
            //   abc[child] = {
            //     short_title: data[child].short_title,
            //     bid_amount: data[child].bid_amount,
            //     details: data[child].details,
            //     is_start: false,
            //     price: data[child].price,
            //     product_id: data[child].product_id,
            //     product_image: data[child].product_image,
            //     short_title: data[child].short_title,
            //     end_time: data[child].end_time,
            //     is_visible: data[child].is_visible,
            //     is_background: data[child].is_background,
            //     countdown: "00:00:00:00",
            //     // unique_key: data[child].unique_key,
            //   };
            // }
          } else {
            // if (data[child].user) {
            //   abc[child] = {
            //     short_title: data[child].short_title,
            //     bid_amount: data[child].bid_amount,
            //     details: data[child].details,
            //     is_start: true,
            //     price: data[child].price,
            //     product_id: data[child].product_id,
            //     product_image: data[child].product_image,
            //     short_title: data[child].short_title,
            //     end_time: data[child].end_time,
            //     is_visible: data[child].is_visible,
            //     is_background: data[child].is_background,
            countdown = time;
            //     // unique_key: data[child].unique_key,
            //     user: data[child].user,
            //   };
            // } else {
            //   abc[child] = {
            //     short_title: data[child].short_title,
            //     bid_amount: data[child].bid_amount,
            //     details: data[child].details,
            //     is_start: data[child].is_visible,
            //     price: data[child].price,
            //     product_id: data[child].product_id,
            //     product_image: data[child].product_image,
            //     short_title: data[child].short_title,
            //     end_time: data[child].end_time,
            //     is_visible: true,
            //     is_background: data[child].is_background,
            //     countdown: time,
            //     // unique_key: data[child].unique_key,
            //   };
            // }
          }

          if (!user) {
            db.ref("/PRODUCTS/" + child + "/").update({
              countdown: countdown,
              is_background: is_background,
              end_time: data[child].end_time,
            });
          } else {
            db.ref("/PRODUCTS/" + child + "/").update({
              countdown: countdown,
              user: user,
              is_background: is_background,
              end_time: data[child].end_time,
            });
          }
        }
        // });
      }
    }
    // notiRef.set(abc);
  }
  data = null;
}
