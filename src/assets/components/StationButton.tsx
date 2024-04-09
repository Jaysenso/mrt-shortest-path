import { useState } from "react";
import ShortestPathBFS from "../../Algorithm/shortestPathBFS";
import Stations_sg from "../Static/Stations_neighbours";

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

    const handleClickCircle = (id: string) => {
        if (startStation === "") {
            setStartStation(id);
            if (endStation) {
                setShortestPath(ShortestPathBFS(Stations_sg, id, endStation));
            }
        } else if (startStation === id) {
            setStartStation("");
            setShortestPath([]);
            if (endStation === id) {
                setEndStation("");
                setShortestPath([]);
            }
        } else if (endStation === "") {
            setEndStation(id);
            setShortestPath(ShortestPathBFS(Stations_sg, startStation, id));
        } else if (endStation === id) {
            setEndStation("");
            setShortestPath([]);
        }
    };

    const fillCircle = (id: string) => {
        if (startStation === id) return "red";
        if (endStation === id) return "black";
        if (startStation && endStation && shortestPath.includes(id))
            return "cyan";
        return "black";
    };

    return (
        <div>
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
                        onClick={() => handleClickCircle(station.id)}
                        fill={fillCircle(station.id)}
                        stroke="#fa9e0d"
                    />
                ))}
            </svg>
        </div>
    );
};

export default StationButton;
