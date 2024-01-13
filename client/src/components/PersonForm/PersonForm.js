import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PersonForm.css';
import axios from 'axios';




const PersonForm = (props) => {
    
    const { initialFirstName, initialLastName, requestPostorPatch } = props;
   const [firstName, setFirstName] = useState(initialFirstName); 
   const [lastName, setLastName] = useState(initialLastName);

 
   const onSubmitHandler =  (e) => {
        
       e.preventDefault();
       requestPostorPatch({ firstName, lastName });
        //reset form
         setFirstName(" ");
         setLastName(" "); 
   }
   
   return (
      <div className="PersonForm">
         <h2 class="text-3xl font-bold underline text-clifford">
    Form infos!
  </h2>
        <form id='formPers' onSubmit={onSubmitHandler}>
           <div className="field">
               <label>First Name</label><br/>
               <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
           </div>
           <div className="field">
               <label>Last Name</label><br/>
               <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
           </div>
           <input value="submit" type="submit"/>
        </form>
      </div>
   )
};

PersonForm.propTypes = {};

PersonForm.defaultProps = {};

export default PersonForm;
