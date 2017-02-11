import Facebook from './facebook';
import { getUsers } from '../database/dbOperations';

export default () => {
  return new Promise(function (resolved, rejected) {
    Facebook.checkLoginState(function (response) {
      Facebook.getMyFacebookInfo(function(response) {
        const name = response.name;
        const id = response.id;
        getUsers().then(function (users) {
          let authorized = users.val().reduce(function (result, user) {
             // ignore double equals warning
             // eslint-disable-next-line
            return result || user.facebookID == id;
          }, false);
          resolved({authorized, name});
        });
      });
    });
  });
}
