//VARIABLES//
//sections//
var $splashSection = $('#splash');
var $loginSection = $('#login');
var $signupSection = $('#signup');
var $homeSection = $('#home');
var $profileSection = $('#profile');
var $friendsSection = $('#friends');
var $navBar = $('#principal-nav');
var $footer = $('#footer-site');
var $logout = $('#logout');
//buttons//
var $logingBtn = $('#login-btn');
var $profileBtn = $('#profile-btn');
var $friendsBtn = $('#friends-btn');
var $logoutBtn = $('#logout-btn');
var $addFriendBtn = $('#add-friend-btn');
var $deleteFriendBtn = $('#delete-friend-btn');
var $messageFriendBtn = $('#message-friend-btn');
var $commentBtn = $('#comment-btn');
var $likeBtn = $('#like-btn');
var $postingBtn = $('#posting-btn');
var $uploadImageFileBtn = $('#upload-btn');
var $logingAgainBtn = $('#login-again-btn');
//selections
var $likesNotifications =$('#');
var $commmentsNotifications =$('#');
var $messagesNotifications =$('#');
var $friendsNotifications =$('#');
//DOCUMENT//
$(document).ready(function(e){
  //Nav, Modals and Select//
  $(".button-collapse").sideNav();
  $('select').material_select(); //activates selections in modals
  $('.modal').modal();
  //Nav, Modals and Select End//
  //Splash Page//
  $splashSection.fadeOut(3000, function() {
  $loginSection.fadeIn(5000);
  });
  $logout.fadeOut(5000, function() {
  window.location.href = '../index.html';
  });
//Splash Page End//
//Login watcher
  function loginwatcher() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('active user');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no user signed');
      // ...
    }
  });
}
loginwatcher();
//login watcher end
//galllery display//
  $(function() {
    $('.kwicks-vertical').kwicks({
      maxSize : 350,
      spacing : 10,
      isVertical: true,
      behavior: 'menu',
      selectOnClick: false
    });

    $('.kwicks-horizontal').kwicks({
      maxSize: 350,
      spacing: 10,
      behavior: 'menu',
      selectOnClick: false
    });
  });

});
//  galllery display end//

//FIREBASE//
// var config = {
//   apiKey: "AIzaSyCVcausjRwZtoyt5u43LHPa_lhuHEWpxas",
//   authDomain: "letteringlife-98ae6.firebaseapp.com",
//   databaseURL: "https://letteringlife-98ae6.firebaseio.com",
//   projectId: "letteringlife-98ae6",
//   storageBucket: "letteringlife-98ae6.appspot.com",
//   messagingSenderId: "354310615902"
// };
// firebase.initializeApp(config);

//SIGN UP

//login with username & password

//login with facebook
var providerFb = new firebase.auth.FacebookAuthProvider();
$loginFb.click(function() {
  firebase.auth().signInWithPopup(providerFb).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    firebase.database().ref('users/' + user.uid).set({
      name: user.displayName,
      email: user.email,
      profilePhoto: user.photoURL,
    }).then(user => {
      window.location.href = 'home.html';
    });
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

//login with twitter
//(firebase tutorial)


//NAVIGATION//
//showing home//
$logingBtn.click(function() {
  e.preventDefault();
window.location.href = 'home.html';
});
//showing profile//
$profileBtn.click(function() {
  e.preventDefault();
window.location.href = 'profile.html';
});
//showing friends//
$friendsBtn.click(function() {
  e.preventDefault();
window.location.href = 'friends.html';
});
//showing gallery//
$friendsBtn.click(function() {
  e.preventDefault();
window.location.href = 'gallery.html';
});
//showing settings//
$friendsBtn.click(function() {
  e.preventDefault();
window.location.href = 'settings.html';
});
//showing logout//
$logoutBtn.click(function() {
  e.preventDefault();
  window.location.href = 'logout.html';
});
//login again
$logingAgainBtn.click(function() {
  $logout.fadeOut(5000, function() {
  window.location.href = '../index.html';
  });
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


//GALLERY
//zoom in
//delete image
//download image


//notifications
