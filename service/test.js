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
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80",
    title: "test bk 1",
    price: "$50",
    bid_amount: "$30",
    startdate: "2022-09-06T11:06:00.911Z",
    enddate: "2022-09-07T11:08:00.911Z",
    countdown: "",
  },
  {
    image:
      "https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?k=20&m=187310279&s=612x612&w=0&h=WDavpCxsLbj_PRpoY-3PsS2zvuP0Vk0Ci22sRLO9DzE=",
    title: "test bk 2",
    price: "$50",
    bid_amount: "$30",
    startdate: "2019-09-07T10:15:40",
    enddate: "2022-09-07T18:57:40.605Z",
    countdown: "",
  },
  {
    image:
      "https://media.istockphoto.com/photos/beautiful-young-woman-choosing-and-buying-shoes-in-boutique-picture-id1222260514?k=20&m=1222260514&s=612x612&w=0&h=L5bXmkq0vIpDJAp-s1nHFCuseyrstFSm_VEb9ygC_oA=",
    title: "test bk 3",
    price: "$50",
    bid_amount: "$30",
    startdate: "2019-09-07T10:15:30",
    enddate: "2022-09-07T20:57:42.605Z",
    countdown: "",
  },
  {
    image:
      "https://media.istockphoto.com/photos/traditional-indian-grooms-red-wedding-shoes-with-sword-on-the-picture-id870555292?k=20&m=870555292&s=612x612&w=0&h=2GII16JZ6jA9ajvqrAZ9SixFKoD_ZiiBmqr-JotY8NA=",
    title: "test bk 4",
    price: "$50",
    bid_amount: "$30",
    startdate: "2019-09-07T10:15:32",
    enddate: "2022-09-07T23:57:35.605Z",
    countdown: "",
  },
];
// notiRef.set(a);

async function b() {
  return new Promise(async (res, rej) => {
    try {
      await notiRef.on("value", async (snapshot) => {
        const data = await snapshot.val();
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
  data = await b();
  setInterval(countdown, 1000);
};
setTimeout(printStatement, 1000);
function countdown() {
  data.forEach((element, index) => {
    const endDate = new Date(element.enddate);
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
      let date = new Date(element.enddate);
      element.enddate = date.setSeconds(date.getSeconds() + 4);
    }

    abc[index] = {
      title: element.title,
      price: element.price,
      bid_amount: element.bid_amount,
      startdate: element.startdate,
      enddate: element.enddate,
      countdown: time,
      image: element.image,
    };
  });

  notiRef.set(abc);
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
          if (item.title == abc) {
            let date = new Date(item.enddate);
            data[index].enddate = date.setSeconds(date.getSeconds() + 4);
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
