// Storage.jsx
import React from "react";
import ToDoButton from "./ToDoButton";

export default function Storage({ archiveItems }) {
  return (
    <div>
      {archiveItems.map((item) => {
        return <ToDoButton key={item.id} item={item} />;
      })}
    </div>
  );
}
