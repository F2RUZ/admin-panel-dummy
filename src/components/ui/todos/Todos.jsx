import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Table from "../table/Table";

const fetchTodos = async () => {
  return await axios
    .get("https://dummyjson.com/todos")
    .then((res) => res?.data?.todos);
};

const Todos = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });


  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Malumot yuklashda qanaqdir xatolik yuz berdi...</h1>;

  return (
    <div>
      <Table todos={data} />
    </div>
  );
};

export default Todos;
