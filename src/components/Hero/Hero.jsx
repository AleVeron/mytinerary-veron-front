import "./hero.css";
import imgHero from "../../images/MyTineraryPng.png"
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="hero d-flex flex-column justify-content-center align-items-center">

            <div className="heroItems d-flex flex-column justify-content-center align-items-center">
                <div>
                <img className="heroIcon" src={imgHero} alt=""/>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center gap-5">
                <Link to={"/cities"}><button className="heroButton col-9 col-lg-10">Find your next experience</button></Link>
                    <p className="heroP p-3 col-10">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
                </div>
            </div>

        </div>
    )
}