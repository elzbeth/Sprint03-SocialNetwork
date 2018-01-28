
$(document).ready(function(e){
$('select').material_select(); //activates selections in modals
$('.modal').modal();
});

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
