const { DirectedGraph } = require("./directedGraph");

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);

function min(target) {
  const Q = {};
  const dist = {};

  for (vertex in digraph1.edges) {
    dist[vertex] = Infinity;
    Q[vertex] = digraph1.edges[vertex];
  }
  dist[target] = 0;

  while (Object.keys(Q).length > 0) {
    let min = Infinity;
    let minVertax;
    for (key in Q) {
      if (dist[key] < min) {
        min = Q[key];
        minVertax = key;
      }
    }

    for (edge in Q[minVertax]) {
      Q[minVertax][edge];

      const newDist = Q[minVertax][edge] + dist[minVertax];
      if (newDist < dist[edge]) {
        dist[edge] = newDist;
      }
    }
    delete Q[minVertax];
  }

  return dist;
}

console.log(min("A")["D"]);
