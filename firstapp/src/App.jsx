import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]); //empty array
  const itemAdd = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = (event) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deletedItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id; //Every time it will be true
      });
    });
  };
  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add a Item"
            onChange={itemAdd}
          />
          <button onClick={listofItems}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deletedItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

//Deleted concept/Filter function
//index=[0,1,2,3]
//id =2
/* 
0 == !2 true  [0]
1 == !2 true   [0,1]
2 == !2 false   [0,1]  deleted this item
3 == !2 true    [0,1,3] 

*/
