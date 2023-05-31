function DirectedGraph() {
  this.edges = {};
}
DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};
DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
  if (weight === undefined) {
    weight = 0;
  }
  this.edges[origVertex][destVertex] = weight;
};

function _isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function _extractMin(Q, dist) {
  var minimumDistance = Infinity,
    nodeWithMinimumDistance = null;

  // console.log("-------------");
  for (var node in Q) {
    // console.log({ node });
    if (dist[node] <= minimumDistance) {
      minimumDistance = dist[node];
      nodeWithMinimumDistance = node;
      // console.log({ minimumDistance, nodeWithMinimumDistance, dist });
    }
  }
  return nodeWithMinimumDistance;
}
DirectedGraph.prototype.Dijkstra = function (source) {
  // create vertex set Q
  var Q = {},
    dist = {};
  for (var vertex in this.edges) {
    // unknown distances set to Infinity
    dist[vertex] = Infinity;
    // add v to Q
    Q[vertex] = this.edges[vertex];
  }

  // Distance from source to source init to 0
  dist[source] = 0;
  console.log(Q);
  console.log(dist);

  while (!_isEmpty(Q)) {
    var u = _extractMin(Q, dist); // get the min distance

    // remove u from Q
    delete Q[u];

    // for each neighbor, v, of u:
    // where v is still in Q.
    for (var neighbor in this.edges[u]) {
      // current distance
      var alt = dist[u] + this.edges[u][neighbor];
      // a shorter path has been found
      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
      }
    }
    console.log({ dist });
  }
  return dist;
};

module.exports = { DirectedGraph };
