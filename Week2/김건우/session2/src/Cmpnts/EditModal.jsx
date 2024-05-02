import React from 'react';
import '../Styles/EditModal.css'
function EditModal (props){

  function saveTitle(e){
    props.setObjEdit(prevObj => ({
      ...prevObj,
      title: e.target.value,
      // body: e.target.value
    }));
  }
  
  function saveBody(e){
    props.setObjEdit(prevObj => ({
      ...prevObj,
      body: e.target.value
    }));
  }
  

  function pressComplete(){
    if(props.objEdit.title === '' || props.objEdit.body === ''){
      alert('input required');
      return;
    }
    else{
      props.setObjCmt(prevCmts => {
        return prevCmts.map((cmt, idx) => {
          if (idx === (props.objEdit.id)) {
            return {
              ...cmt,
              body: props.objEdit.body,
              title: props.objEdit.title,
              uploadTime: new Date().toLocaleString(),
              isEdited: true
            };
            
          } else {
            return cmt;
          }
          
          });
        });
      }
      props.setObjEdit({title: '', body: '', id: null});
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
            <div className='edit-btns-container'>
              <button onClick={()=>{props.setShowModal(false)}}>닫기</button>
              <h5>Edit</h5>
              <button onClick={pressComplete}>완료</button>
            </div>
            <div className='edit-inputs-container'>
              <input type='text' placeholder= {props.objCmt[props.objEdit.id].title} onChange={(e)=>{saveTitle(e)}}/>
              <input type = 'text' placeholder= {props.objCmt[props.objEdit.id].body} onChange={(e)=>{saveBody(e)}}></input>
            </div>
          </div>
        </div>
      );
    }
  };
export default EditModal;


