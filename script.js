const firebaseConfig = {
  apiKey: "AIzaSyBRd3OAmqWNNrg4wG6ETuLSvzJAUPb_rr4",
  authDomain: "count-b638f.firebaseapp.com",
  projectId: "count-b638f",
  storageBucket: "count-b638f.firebasestorage.app",
  messagingSenderId: "595930590603",
  appId: "1:595930590603:web:78629be40b7da8a28ad38e",
  measurementId: "G-XBGRFQF7K8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const latest21El = document.getElementById("latest21");
const old20El = document.getElementById("old20");
const v10El = document.getElementById("v10");

const ref = db.collection("downloads").doc("counter");

ref.onSnapshot((doc) => {
  if (doc.exists) {
    const d = doc.data();
    latest21El.innerText = d.latest21;
    old20El.innerText = d.old20;
    v10El.innerText = d.v10;
  } else {
    latest21El.innerText = "0";
    old20El.innerText = "0";
    v10El.innerText = "0";
  }
});

function downloadLatest() {
  ref.update({
    latest21: firebase.firestore.FieldValue.increment(1)
  });
  window.location.href =
    "https://github.com/user-attachments/files/25251966/Go.Up.Follow.2.1.UPDATED.zip";
}

function downloadOld20() {
  ref.update({
    old20: firebase.firestore.FieldValue.increment(1)
  });
  window.location.href =
    "https://github.com/user-attachments/files/25226641/Go.Up.Follow.2.0.UPDATED.zip";
}

function downloadV10() {
  ref.update({
    v10: firebase.firestore.FieldValue.increment(1)
  });
  window.location.href =
    "https://github.com/user-attachments/files/25226568/Go.Up.Follow.1.0.zip";
}