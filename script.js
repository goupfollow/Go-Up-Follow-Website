// Firebase config (TERA HI)
const firebaseConfig = {
  apiKey: "AIzaSyCu2nC3vQdrmS5uyGFgHxymZxI8obpK2kg",
  authDomain: "count-9e4a6.firebaseapp.com",
  projectId: "count-9e4a6",
  storageBucket: "count-9e4a6.firebasestorage.app",
  messagingSenderId: "26895308142",
  appId: "1:26895308142:web:33ee494825605d52b39d7f"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();
const ref = db.collection("downloads").doc("app");

// REAL-TIME GLOBAL COUNTS
ref.onSnapshot((doc)=>{
  if(doc.exists){
    document.getElementById("latestCount").innerText = doc.data().latest21;
    document.getElementById("old20Count").innerText  = doc.data().old20;
    document.getElementById("old10Count").innerText  = doc.data().old10;
  }
});

// Increment functions
function countLatest(){
  ref.update({
    latest21: firebase.firestore.FieldValue.increment(1)
  });
}

function countOld20(){
  ref.update({
    old20: firebase.firestore.FieldValue.increment(1)
  });
}

function countOld10(){
  ref.update({
    old10: firebase.firestore.FieldValue.increment(1)
  });
}
