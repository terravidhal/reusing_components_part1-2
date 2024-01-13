const PersonController = require('../controllers/person.controller');
 
module.exports = app => {
    app.get('/api/persons', PersonController.findAllPersons);  
    app.get('/api/persons/:id', PersonController.findOneSinglePerson);
    app.patch('/api/persons/:id', PersonController.updateExistingPerson); 
    app.post('/api/persons', PersonController.createNewPerson);
    app.delete('/api/persons/:id', PersonController.deleteAnExistingPerson);
}

