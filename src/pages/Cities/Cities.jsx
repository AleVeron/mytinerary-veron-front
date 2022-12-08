import "./cities.css";
import Cards from "../../components/Cards/Cards";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import { ClipLoader } from "react-spinners";


function Cities() {



    const [input, setInput] = useState('')
    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    useEffect(() => {
        dispatch(citiesActions.filterCities(input))
    }, [input])

    //Traigo mis ciudades filtradas con useSelector
    const filteredCities = useSelector((store) => store.citiesReducer.cityFilter)



    const handlechange = (e) => {
        setInput(e.target.value)
        /* console.log(input); */
    }


    return (
        <>
            {
                loader ?
                    <div className="loader">
                        <ClipLoader
                            size={100}
                            color={"#F37A24"}
                            loader={loader}
                        />
                    </div>
                    :
                    <div className="cities d-flex flex-column justify-content-center" style={{
                        backgroundImage: `url("https://images2.alphacoders.com/709/709048.jpg")`,
                        backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }}>

                        <div className="d-flex gap-3 p-5 flex-column flex-md-row align-items-center justify-content-around city" >

                            <h1 className="citiesTitle col-9 col-lg-4 col-sm-6 d-flex align-items-center justify-content-center">Select your adventure!</h1>


                            <input
                                className="search"
                                type="search"
                                placeholder="Search here"
                                onKeyUp={handlechange}
                            >
                            </input>

                        </div>


                        <div className="d-flex flex-md-row flex-wrap gap-3 container justify-content-center">


                            {/* Realizo el mapeo de mis cards con el array filtrado */}
                            {filteredCities?.length > 0 ? filteredCities.map(city => <Cards city={city} key={city._id} />) : <div className="error"><h1>Not found city</h1></div>}

                        </div>

                    </div>
            }
        </>


    )
}

export default (Cities)

