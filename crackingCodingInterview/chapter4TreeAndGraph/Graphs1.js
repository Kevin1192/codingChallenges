class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(ver => ver !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(ver => ver !== v1)
    }
    removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacencyVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacencyVertex);
      }  
      delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })
        })(start);
        return result;
    }
}