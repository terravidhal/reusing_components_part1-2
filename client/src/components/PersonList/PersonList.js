import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PersonList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';





const PersonList =  (props) => {
  
  const { allPeople, deletePerson } = props;


  return (
    
  <div className="PersonList">
    <h2>All persons:</h2>
    { 
       allPeople.map((elt, index)=> {
        return (
          <div key={index} className='one_person'>
            <Link to={`/people/${elt._id}`}> 
              {elt.firstName} Page details! 
            </Link>
              |
            <Link to={"/people/edit/" + elt._id}>
              Edit
            </Link>
              |
            {/* <button onClick={()=>{deletePerson(elt._id)}}>Delete</button> */}
            <DeleteButton personId={elt._id} successCallback={()=>deletePerson(elt._id)}/>
            {/* il on creer un composant pr l button ou de le laisser simplment coe ce q j'ai commenté, j n trouv pas l'importance d ça*/}
          </div>
        );
      }) 
    } 
  </div>
  );
};




PersonList.propTypes = {};

PersonList.defaultProps = {};

export default PersonList;
