import MrtMap from "../assets/Static/MrtMap";
import StationButton from "../assets/components/StationButton";
import Stations from "../assets/Static/Stations_pos";
import React from "react";
const Home = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <MrtMap />
            <StationButton stations={Stations} />
        </div>
    );
};

export default Home;
