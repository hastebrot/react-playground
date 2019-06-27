import { load, addParameters } from "@storybook/react"
import { themes } from "@storybook/theming"
import { version } from "../package.json"

addParameters({
  options: {
    name: `storybook site v${version}`,
    theme: themes.light,
    isToolshown: true,
    showPanel: false,
    sidebarAnimations: false,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
})

load(require.context("../src", true, /\.story\.js$/), module)
load(require.context("../src", true, /\.story\.mdx$/), module)
