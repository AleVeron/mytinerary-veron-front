import axios from "axios";
/* let urlHeroku = 'http://localhost:4000/' */
let urlHeroku = 'https://mytinerary-veron-lgh4-dev.fl0.io/'

const usersActions = {


  signUpUsers: (userData) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(urlHeroku + `api/signUp`, { userData })
        dispatch({
          type: 'MESSAGE',
          payload: {
            message: res.data.message,
            success: res.data.success
          }
        })
        return res
      } catch (error) {
        console.log(error);
      }
    }
  },

  loginUsers: (userSignIn) => {
    
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(urlHeroku + 'api/login', {userSignIn})
        if (res.data.success) {
          localStorage.setItem('token', res.data.response.token)
          dispatch({
            type: 'user',
            payload: { user: res.data.response.userData, success: res.data.success }
          })
        }

        return res
      } catch (error) {
        console.log(error);
      }

    }
  },

  verifyToken: (token) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.get(urlHeroku + 'api/logintoken', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })

        if (user.data.success) {
          dispatch({ type: 'user', payload: { user: user.data.response, success: user.data.success } });
          dispatch({
            type: 'MESSAGE_USER',
            payload: { view: true, message: user.data.message, success: user.data.success }
          })

        }

        else { localStorage.removeItem('item') }

      } catch (err) {
        if (err.response.status === 401){
          alert("please login again")
          localStorage.removeItem('token')
        }

      }
    }
  },
  
  signOut: () => {
    return (dispatch, getState) => {
      dispatch({ type: "SIGN_OUT" , 
    });
    };
  },


}

export default usersActions;

