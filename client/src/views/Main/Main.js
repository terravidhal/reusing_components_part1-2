import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import axios from "axios";
import PersonForm from "../../components/PersonForm/PersonForm";
import PersonList from "../../components/PersonList/PersonList";




const Main = () => {
  const [allPeople, setAllPeople] = useState([]);



  // get all persons
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/persons")
      .then((res) => setAllPeople(res.data.persons))
      .catch((err) => console.log(err));
  }, [allPeople]); // chaq fois q l tableau(people) est mis à jr "useEffect" s'exécute



  // delete One specific person
  const deletePerson = (personId) => {
    axios
      .delete("http://localhost:8000/api/persons/" + personId)
      .then((res) => {
        console.log(res.data.result);
        //setAllPeople(allPeople.filter(person=> person._id !== personId)); // pas necessaire
      })
      .catch((err) => console.log(err));
  };


  // create one person
  const createPerson = (persObj) => {
    axios
      .post(
        "http://localhost:8000/api/persons",
        persObj // body request
      )
      .then((res) => {
        console.log(res.data.person);
       // setAllPeople([...allPeople, res.data.person]); // pas necessaire
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Main">
      <PersonForm
        requestPostorPatch={createPerson}
        initialFirstName=""
        initialLastName=""
      />

      <PersonList allPeople={allPeople} deletePerson={deletePerson} />
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
