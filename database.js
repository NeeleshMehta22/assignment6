var Pool = require('pg').Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Neelesh@22',
    port: 5432
});
var getUsers = function (req, res) {
    console.log("req", req);
    pool.query('SELECT * FROM userdata', function (error, results) {
        if (error) {
            throw error;
        }
        console.log("results", results);
        res.status(200).json(results.rows);
    });
};
var getUserById = function (req, res) {
    var id = parseInt(req.params.id);
    pool.query('SELECT * FROM userdata WHERE id = $1', [id], function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};
var createUser = function (req, res) {
    var _a = req.body, id = _a.id, firstName = _a.firstName, middleName = _a.middleName, lastName = _a.lastName, email = _a.email, phoneNumber = _a.phoneNumber, role = _a.role, address = _a.address;
    console.log("req.body", req.body);
    pool.query('INSERT INTO userdata (id,firstname,middlename,lastname,email,phonenumber,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [id, firstName, middleName, lastName, email, phoneNumber, role, address], function (error, results) {
        if (error) {
            res.status(404).send();
        }
        else {
            res.status(201).send("User added with ID: " + id);
        }
    });
};
var updateUser = function (req, res) {
    var id = parseInt(req.params.id);
    var _a = req.body, firstName = _a.firstName, middleName = _a.middleName, lastName = _a.lastName, email = _a.email, phoneNumber = _a.phoneNumber, role = _a.role, address = _a.address;
    pool.query('UPDATE userdata SET firstname = $1,middlename=$2,lastname=$3,email = $4,phonenumber=$5,role=$6,address=$7 WHERE id = $8', [firstName, middleName, lastName, email, phoneNumber, role, address, id], function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).send("User modified with ID: " + id);
    });
};
var deleteUser = function (req, res) {
    var id = parseInt(req.params.id);
    pool.query('DELETE FROM userdata WHERE id = $1', [id], function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).send("User deleted with ID: " + id);
    });
};
module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};
