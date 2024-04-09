import MrtMap from "../assets/Static/MrtMap";
import StationButton from "../assets/components/StationButton";
import stations_pos from "../assets/Static/Stations_pos";
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
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MrtMap />
                <div style={{ position: "absolute" }}>
                    <StationButton stations={stations_pos} />
                </div>
            </div>
        </>
    );
};

export default Home;
