import React from "react";

export default function Storage({ items }) {
  return (
    <div className="storage">
      <h1>보관함</h1>
      {items.map((item) => (
        <div key={item.id}>
          <input type="checkbox" checked readOnly />
          <span>{item.content}</span>
        </div>
      ))}
    </div>
  );
}
