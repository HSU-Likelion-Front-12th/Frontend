import React from 'react';
import '../Styles/Comment.css';

function Comment(props){

  function pushLike(i){
    let copy = [...props.likes];
    copy[i] = copy[i]+1;
    props.setLikes(copy);
  }

    return(
      <div>
      {
        props.objCmt.map((cmt, idx)=>{
          return (
            <div className='cmt-container' key={idx}>
              <div className = 'cmt'>
                <b id='cmt-title'>{idx+1}. {cmt.title}</b>
                <p id='cmt-body'>{cmt.body}</p>
                <p id='cmt-uploadTime'>{cmt.uploadTime}</p>
                <p id='cmt-isEdited' style={{color: cmt.isEdited ? 'red' : 'white'}}>edited</p> 
              </div>
              <div className='btn'>
                  <button onClick={()=>{pushLike(idx)}}>
                    👍<b>{props.likes[idx]}</b>
                    </button>
                  <button onClick={(e)=>{
                    props.setShowModal(true);
                    props.setObjEdit({
                      title: cmt.title,
                      body: cmt.body,
                      id:idx
                    })
                  }}>edit</button>
                  <button onClick={(e)=>{
                    props.setObjCmt(prevObj => prevObj.filter((_, index) => index !== idx));
                  }}>delete</button>
                </div>
            </div>
          )
        })
      }
      </div>
    )
}
export default Comment;