

export default function Success({ userInput }) {
    return (
        <div className="toDoList">
            <input type='checkbox' className="select" checked></input>
            <input type='text' className="field" placeholder="내용을 입력해주세요" value={userInput}></input>
        </div>
    )
}