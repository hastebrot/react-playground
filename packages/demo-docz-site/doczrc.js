import puppeteer from "docz-plugin-puppeteer"

export default {
  title: "demo docz site",
  description: "some documentation",
  src: "docs/",
  files: "**/*.mdx",
  themeConfig: {
    mode: "light",
    colors: {
      // primary: "tomato",
      sidebarBg: "#fafbfc",
      border: "#d8dde1",
    },
    showPlaygroundEditor: true,
    styles: {
      body: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI"`,
      },
      h1: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI"`,
        margin: `40px 0px`,
        fontSize: `48px`,
      },
      h2: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI"`,
      },
      sidebar: {
        boxSizing: `border-box`,
        borderRight: `1px solid #d8dde1`,
      }
    },
  },
  hashRouter: true,
  codeSandbox: false,
  plugins: [puppeteer()],
}
