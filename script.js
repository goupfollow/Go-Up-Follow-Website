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
const ref = db.collection("downloads").doc("counter");

// Live counters
ref.onSnapshot(doc=>{
  if(!doc.exists) return;
  latestCount.innerText = doc.data().latest21;
  old20Count.innerText  = doc.data().old20;
  v1Count.innerText     = doc.data().v10;
});

// Handlers
function downloadLatest(){
  latestBtn.disabled = true;
  ref.update({ latest21: firebase.firestore.FieldValue.increment(1) });
  window.location.href = "app_v2_1.apk";
}

function downloadOld20(){
  old20Btn.disabled = true;
  ref.update({ old20: firebase.firestore.FieldValue.increment(1) });
  window.location.href = "app_v2_0.apk";
}

function downloadV1(){
  old10Btn.disabled = true;
  ref.update({ v10: firebase.firestore.FieldValue.increment(1) });
  window.location.href = "app_v1_0.apk";
}
