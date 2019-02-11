import React from "react";
import { storiesOf } from "@storybook/react";
import ReactMarkdown from "react-markdown";

const introduction = `
# Welcome

Welcome to the documentation.
`

storiesOf("Welcome", module).add("default", () => (
  <div>
    <ReactMarkdown source={introduction} />
  </div>
));
