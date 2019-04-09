import React from "react"
import ReactDOM from "react-dom"
import MonacoEditor from "react-monaco-editor"

const EditorPane = () => {
  const options = {
    fontSize: 13,
    lineNumbers: "on",
    minimap: { enabled: false },
    scrollbar: {},
    renderIndentGuides: true,
    renderLineHighlight: "none",
    highlightActiveIndentGuide: false,
    mouseWheelZoom: true,
  }
  const code = `
{
  "shipping_address": {
    "street_address": "1600 Pennsylvania Avenue NW",
    "city": "Washington",
    "state": "DC"
  },
  "billing_address": {
    "street_address": "1st Street SE",
    "city": "Washington",
    "state": "DC"
  }
}
  `.trim()
  return (
    <MonacoEditor
      width="600"
      height="400"
      language="json"
      value={code}
      options={options}
    />
  )
}

const rootNode = document.querySelector("#root")
ReactDOM.render(
  <div style={{ fontFamily: "sans-serif" }}>
    <EditorPane />
  </div>,
  rootNode
)
