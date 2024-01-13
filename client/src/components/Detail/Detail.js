import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Detail.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';




const Detail = (props) => {

  const [Oneperson, setPerson] = useState({})
  const {id} = useParams(); 
 

  useEffect(() => {
      axios.get("http://localhost:8000/api/persons/" + id)
          .then( res => {
              //console.log("res.data++++++++++", res.data.person);
              setPerson(res.data.person);
          })
          .catch( err => console.log(err) );
  }, [id]); // pas obligé, car lorsq la nvelle page s'affich elle s'actualise par defaut

  return (
      <div className="Detail">
        <h1>Page details :</h1>
        <div className="fields">
            <p><span className='infos'>First Name:</span> {Oneperson.firstName}</p>
            <p><span className='infos'>Last Name:</span> {Oneperson.lastName}</p>
        </div>
        <Link to="/"> 
              Return Home Page! 
        </Link>
      </div>
  );
}



Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
