/**
 * @param graph adj-list/matrix that represents the graph
 * @param par where par[i] represent the parent of the vertex i
 * @param dist dist[i] stores the distance of vertex i from source vertex
 * @param start represents the startNode
 * @param endStation represents the endNode
 */

const ShortestPathBFS = (
    graph: { [key: string]: string[] },
    start: string,
    end: string
) => {
    const par = new Map<string, string>();
    const dist = new Map<string, number>();
    const stationsMap = new Map<string, string[]>(Object.entries(graph));
    const q: string[] = [];
    let node: any;

    for (const key in graph) {
        par.set(key, "");
        dist.set(key, Infinity);
    }

    dist.set(start, 0);
    q.push(start);

    while (q.length > 0) {
        node = q.shift();
        if (node !== undefined) {
            for (const neighbour of stationsMap.get(node)!) {
                if (dist.get(neighbour) === Infinity) {
                    par.set(neighbour, node);
                    dist.set(
                        neighbour,
                        dist.get(neighbour) === Infinity
                            ? 1
                            : dist.get(neighbour)! + 1
                    );
                    q.push(neighbour);
                }
            }
        }
    }

    const path: string[] = [];
    let currentStation: string = end;
    path.push(currentStation);
    while (par.get(currentStation) !== "") {
        currentStation = par.get(currentStation)!;
        path.push(currentStation);
    }

    console.log(`Start Station : ${start} End Station : ${end}`);
    console.log(`Shortest Path: ${path}`);
    return path;
};

export default ShortestPathBFS;
