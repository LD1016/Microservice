import React, {useState} from 'react';
import axios from 'axios';


export default () => {
    const [title, setTitle] = useState('');
    // console.log(title);

    const onFormSubmit = async (event) => {
        event.preventDefault();

        // await axios.post('http://localhost:4000/posts', {
        // await axios.post('http://posts.com/posts', {
        // Have to change the path because Ingress Controller need to know unique route paths
        await axios.post('http://posts.com/posts/create', {
            title
        });
        setTitle('');

    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}