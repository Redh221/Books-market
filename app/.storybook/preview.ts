import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

// Подключаем Google Fonts через JavaScript
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
    ...preview.parameters, // Чтобы параметры контролов также применились
  },
} satisfies Preview;
