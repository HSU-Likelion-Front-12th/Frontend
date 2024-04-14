import React from 'react';
import '../Styles/CmtInput.css'

function CmtInput(props){
    const [err, setErr] = React.useState(false);
    const errMsg = err ? (<div>input required</div>): null;

    function inputTitle(e){
      props.setObjNewCmt((prevObj)=>({...prevObj, title: e.target.value}));
      console.log(props.objNewCmt);
    }

    function inputBody(e){
      props.setObjNewCmt((prevObj)=>({...prevObj, body: e.target.value}));
      console.log(props.objNewCmt);
    }

    function clickSubmit(){
      if(props.objNewCmt.title === '' || props.objNewCmt.body === ''){
        setErr(true);
        console.log(err);
      }
      else{
        setErr(false);
        props.setObjCmt([
          {title: props.objNewCmt.title, body: props.objNewCmt.body},
          ...props.objCmt
          
        ])
        props.setLikes([...props.likes, 0]);
        props.setObjNewCmt({title:'', body: ''});
      }
    }
    
    return (
      <div className="publish">
          <input id='szTitleInput' placeholder='title' value={props.objNewCmt.title} onChange={inputTitle}></input>
          <input id='szBodyInput' placeholder='content' value={props.objNewCmt.body} onChange={inputBody}></input>
          <button onClick = {clickSubmit}>등록</button>
          {errMsg}
      </div>
    )
}
export default CmtInput;