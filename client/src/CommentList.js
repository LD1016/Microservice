// import React, {useState, useEffect} from 'react';
import React from 'react';
// import axios from 'axios';

// export default ({postId}) => {
    // const [comments, setComments] = useState([]);

    // const fetchComments = async () => {
    //     const result = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    //     // console.log(result);
    //     setComments(result.data);
    // }

    // useEffect(() => {
    //     fetchComments();
    // }, []);

export default ({comments}) => {

    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = "This comment is awaiting moderation";
        }

        if (comment.status === 'rejected') {
            content = "This comment has been rejected";
        }
        return <li key={comment.commentId}>
            {/* {comment.content} */}
            {content}
        </li>
    });

    return <ul>
        {renderedComments}
    </ul>
};