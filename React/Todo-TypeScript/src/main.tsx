// IMPORTS -
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { TodosProvider } from "./store/Todos.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </ChakraProvider>
  </React.StrictMode>
);
