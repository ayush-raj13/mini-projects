// IMPORTS -
import React, { FormEvent } from "react";
import { Stack, FormControl, Input, HStack, Button } from "@chakra-ui/react";
import { useTodos } from "../store/Todos";

const Todo = () => {
  const [value, setValue] = React.useState("");
  const { handleToDo } = useTodos();

  const submitHandler = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleToDo(value);
    setValue("");
  };

  return (
    <>
      <Stack height={"min-content"} padding={"10"} overflow={"hidden"}>
        <HStack
          justifyContent={"center"}
          height={"min-content"}
          overflow={"hidden"}
        >
          <form onSubmit={submitHandler}>
            <HStack overflow={"hidden"}>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Type here"
                  width={"30vw"}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </FormControl>
              <Button colorScheme="teal" type="submit">
                Submit
              </Button>
            </HStack>
          </form>
        </HStack>
      </Stack>
    </>
  );
};

export default Todo;
