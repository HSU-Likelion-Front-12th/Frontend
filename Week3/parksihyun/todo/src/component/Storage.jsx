    import React from "react";
    import TodoButton from "./TodoButton";

    const Storage = ({ list, storageItems }) => {
        
        return (
            <div className="storage">
                <h2>보관함</h2>
                {storageItems.map((item) => {
                    return <TodoButton key={item.id} item={item} isChecked={true} />;
                })}
            </div>
        )
    }

    export default Storage;