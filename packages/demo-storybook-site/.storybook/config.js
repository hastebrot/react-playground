import { configure } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import { version } from "../package.json"

function loadStories() {
  require("../src/stories/Welcome.story.js")
  require("../src/stories/Button.story.js")
}

configure(loadStories, module)

setOptions({
  name: `storybook site v${version}`,
  showAddonPanel: false,
  sidebarAnimations: false,
})
