// IMPORTS -
import axios from "axios";
import { useEffect, useState } from "react";
import People from "./People";

const Data = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((data) => {
      return setValue([...data.data.data]);
    });
  }, []);

  return (
    <>
      <People value={[...value]} />
    </>
  );
};

export default Data;
