/*global FB*/

const loadFbLoginApi = (window, document, self) => {
  return new Promise(function (resolved, rejected) {
    window.fbAsyncInit = function() {
      FB.init({
          appId      : '1705022909788711',
          cookie     : true,  // enable cookies to allow the server to access
                              // the session
          xfbml      : true,
          version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
      resolved();
       // ignore unnecesary bind warning
       // eslint-disable-next-line
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
  });
}

const checkLoginState = (onConnected) => {

  const statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      if (onConnected) {
        onConnected();
      }
    } else if (response.status === 'not_authorized') {
    } else {
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
    onComplete(response)
  });
}

const getMyFriends = () => {
  FB.api('/me/friends', function(response) {
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
