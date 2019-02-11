import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components/Button";

storiesOf("Button", module)
  .add("primary", () => (
    <Button>Click me</Button>
  ))
  .add("secondary", () => (
    <Button kind="secondary">Click me</Button>
  ));
