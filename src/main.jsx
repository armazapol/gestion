// main.tsx or main.jsx
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { TanStackProvider } from "./plugins/TanStackProvider";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
      <TanStackProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </TanStackProvider>
);
