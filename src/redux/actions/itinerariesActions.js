import axios from "axios";
/* let urlHeroku = 'http://localhost:4000/' */
let urlHeroku = 'https://mytinerary-veron-lgh4-dev.fl0.io/'

const itinerariesActions = {

  //Traigo todos los itinerarios
  getItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get( urlHeroku + `api/itineraries`)
      dispatch({ type: 'FINDITINERARYBYCITY', payload: res.data.response })
    }
  },

  //Traigo los itinerarios que coincidan con mi ID
  getItinerariesByCity: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get(urlHeroku + `api/itinerariesbycity/${id}`)
      dispatch({ type: 'GET_ITINERARIES_BY_CITY', payload: res.data.response })
      return res
    }
  },
  getOneItinerary: (id) => {
    return async (dispatch, getState) => {
      return  await axios.get(urlHeroku + `api/itineraries/${id}`)
    }
  },


  //Accion para dar like y quitarlo
  likeAndDislike: (id) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      try {
        const res = await axios.put(urlHeroku + `api/itineraries/like/${id}`, {},
          {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          })
        return res
      } catch (err) {
        console.log(err);
      }
    }

  }


}

export default itinerariesActions;