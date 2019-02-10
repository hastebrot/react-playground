import { createPlugin } from "docz-core"

export default () => createPlugin({
  setConfig: (config) => {
    console.log("plugin:", config)
    return config
  }
})
