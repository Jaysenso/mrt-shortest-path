var ShortestPathBFS = /** @class */ (function () {
    function ShortestPathBFS() {
    }
    ShortestPathBFS.bfs = function (graph, par, dist, start) {
        var q = [];
        dist.set(start, 0);
        q.push(start);
        while (q.length > 0) {
            var node = q.shift();
            for (var _i = 0, _a = graph[node]; _i < _a.length; _i++) {
                var neighbour = _a[_i];
                //this is the first time we are updating
                if (!dist.has(neighbour)) {
                    par.set(neighbour, node);
                    dist.set(neighbour, dist.get(neighbour) === Infinity
                        ? 1
                        : dist.get(neighbour) + 1);
                    q.push(neighbour);
                }
            }
        }
    };
    ShortestPathBFS.main = function (graph, start, end) {
        var par = new Map();
        var dist = new Map();
        for (var key in graph) {
            par.set(key, "");
            dist.set(key, Infinity);
        }
    };
    return ShortestPathBFS;
}());
//export default ShortestPathBFS;
