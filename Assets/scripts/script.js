window.addEventListener("load", function () {
  const currentUrl = window.location.href;
});

function OnExpandProjectDetails(event) {
  const mainNode = event.target.parentNode;
  console.log("Main ", mainNode.children[1]);
  if (mainNode) {
    for (i = 0; i < mainNode.children.length; i++) {
      const node = mainNode.children[i];
      console.log("Node ", node);
      if (node.classList.contains("details-content")) {
        const properties = window.getComputedStyle(node);
        if (properties.display == "none") {
          node.style.display = "flex";
        } else {
          node.style.display = "none";
        }
      }
    }
  }
}
