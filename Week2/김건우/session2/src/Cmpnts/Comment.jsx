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
                <b>{cmt.id}.{cmt.title}</b>
                <p>{cmt.body}</p>
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
                      id: cmt.id
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