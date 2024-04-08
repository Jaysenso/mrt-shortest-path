import { useState } from "react";
import ShortestPathBFS from "../../Algorithm/shortestPathBFS";
import Stations_adjList from "../Stations_AdjList";

interface Props {
    stations: station[];
}
interface station {
    id: string;
    cx: number;
    cy: number;
    r: number;
}
const StationButton = ({ stations }: Props) => {
    const [startStation, setStartStation] = useState<string>("");
    const [endStation, setEndStation] = useState<string>("");
    const [shortestPath, setShortestPath] = useState<string[]>([]);

    const handleCircleClick = (id: string) => {
        if (startStation === "") {
            setStartStation(id);
        } else if (startStation !== id) {
            setEndStation(id);
            setShortestPath(
                ShortestPathBFS(Stations_adjList, startStation, endStation)
            );
        }
    };

    const handleCircleFill = (id: string) => {
        if (startStation === id) return "red";
        else if (endStation === id) return "black";
        else if (shortestPath.length > 0 && shortestPath.includes(id))
            return "green";
        else return "white";
    };

    return (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1410 1010"
                style={{ width: 1410, height: 1010 }}
            >
                {stations.map((station) => (
                    <circle
                        key={station.id}
                        id={station.id}
                        cx={station.cx}
                        cy={station.cy}
                        r={station.r}
                        onClick={() => handleCircleClick(station.id)}
                        fill={handleCircleFill(station.id)}
                        stroke="#fa9e0d"
                    />
                ))}
            </svg>
        </div>
    );
};

export default StationButton;
