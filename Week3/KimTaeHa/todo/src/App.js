import React from "react";
import Main from "./components/Main";
import Storage from "./components/Storage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [list, setList] = useState([]);
    const [checkedItems, setCheckedItems] = useState(new Set());

    const checkedItemHandler = (id, isChecked) => {
        setCheckedItems((prevCheckedItems) => {
            const newCheckedItems = new Set(prevCheckedItems);
            if (isChecked) {
                newCheckedItems.add(id);
            } else {
                newCheckedItems.delete(id);
            }
            return newCheckedItems;
        });
    };

    function addList() {
        const newItem = {
            id: Date.now(),
            content: "",
        };

        setList((prevList) => [...prevList, newItem]);
    }

    function updateList(itemId, newContent) {
        setList((prevList) =>
            prevList.map((item) => {
                return item.id === itemId
                    ? { ...item, content: newContent }
                    : item;
            })
        );
    }

    function deleteList(itemId) {
        setList((prevList) => {
            return prevList.filter((item) => item.id !== itemId);
        });
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Main
                        list={list}
                        addList={addList}
                        checkedItemHandler={checkedItemHandler}
                        checkedItems={checkedItems}
                        updateList={updateList}
                        deleteList={deleteList}
                    ></Main>
                }
            ></Route>
            <Route
                path="/Storage"
                element={
                    <Storage
                        list={list}
                        checkedItemHandler={checkedItemHandler}
                        checkedItems={checkedItems}
                    ></Storage>
                }
            ></Route>
        </Routes>
    );
};

export default App;
