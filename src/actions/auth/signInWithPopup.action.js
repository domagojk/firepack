/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign In With Popup - Action

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { auth as FirebaseAuthApi } from '../../firebase/api';

import { AUTH } from '../../constants/actionTypes.const';

/**
 *  Sign In With Popup
 */
export default provider => dispatch => {
  dispatch({ type: AUTH.SIGN_IN_WITH_POPUP_START });

  FirebaseAuthApi.signInWithPopup(provider)
    .then(() => (
      dispatch({ type: AUTH.SIGN_IN_WITH_POPUP_SUCCESS })
    ))
    .catch(({ code, message }) => {
      alert(`${code}\n\n${message}`); // eslint-disable-line

      dispatch({
        type: AUTH.SIGN_IN_WITH_POPUP_FAIL,
        payload: {
          code,
          message,
        },
      });
    });
};
