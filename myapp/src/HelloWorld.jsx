import React, {useState, useEffect} from 'react';
import axios from 'axios';

function HelloWorld(){
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/helloWorld')
            .then(response => {
                setMessage(response.data.message);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return(
        <p>{message}</p>
    );
}

export default HelloWorld;