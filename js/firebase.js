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
const FIELD_DATE = 'date';
let comments = [];
let isFetchDone = false;

const insertComment = (comment) => {
  document.querySelector('.loader').style = 'display: none;';
  const reviewForm = document.querySelector('.review__form');
  reviewForm.insertAdjacentHTML('beforebegin',
  `<div class="review__component active">
    <p class="review__contents">
      ${comment.FIELD_CONTENT}
    </p>
    <strong class="review__person">
      -${comment.FIELD_NAME}, <span class="review__date">${comment.FIELD_DATE}</span>
    </strong>
  </div>`);
};

db.collection('comments').orderBy(FIELD_DATE).onSnapshot((querySnapshot) => {

  const form = document.querySelector('.review__form');
  const loader = document.querySelector('.review__loader');

  querySnapshot.docChanges().forEach((change) => {
    const newComment = {};
    newComment.FIELD_CONTENT = change.doc.get(FIELD_CONTENT);
    newComment.FIELD_NAME = change.doc.get(FIELD_NAME);
    const date = change.doc.get(FIELD_DATE);
    newComment.FIELD_DATE = date ? date.toDate().toLocaleString('en-US') : "";
    if(newComment.FIELD_DATE !== "") {
      insertComment(newComment);
      form.style.display = 'block';
      loader.style.display = 'none';
    } else {
      form.style.display = 'none';
      loader.style.display = 'block';
    }
  });
});

const writeComment = (name, content) => {
  db.collection('comments').add({
    [FIELD_NAME]: name.value,
    [FIELD_CONTENT]: content.value,
    [FIELD_DATE]: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log("Successful Insertion of data!!");
    name.value = content.value = '';
  }).catch((err) => {
    console.log("Error is occurred!\n");
    console.log(err);
  });
};

const addEventToSubmit = () => {
  const submit = document.getElementById('review__submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    writeComment(
      document.getElementById('name'), 
      document.getElementById('review__content')
    );
  });
};

addEventToSubmit();