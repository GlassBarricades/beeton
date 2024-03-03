import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App";
import "@mantine/carousel/styles.css";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </MantineProvider>
);
