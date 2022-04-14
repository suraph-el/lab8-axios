import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.css';

const NewPost = (props) => {
    const [postState, setPostState] = useState(
        {
            title: '',
            content: '',
            author: 'Dean',
            confirmation: ""
        });

    const onChange = (events) => {
        const updatedPost = { ...postState, [events.target.name]: events.target.value };
        setPostState(updatedPost);
    }

    const addPost = () => {
        const headers = { "Access-Control-Allow-Origin": "*" };
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/posts',
            data: { ...this.state },
            headers: headers
        })
            .then(response => {
                this.setState({ confirmation: "Post is successfuly added" })
            }).catch(err => console.log(err));
    }
    return (
        <div className="NewPost">
            <h1>Add a Post</h1>

            <label>Title</label>
            <input type="text" title={'title'} onChange={onChange} value={postState.title} />

            <label>Content</label>
            <textarea rows="4" content={'content'} onChange={onChange} value={postState.content} />
            <label>Author</label>
            <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}/>  
                
         
            <button onClick={addPost}>Add Post</button> <label className="confirmation">{this.state.confirmation}</label>
        </div>
    );

}

export default NewPost;