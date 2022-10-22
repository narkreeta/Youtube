import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {useState} from "react"
import { add, sub } from './redux/count/reducer';
import { GetGitUser } from './redux/gitapi/uname';

function App() {
  const [state,setState] = useState()
  const [textState,setTextState] = useState()
  // const count = useSelector((state)=> state.countReducer.value)
  const response = useSelector((state)=> state.GituserReducer.responsedata)
  const loading = useSelector((state)=> state.GituserReducer.loading)
  const dispatch = useDispatch()
  console.log(response,"response")
  return (
    <div className="App">
      <h1>{count}</h1>
     <div>
      <button onClick={()=>{
        dispatch(sub(state))
      }}>-</button>
      <input type="number" value={state} onChange={(e)=>{
        setState(parseInt(e.target.value))
      }} />
      <button onClick={()=>{
        dispatch(add(state))
      }}>+</button>
     </div>
     <div>
     <input type="text" value={textState} onChange={(e)=>{
        setTextState(e.target.value)
      }} />
      <button onClick={()=>{
        dispatch(GetGitUser(state))
      }}>GetValues</button>
     </div>
     {loading && (<h1>Loading</h1>)}
     {
      response && (
        <>
        <h6>{response.login}</h6>
        <h6>{response.name}</h6>
        <h6>{response.id}</h6>
        </>
      )
     }
    </div>
  );
}

export default App;
