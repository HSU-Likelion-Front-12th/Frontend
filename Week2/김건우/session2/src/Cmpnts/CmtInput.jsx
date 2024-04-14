import React from 'react';

function CmtInput(props){
    const [err, setErr] = React.useState(false);
    const errMsg = err ? (<div>input required</div>): null;
    return (
      <div className="publish">
          <input onChange = {(e)=>{
            props.setNewCmt(e.target.value);
          }}></input>
          <button onClick = {()=>{
            if(props.newCmt === ''){
              setErr(true);
              console.log(err);
            }
            else{
              setErr(false);
              props.setObjCmt(props.objCmt.map((prevObj) => {
                return {
                  ...prevObj,
                  title: props.newCmt
                };
              }));
              props.setLikes([...props.likes, 0]);
              props.setNewCmt('');
            }
          }}>등록</button>
          {errMsg}
          
        </div>
    )
}
export default CmtInput;