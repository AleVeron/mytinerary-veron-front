import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import "./main.css";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";


function Main() {

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 750)
    }, [])

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
                    <div className="main d-flex flex-column justify-content-between">
                        <Hero />

                        <Carousel />
                    </div>

            }
        </>
    )
}

export default Main;