import React, { Fragment } from "react"
import { load, addDecorator, addParameters } from "@storybook/react"
import { themes } from "@storybook/theming"
import { DocsPage } from "@storybook/addon-docs/blocks"
import { withA11y } from "@storybook/addon-a11y"
import { version } from "../package.json"

addParameters({
  docs: DocsPage,
  options: {
    name: `storybook site v${version}`,
    theme: themes.light,
    isToolshown: true,
    showPanel: false,
    sidebarAnimations: false,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
})

addDecorator(withA11y)

addDecorator(story => (
  <Fragment>
    {story()}
  </Fragment>
))

// automatically import all files ending in *.stories.js
load(require.context("../src", true, /\.stories\.js$/), module)
load(require.context("../src", true, /\.stories\.mdx$/), module)
