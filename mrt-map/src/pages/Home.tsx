import { useState } from "react";

import MrtMap from "../assets/components/MrtMap";
import StationButton from "../assets/components/StationButton";
import Stations from "../assets/Stations";
const Home = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <MrtMap />
            <StationButton stations={Stations} />
        </div>
    );
};

export default Home;
