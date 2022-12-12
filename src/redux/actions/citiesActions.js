import axios from "axios";
import { URL } from '../../consts/google';

/* let urlHeroku = 'http://localhost:4000/' */
let urlHeroku = URL

const itinerariesActions = {

    getCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(urlHeroku + 'api/cities')
            dispatch ({type: 'GETCITIES', payload: res.data.response.cities })
        }
    },
    getOneCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get( urlHeroku + `api/cities/${id}`)
            dispatch({type : 'GETONECITY', payload: res.data.response})
        }
    },

    filterCities:(input) => {

        return (dispatch, getState) => {
            dispatch({type:"FILTERCITY", payload: input})
        }
    }

}

export default itinerariesActions;