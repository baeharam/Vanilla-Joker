const firebaseConfig = {
  apiKey: "AIzaSyCzFDDgDWZS0nAR8Eol2PR-0F2OJdPixhw",
  authDomain: "joker-d3735.firebaseapp.com",
  databaseURL: "https://joker-d3735.firebaseio.com",
  projectId: "joker-d3735",
  storageBucket: "joker-d3735.appspot.com",
  messagingSenderId: "116939007515",
  appId: "1:116939007515:web:c97e47e3e28fc44f9d7abe",
  measurementId: "G-R3J003PH6M"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FIELD_CONTENT = 'content';
const FIELD_NAME = 'name';
const FIELD_FROM = 'from';
let comments = [];
let isFetchDone = false;

const insertComment = () => {
  document.querySelector('.loader').style = 'display: none;';
  const reviewSection = document.querySelector('.review');
  comments.forEach((comment) => {
    reviewSection.insertBefore(
      `<div class="review__component active">
        <p class="review__contents">
          ${comment.FIELD_CONTENT}
        </p>
        <strong class="review__person">
          -${comment.FIELD_NAME}
          <img class="review__source" 
          src="../images/${comment.FIELD_FROM}.jpg" 
          alt="${comment.FIELD_FROM} 로고">
        </strong>
      </div>`);
  });
};

db.collection('comments').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const newComment = {}
    newComment.FIELD_CONTENT = doc.get(FIELD_CONTENT);
    newComment.FIELD_NAME = doc.get(FIELD_NAME);
    newComment.FIELD_FROM = doc.get(FIELD_FROM);
    comments.push(newComment);
  });
  insertComment();
});