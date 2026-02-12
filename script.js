// 🔥 Latest Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBRd3OAmqWNNrg4wG6ETuLSvzJAUPb_rr4",
  authDomain: "count-b638f.firebaseapp.com",
  projectId: "count-b638f",
  storageBucket: "count-b638f.firebasestorage.app",
  messagingSenderId: "595930590603",
  appId: "1:595930590603:web:78629be40b7da8a28ad38e",
  measurementId: "G-XBGRFQF7K8"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestore ref
const ref = db.collection("downloads").doc("counter");

// 🔄 Live update
ref.onSnapshot(doc => {
  if (doc.exists) {
    document.getElementById("latestCount").innerText = doc.data().latest21;
    document.getElementById("oldCount").innerText = doc.data().old20;
    document.getElementById("v1Count").innerText = doc.data().v10;
  }
});

// ⬇️ Download handlers
function downloadLatest() {
  document.getElementById("latestBtn").style.pointerEvents = "none";
  ref.update({ latest21: firebase.firestore.FieldValue.increment(1) });
}

function downloadOld() {
  document.getElementById("oldBtn").style.pointerEvents = "none";
  ref.update({ old20: firebase.firestore.FieldValue.increment(1) });
}

function downloadV1() {
  document.getElementById("v1Btn").style.pointerEvents = "none";
  ref.update({ v10: firebase.firestore.FieldValue.increment(1) });
}
