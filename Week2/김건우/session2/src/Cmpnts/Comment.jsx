import React from 'react';
import '../Styles/Comment.css';

function Comment(props){
    return(
      <div>
      {
        props.objCmt.map((cmt, idx)=>{
          return (
            <div className='cmt-container' key={idx}>
              <div className = 'cmts'>
                <b>{cmt.id}.{cmt.title}</b>
                <p>{cmt.body}</p>
              </div>
              <div className='btns'>
                  <button onClick={()=>{props.pushLike(idx)}}>
                    👍<b>{props.likes[idx]}</b>
                    </button>
                  <button onClick={(e)=>{
                    props.setShowModal(true);
                    props.setObjEdit((prevObj) => ({
                      ...prevObj,
                      id: idx,
                    }));
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