import React from 'react';
import '../Styles/EditModal.css'
function EditModal (props){

  function saveTitle(e){
    props.setObjEdit(prevObj => ({
      ...prevObj,
      title: e.target.value,
      body: e.target.value
    }));
  }
  
  function saveBody(e){
    props.setObjEdit(prevObj => ({
      ...prevObj,
      body: e.target.value
    }));
  }
  

  function pressComplete(){
    props.setObjCmt(prevCmts => {
      return prevCmts.map(cmt => {
        if (cmt.id === (props.objEdit.id + 1)) {
          return {
            ...cmt,
            body: props.objEdit.body,
            title: props.objEdit.title
          };
        } else {
          return cmt;
        }
      });
    });
    props.setShowModal(false);
    }

    //ui
    if (props.showModal === false) {
      return null;
    }
    else{
      return (
        <div className="modal-background">
          <div className="modal">
            <button onClick={()=>{props.setShowModal(false)}}>닫기</button>
            <button onClick={pressComplete}>완료</button>
            <div className='edit-input-container'>
              <input type='text' placeholder= {props.objCmt[props.objEdit.id].title} onChange={(e)=>{saveTitle(e)}}/>
              <input type = 'text' placeholder= {props.objCmt[props.objEdit.id].body} onChange={(e)=>{saveBody(e)}}></input>
            </div>
          </div>
        </div>
      );
    }
  };
export default EditModal;


