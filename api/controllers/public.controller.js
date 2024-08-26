const connection = require("../connection");
// const {sign} = require('jsonwebtoken');

function ReadPets(req, res) {
    let readCommand = `Select pets.*, subcategory.name AS subCatName from pets Inner Join subcategory On pets.subcategory_id=subcategory.subcategory_id Where pets.isAvailable='Available' Order by id Desc Limit 4`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function ReadPetsAll(req, res) {
    let readCommand = `Select pets.*, subcategory.name AS subCatName from pets Inner Join subcategory On pets.subcategory_id=subcategory.subcategory_id Where pets.isAvailable='Available' Order by id Desc`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    });
}

function CheckPetStatus(req, res) {
    const {pet_id} = req.params;
    let readCommand = `SELECT * FROM pets where id=${pet_id}`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    });
}

module.exports = {
    CheckPetStatus,
    ReadPetsAll,
    ReadPets
}