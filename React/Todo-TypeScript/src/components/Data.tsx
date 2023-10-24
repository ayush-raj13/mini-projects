// IMPORTS -
import { useTodos } from "../store/Todos";
import { FormLabel, Button } from "@chakra-ui/react";
import "../styles/details.css";

const Data = () => {
  const { todos, toggleTodo, handleDelete } = useTodos();
  let filterData = todos;

  return (
    <>
      <ul className="parent__list">
        {filterData.map((item) => {
          return (
            <li key={item.id} className="list">
              <input
                type="checkbox"
                id={`todo-${item.id}`}
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
              />
              <FormLabel className="label">{item.task}</FormLabel>

              {item.completed && (
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  size={"sm"}
                >
                  Delete
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Data;
