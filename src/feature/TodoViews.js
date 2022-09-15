import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./todoSlice";

const TodoViews = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log({ isLoading, todos, error } );
  return <h1>Todos viewer.js</h1>;
};

export default TodoViews;
