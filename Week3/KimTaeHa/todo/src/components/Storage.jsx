import React from "react";
import { Link } from "react-router-dom";
import SavedToDo from "./SavedToDo";

const Storage = ({ list, checkedItems, checkedItemHandler }) => {
    return (
        <div className="App">
            <Link to="/">
                <button className="plusButton">Back</button>
            </Link>
            {list.map((item) => {
                return checkedItems.has(item.id) ? (
                    <SavedToDo
                        key={item.id}
                        item={item}
                        checkedItemHandler={checkedItemHandler}
                        checkedItems={checkedItems}
                    ></SavedToDo>
                ) : null;
            })}
        </div>
    );
};

export default Storage;
