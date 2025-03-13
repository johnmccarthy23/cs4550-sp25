import { useSelector, useDispatch } from "react-redux";
export default function todosRedux() {
  const { message } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todos-redux">
      <h3>Todos Redux</h3>
      <h4>{message}</h4> <hr />
    </div>
  );
}