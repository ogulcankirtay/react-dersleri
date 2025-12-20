
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from './redux/CounterSlice'
import { store } from './redux/store';
import UserList from './UserList';


function App() {

  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);

  return (
    <>
      <UserList></UserList>

      <h1>{value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </>
  )
}

export default App
