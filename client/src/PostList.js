import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';


export default () => {
    const [posts, setPosts] = useState({});

    
    const fetchPosts = async () => {
        // const result = await axios.get('http://localhost:4000/posts');
        const result = await axios.get('http://localhost:4002/posts');
        console.log(result.data);
        
        setPosts(result.data);
    }



    useEffect(()=> {
        fetchPosts();
    }, []);

    // console.log(posts);
    // Object.values return back an array of all the values inside posts
    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div 
                className="card" 
                style={{width: '30%', marginBottom:'20px'}} 
                key={post.id}
            >
                <div className="card body">
                    <h3>{post.title}</h3>
                    {/* <CommentList postId={post.id}/> */}
                    <CommentList comments={post.comments}/>
                    <CommentCreate postId={post.id}/>
                </div>

            </div>
        )
    })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}