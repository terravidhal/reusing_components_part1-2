const Person = require('../models/person.model');
 


module.exports.findAllPersons = (req, res) => {
    Person.find()
        .then((allDaPersons) => {
            res.json({ persons: allDaPersons })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSinglePerson = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then(oneSinglePerson => {
            res.json({ person: oneSinglePerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

module.exports.createNewPerson = (req, res) => {
    Person.create(req.body)
        .then(newlyCreatedPerson => {
            res.json({ person: newlyCreatedPerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

module.exports.updateExistingPerson = (req, res) => {
    Person.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true } /* Le troisième paramètre transmis à 
                                            findOneAndUpdateest un objet « options »
                                             utilisé pour définir différentes 
                                             fonctionnalités. Dans ce cas, nous 
                                             passons new:true. Cela indique que 
                                             nous souhaitons que le document 
                                             renvoyé contienne le document nouvellement 
                                             mis à jour au lieu de l'action mongoose 
                                             par défaut consistant à renvoyer le 
                                             document original (avant la mise à jour). 
                                            */
    )
        .then(updatedPerson => {
            res.json({ person: updatedPerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
        
module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


   