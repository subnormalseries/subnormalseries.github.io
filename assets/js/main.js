const graphContainer = document.getElementById("graph-container");
const gitgraph = GitgraphJS.createGitgraph(graphContainer);
const master = gitgraph.branch("master");
master.commit("Initial commit");
const develop = gitgraph.branch("develop");
develop.commit("Add TypeScript");
const aFeature = gitgraph.branch("a-feature");
aFeature
  .commit("Make it work")
  .commit("Make it right")
  .commit("Make it fast");
develop.merge(aFeature);
develop.commit("Prepare v1");
master.merge(develop).tag("v1.0.0");
