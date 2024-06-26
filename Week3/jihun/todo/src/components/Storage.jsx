import Success from "./Success";



function Storage({ storeList, home }) {


    return (

        <div className="App">
            <div className="buttonBox">
                <p>보관함</p>
                <p onClick={home}>홈</p>
            </div>
            {storeList.map((item, idx) => {
                return (
                    <Success key={idx} userInput={item.content}>
                    </Success>);
            })}
        </div>

    )
}

export default Storage;
