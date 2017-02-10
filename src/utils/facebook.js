/*global FB*/

const loadFbLoginApi = (window, document, self) => {
  window.fbAsyncInit = function() {
    FB.init({
        appId      : '1705022909788711',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  }.bind(self);

  // Load the SDK asynchronously
  function loadSDK(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  };

  loadSDK(document, 'script', 'facebook-jssdk');
}

const checkLoginState = (onConnected) => {

  const statusChangeCallback = (response) => {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      console.log('connected');
      if (onConnected) {
        onConnected();
      }
    } else if (response.status === 'not_authorized') {
        console.log("Please log into this app.");
    } else {
        console.log("Please log into this facebook.");
    }
  }

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  }, true);
}

const login = (onConnected) => {
  FB.login(checkLoginState(onConnected), {scope: 'user_friends'});
}

const getMyFacebookInfo = (onComplete) => {
  FB.api('/me', function(response) {
    console.log('/me response');
    console.log(response);
    onComplete(response)
  });
}

const getMyFriends = () => {
  FB.api('/me/friends', function(response) {
    console.log('/me/friends');
    console.log(response);
  });
}

const logOut = (onComplete) => {
  FB.logout(onComplete);
}

export default {
  loadFbLoginApi,
  checkLoginState,
  login,
  getMyFacebookInfo,
  getMyFriends,
  logOut
}
