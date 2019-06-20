import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import ReactMarkdown from "react-markdown"
import { Button } from "../components/Button"

const defaultText = `
# Button

Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them.

### Best practices

- Group buttons logically into sets based on usage and importance.
- Ensure that button actions are clear and consistent.
- The main action of a group set can be a primary button.
- Select a single button variation and do not mix them.
`

storiesOf("Button", module)
  .addDecorator(withInfo)
  .add(
    "default",
    () => (
      <div>
        {/* <ReactMarkdown source={defaultText} /> */}
        <Button>Click me</Button>
        <Button kind="secondary">Click me</Button>
      </div>
    ),
    {
      info: {
        text: defaultText,
        inline: true,
        header: false,
        source: false,
      },
    }
  )
