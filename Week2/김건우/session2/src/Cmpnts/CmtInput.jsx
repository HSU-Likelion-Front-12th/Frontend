import React from 'react';

function CmtInput(props){
    const [err, setErr] = React.useState(false);
    const errMsg = err ? (<div>input required</div>): null;
    return (
      <div className="publish">
          <input onChange = {(e)=>{
            props.setNewCmt(e.target.value);
          }}></input>
          <button onClick = {(e, i)=>{
            if(props.newCmt === ''){
              setErr(true);
              console.log(err);
            }
            else{
              setErr(false);
              props.setObjCmt(prevCmts => ({
                ...prevCmts,
                id: Math.random().toString(),
                title: "New Comment",
                body: props.newCmt,
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