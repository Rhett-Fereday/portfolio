<template>
  <div style="margin-bottom: 80px;">
    <h1>Bucket-Based Priority Queue Data Structures</h1>
    <div class="paragraph" >
      <div>
        The focus of my dissertation research was accelerating best-first heuristic graph-search algorithms by improving the priority queue data structures that they use, both asymptotically and practically. I accomplished this by improving existing bucketing techniques,
        improving the worst-case asymptotic complexity of priority queue operations compared to the traditional binary heap data structure.
        <br/><br/>
      </div>

      <h2>The A* algorithm</h2>
      <div>
        Although Robert Dial introduced a bucket-based priority queue for Dijkstra's algorithm in the 60's that has amortized-constant complexity for its operations, the A* algorithm is often implemented using a tie-breaking rule that requires altering
        this bucket structure. The tie-breaking rule improves A*'s performance in practice, but the amortized-constant complexity for priority queue operations is lost. As part of my research, I have created a new data structure, called the
        <strong>lazy two-level bucket queue</strong>, that is the first bucket-based priority queue for A* to provide both tie-breaking and amortized-constant operation complexity.
        <br/><br/>
      </div>

      <h2>Bounded-suboptimal and anytime algorithms</h2>
      <div>
        Despite the performance benefits of bucket-based priority queues, they have not been generally applied to bounded-suboptimal and anytime search algorithms that derive from A*. This is because the structures used to accelerate A* are designed under assumptions that
        do not hold in the context of these algorithms. I have invented a new data structure, call a <strong>bucket heap</strong>, that extends the performance benefits of bucket-based priority queues to bounded-suboptimal and anytime search algorithms that are related to A*.
        Additionally, the bucket heap provides access to a tighter suboptimality bound at all times during search, and facilitates a hybrid algorithmic strategy that can improve the suboptimality bound even further. In some experimental domains, bucket heap operations
        are <strong>~13</strong> times faster than a binary heap.
        <br/><br/>
      </div>

      <h2>Limiting node re-expansions</h2>
      <div>
        In certain domains, bounded-suboptimal and anytime algorithms that derive from A* may exhibit pathological behavior, causing them to re-expand search nodes an exponential number of times, in the worst-case. This can drastically reduce search performance. In addition
        to improved suboptimality bounds, the hybrid search strategy enabled by the bucket heap also guarantees that the number of expansions performed by the algorithm is asymptotically equivalent to A*, eliminating this pathological behavior. In some common domains, such as
        2D grid search, this can improve runtime by a factor of <strong>30</strong> or more!
        <br/><br/>
      </div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  //max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  //margin-top: 50px;
  text-align: center;
  width: 50%;
  margin: auto;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
    width: 25%;
  }
}

</style>