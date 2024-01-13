import React from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';
import axios from 'axios';




const DeleteButton = (props) => {
    const { personId, successCallback } = props;


    const deletePersonfunc = (e) => {
        axios.delete('http://localhost:8000/api/persons/' + personId)
            .then(res=>{
                successCallback(); // => console.log(res.data.result);
                                   // il ne recoit just q l messg, en realité la logiq de supprssion est "deletePersonfunc"
            })
           .catch((err)=>console.log(err))
    }


    return (
        <button onClick={deletePersonfunc}>
            Delete
        </button>
    );
}




DeleteButton.propTypes = {};

DeleteButton.defaultProps = {};

export default DeleteButton;
