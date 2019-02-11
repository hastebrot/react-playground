import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/Welcome.story.js");
  require("../src/stories/Button.story.js");
}

configure(loadStories, module);
