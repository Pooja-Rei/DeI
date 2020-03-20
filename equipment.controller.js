// const db = require("../models/index.js");
// const Equipment = db.equipment;
// const Op = db.Sequelize.Op;
const pool = require("../config/db.config.js").db;

// Create and Save a new Equipment
exports.create = (req, res) => {

    const { equipment_id, name, manufacture_date, display_name, product_family } = req.body;

    pool.query('INSERT INTO equipments (equipment_id,name,manufacture_date,display_name,product_family) VALUES ($1, $2,$3,$4,$5)', [equipment_id, name, manufacture_date, display_name, product_family], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Equipment added: ${results}`)
    })
};

//Find all equipments...
exports.findAll = (request, response) => {

    pool.query('SELECT * FROM equipments', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Find a single Equipment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM equipments WHERE equipment_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    });
};

// Update a Equipment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const { name, product_family } = req.body

    pool.query(
        'UPDATE equipments SET name = $1, product_family = $2 WHERE equipment_id = $3',
        [name, product_family, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Equipment modified with ID: ${id}`)
        }
    )
};

// Delete a Equipment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM equipments WHERE equipment_id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Equipment deleted with ID: ${id}`);
    })
};

