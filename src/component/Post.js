import React from 'react'
import './Post.css';

const Post = (props) => {
  return (
    <div className='Post' onClick={props.Clicked}>
        <span>Id:</span>{props.id}<br/>
        <span>Title:</span>{props.title}<br/>
        <span>Author:</span>{props.author}<br/>
    </div>
  )
}

export default Post