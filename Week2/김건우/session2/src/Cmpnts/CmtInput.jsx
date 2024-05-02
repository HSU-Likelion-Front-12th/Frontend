import React from 'react';
import '../Styles/CmtInput.css'

function CmtInput(props){
    const [err, setErr] = React.useState(false);
    const errMsg = err ? (<div>input required</div>): null;

    function inputTitle(e){
      props.setObjNewCmt((prevObj)=>({...prevObj, title: e.target.value}));
    }

    function inputBody(e){
      props.setObjNewCmt((prevObj)=>({...prevObj, body: e.target.value}));
    }

    function clickSubmit(){
      if(props.objNewCmt.title === '' || props.objNewCmt.body === ''){
        setErr(true);
        console.log(err);
      }
      else{
        setErr(false);
        const currentDate = new Date();
        const dateString = currentDate.toLocaleString();
        console.log(dateString);
        props.setObjCmt([
          {
            title: props.objNewCmt.title,
            body: props.objNewCmt.body,
            uploadTime: dateString
          },
          ...props.objCmt
        ])
        props.setLikes([...props.likes, 0]);
        props.setObjNewCmt({title:'', body: ''});
        console.log('uploadTime is ' + props.objCmt[0].uploadTime);
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