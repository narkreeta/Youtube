import { useState } from "react";
import "./styles.css";

export default function App() {
  const [EditBool, setEditBool] = useState(false);
  const [tList, setTlist] = useState([]);
  const [ele, setEle] = useState("");
  const [editItem, setEditItem] = useState();
  const AddList = () => {
    let arr = [...tList];
    arr.push({
      id: Date.now(),
      value: ele,
      check: false
    });
    setTlist(arr);
    setEle("");
  };

  const EditBools = (item) => {
    setEditBool(true);
    setEle(item.value);
    setEditItem(item);
  };

  const EditList = () => {
    if (ele === "") {
      return console.log("Error");
    }
    let arr = [...tList];
    arr.filter((i) => i.id === editItem.id)[0].value = ele;
    setTlist(arr);
    setEditBool(false);
    setEle("");
  };

  const checkClick = (item) => {
    let arr = [...tList];
    arr.filter((i) => i.id === item.id)[0].check = !item.check;
    setTlist(arr);
  };

  const DeleteList = () => {
    let arr = [...tList];
    const vals = arr.filter((i) => i.check === false);
    setTlist(vals);
  };

  return (
    <div className="App">
      <input type="text" value={ele} onChange={(e) => setEle(e.target.value)} />
      {!EditBool ? (
        <>
          <button onClick={AddList}>Add</button>
          <button onClick={DeleteList}>Delete</button>
        </>
      ) : (
        <button onClick={EditList}>Edit</button>
      )}

      <div>
        {tList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <input
                type="checkbox"
                checked={item.check}
                onClick={() => {
                  checkClick(item);
                }}
              />
              <p>{item.value}</p>
              <button
                onClick={() => {
                  EditBools(item);
                }}
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
