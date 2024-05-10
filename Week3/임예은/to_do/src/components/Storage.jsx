import MoveText from "./MoveText";

function Storage({ storeList, home }) {


    return (

        <div className="App">
            <div className="buttonBox">
                <h5>보관함</h5>
                <h5 onClick={home}>메모장으로 돌아가기</h5>
            </div>
            {storeList.map((item) => {
                return (
                    <MoveText userInput={item.content}>
                    </MoveText>);
            })}
        </div>

    )
}

export default Storage;

