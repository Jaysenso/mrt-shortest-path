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
    const visited = new Set<string>();

    for (const key in graph) {
        par.set(key, "");
        dist.set(key, Infinity);
    }
    console.log(par, dist);

    const q: string[] = [];
    dist.set(start, 0);
    q.push(start);
    visited.add(start);

    while (q.length > 0) {
        const node = q.shift()!;
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                par.set(neighbour, node);
                dist.set(neighbour, dist.get(neighbour)! + 1);
                q.push(neighbour);
                visited.add(neighbour);
                console.log(par, dist);
            }
        }
    }

    /**
     * compute paths (return the array of stations in the path)
     */
    const path: string[] = [];
    // let currentStation: string = end;
    // path.push(currentStation);
    // while (par.get(currentStation) !== "") {
    //     currentStation = par.get(currentStation)!;
    //     path.push(currentStation);
    // }
    return path;
};

export default ShortestPathBFS;
