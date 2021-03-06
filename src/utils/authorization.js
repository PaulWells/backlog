import Facebook from './facebook';
import { getUsers } from '../database/dbOperations';

export default () => {
  return new Promise(function (resolved, rejected) {
    Facebook.checkLoginState(function (response) {
      Facebook.getMyFacebookInfo(function(response) {
        const name = response.name;
        const facebookID = response.id;
        getUsers().then(function (users) {
          let backlogID = users.val().reduce(function (id, user) {
            // eslint-disable-next-line
            if (user.facebookID == facebookID) {
              return user.id;
            }
            return id;
          }, 0);
          let authorized = users.val().reduce(function (result, user) {
             // ignore double equals warning
             // eslint-disable-next-line
            return result || user.facebookID == facebookID;
          }, false);
          resolved({authorized, name, backlogID});
        });
      });
    });
  });
}
