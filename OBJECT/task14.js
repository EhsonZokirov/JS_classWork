function getVoteCount(obj) {
  return Object.values(obj).reduce((a, b) => b - a, 0);
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0
