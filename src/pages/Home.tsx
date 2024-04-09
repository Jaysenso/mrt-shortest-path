import MrtMap from "../assets/Static/MrtMap";
import StationButton from "../assets/components/StationButton";
import Stations from "../assets/Static/Stations_pos";
import DialogBox from "../assets/components/DialogBox";
const Home = () => {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    right: 10,
                    bottom: 10,
                    zIndex: 1000,
                }}
            >
                <DialogBox />
            </div>
            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <MrtMap />
                <StationButton stations={Stations} />
            </div>
        </>
    );
};

export default Home;
