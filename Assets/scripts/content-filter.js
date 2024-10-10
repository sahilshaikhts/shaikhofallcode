window.addEventListener("load", function () {
  //Get url params
  const urlParams = new URL(document.location).searchParams;
  const category = urlParams.get("type");
  console.log(category);
  //Based on param value filter content
  if (category === "web") {
    FilterContent("project-container", "data-category", "web");
  } else if (category === "game") {
    FilterContent("project-container", "data-category", "game");
  } else {
    FilterContent("project-container", "data-category", "all");
  }
});

function OnClickFilterOption(aOption, aClickedButton) {
  //Check if the attached button has the required class
  if (aClickedButton.classList.contains("item-category")) {
    //Check the option type and filter content
    if (aOption === "web") {
      FilterContent("project-container", "data-category", "web");
    } else if (aOption === "game") {
      FilterContent("project-container", "data-category", "game");
    } else {
      FilterContent("project-container", "data-category", "all");
    }

    //Switch selected button class
    const filter_buttons = document.getElementsByClassName("item-category");
    if (filter_buttons) {
      for (let i = 0; i < filter_buttons.length; i++) {
        if (filter_buttons[i] === aClickedButton) {
          filter_buttons[i].classList.add("selected");
        } else {
          filter_buttons[i].classList.remove("selected");
        }
      }
    }
  } else {
    console.warn(
      "Invalid function call, filter button element not setup with appropriate classes."
    );
  }
}

/**
 *
 * @param {string} aClassName - Class name of elements to be filtered.
 * @param {string} aDataAttribute - Data-xyz attribute for type name.
 * @param {string} aSelectedType - Type to be displayed.(Pass "all" to reset filter.)
 */
function FilterContent(aClassName, aDataAttribute, aSelectedType = "all") {
  const content = document.getElementsByClassName(aClassName);
  if (content) {
    var visibleElementCounter = 0;
    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      const type = element.getAttribute(aDataAttribute);

      if (type === aSelectedType || aSelectedType === "all") {
        visibleElementCounter++;
        element.style.display = "flex";
        if (visibleElementCounter % 2 == 0) {
          element.classList.add("project-container_wOffset");
        }
      } else {
        element.style.display = "none"; //Hide the element if not the selected type.
        element.classList.remove("project-container_wOffset");
      }
    }
  }
}
