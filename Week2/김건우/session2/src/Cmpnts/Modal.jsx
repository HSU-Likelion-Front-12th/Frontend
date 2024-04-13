import React from 'react';

function Modal (props){
    if (!props.show) {
      console.log(props.show);
      return null;
    }else{
      return (
        <div className="modal-background">
          <div className="modal" style={{ bottom: '0px', position: 'fixed' }}>
            <button onClick={()=>{props.onClose()}}>닫기</button>
            <div>
              <input type = 'text' value = 'id'></input>
              <input type = 'text' value = 'edit text'></input>
            </div>
          </div>
        </div>
      );
    }
  };
export default Modal;