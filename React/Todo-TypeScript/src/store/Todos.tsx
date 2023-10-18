// IMPORTS -
import { ReactNode, createContext, useState, useContext } from "react";

// TYPE -
export type ChildrenProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type myTodo = {
  todos: Todo[];
  handleToDo: (task: string) => void; // call signature
  toggleTodo: (id: string) => void;
  handleDelete: (id: string) => void;
};

// CONTEXT -
export const TodosContext = createContext<myTodo | null>(null);

export const TodosProvider = ({ children }: ChildrenProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        ...prev,
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
      ];

      return newTodos;
    });
  };

  // mark completed
  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      return newTodos;
    });
  };

  // delete
  const handleDelete = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleToDo, toggleTodo, handleDelete }}
    >
      {children}
    </TodosContext.Provider>
  );
};

// consumer
export const useTodos = () => {
  const todosConsumer = useContext(TodosContext);

  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider.");
  }

  return todosConsumer;
};
