// IMPORTS -
import { Heading, Stack } from "@chakra-ui/react";
import Todo from "./components/Todo";
import Data from "./components/Data";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Stack
        padding={"10"}
        textAlign={"center"}
        overflow={"hidden"}
        color={"teal.400"}
      >
        <Heading as={"h1"} size={"xl"}>
          Todo + TypeScript
        </Heading>
      </Stack>
      <Todo />
      <Data />
    </>
  );
};

export default App;
