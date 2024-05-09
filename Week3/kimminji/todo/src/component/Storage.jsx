import React from "react";
import ToDoButton from "./ToDoButton";

export default function Storage({ list, storage })  {
  return (
    <div className="storage">
      <h2>보관함</h2>
        {storage.map((item) => {
          return (
            <div className="toDoList">
              <input type="checkbox" className="select" checked='true'></input>
              <input type="text" className="field" placeholder="내용을 입력해주세요" value={item.content} ></input>
            </div>
          )
                    
            })}
            </div>



        )
    }
