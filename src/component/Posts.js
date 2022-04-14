import { useEffect, useState} from 'react';
import React from 'react'
import Post from './Post'
import axios from 'axios';

const Posts = (props) => {
    const [posts, setPosts] = useState(
        [
            {id: 111, title: "Happiness", author: "John"},
            {id: 112, title: "MIU", author: "Dean"},
            {id: 113, title: "Enjoy Life", author: "Jasmine"}
        ]

    )

    const fetchPosts=() =>{
        axios.get('http://localhost:8080/api/v1/posts')
        .then(response => {
            setPosts(response.data);
        })
        .catch(error =>{
            console.log(error.message)
        })

     }

     useEffect(() => {
        fetchPosts()
    },
        [props.fetchFlag])

    const postList = posts.map(p =>{
        return <Post 
                id={p.id}
                title={p.title}
                author={p.author}
                key={p.id}
                clicked={()=> {props.clicked(p.id)}}/>

    });
  return postList;
}

export default Posts;