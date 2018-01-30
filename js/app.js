//VARIABLES//
//sections//
$splashSection = $('#splash');
$loginSection = $('#login');
$signupSection = $('#signup');
$homeSection = $('#home');
$profileSection = $('#profile');
$friendsSection = $('#friends');
$navBar = $('#principal-nav');
$footer = $('#footer-site');
$logout = $('#logout');
//buttons//
$logingBtn = $('#login-btn');
$profileBtn = $('#profile-btn');
$friendsBtn = $('#friends-btn');
$logoutBtn = $('#logout-btn');
$addFriendBtn = $('');
$deleteFriendBtn = $('');
$messageFriendBtn = $('');
$commentBtn = $('');
$likeBtn = $('');
$postingBtn = $('');
$uploadImageFileBtn = $('');
//DOCUMENT//
$(document).ready(function(e){
  //Nav, Modals and Select//
  $(".button-collapse").sideNav();
  $('select').material_select(); //activates selections in modals
  $('.modal').modal();
  //Nav, Modals and Select End//
  //Splash Page//
  $splashSection.fadeOut(2000, function() {
    $loginSection.fadeIn(3000);
  });

});
//Splash Page End//
//FIREBASE//
var config = {
  apiKey: "AIzaSyCVcausjRwZtoyt5u43LHPa_lhuHEWpxas",
  authDomain: "letteringlife-98ae6.firebaseapp.com",
  databaseURL: "https://letteringlife-98ae6.firebaseio.com",
  projectId: "letteringlife-98ae6",
  storageBucket: "letteringlife-98ae6.appspot.com",
  messagingSenderId: "354310615902"
};
firebase.initializeApp(config);

//NAVIGATION//

//showing home//
$logingBtn.click(function() {
  console.log('home');


});


//showing profile//
$profileBtn.click(function() {
  console.log('profile');

});

//showing friends//

$friendsBtn.click(function() {

  console.log('friends');

});

//showing logout//
$logoutBtn.click(function() {

  console.log('logout');



});

//FUNCTIONS//

//new post//
//(twitter/firebase tutorial)

//uploading & posting a photo
//(twitter/firebase)

//add friend//
//(agenda de contactos/firebase tutorial)

//delete friend//
//(agenda de contactos/firebase tutorial)

//showing friend list//
//(food maps/firebase tutorial)

//like//
//investigate


//tag friend//
//investigate


//login with facebook
//(firebase tutorial)


//login with twitter
//(firebase tutorial)
