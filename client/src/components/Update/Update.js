import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Update.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";
import PersonForm from "../PersonForm/PersonForm";

const Update = (props) => {
  const { id } = useParams();
  const [personObj, setPersonObj] = useState({});
  const [loaded, setLoaded] = useState(false); // verifie quand si ls donnees st recupereés et disponibles
  const navigate = useNavigate();



  //get  data one specific person
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/persons/" + id)
      .then((res) => {
        setPersonObj(res.data.person);
        setLoaded(true); // données dispo on set en "true"
      })
      .catch((err) => console.log(err));
  }, []);



  // update one specific person
  const updatePerson = (persObj) => {
    axios
      .patch(
        "http://localhost:8000/api/persons/" + id, // PATCH request

        persObj // body request
      )
      .then((res) => {
       // console.log(res.data.person);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="Update">
      <h1>Update a Person</h1>
      {loaded === true ? 
        <PersonForm requestPostorPatch={updatePerson} initialFirstName={personObj.firstName} initialLastName={personObj.lastName} />
       : null}
      <DeleteButton personId={personObj._id} successCallback={() => navigate("/")} />
      {/* le 'DeleteButton' just pr pvoir aussi supprimer une personn specifiq sur la page update */}

      <Link to="/">
        Return Home Page!
      </Link>
    </div>
  );
};

Update.propTypes = {};

Update.defaultProps = {};

export default Update;
