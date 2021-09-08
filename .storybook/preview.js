import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withScreenshot } from "storycap";

export const decorators = [
  withScreenshot,
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
