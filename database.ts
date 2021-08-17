const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Neelesh@22',
  port: 5432,
})

const getUsers = (req, res) => {
  console.log("req",req);
    pool.query('SELECT * FROM userdata', (error, results) => {
      if (error) {
        throw error
      }
       console.log("results",results)
      res.status(200).json(results.rows)

    })
  }


  const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM userdata WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }


  const createUser = (req, res) => {
    const {id,firstName,middleName,lastName,email,phoneNumber,role,address } = req.body
    console.log("req.body",req.body);
    pool.query('INSERT INTO userdata (id,firstname,middlename,lastname,email,phonenumber,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
     [id,firstName,middleName,lastName,email,phoneNumber,role,address], (error, results) => {
      if (error) {
        res.status(404).send();
      }
      else{res.status(201).send(`User added with ID: ${id}`)}
    
    })
  }


  const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstName,middleName,lastName,email,phoneNumber,role,address } = req.body
  
    pool.query(
      'UPDATE userdata SET firstname = $1,middlename=$2,lastname=$3,email = $4,phonenumber=$5,role=$6,address=$7 WHERE id = $8',
      [firstName,middleName,lastName,email,phoneNumber,role,address, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('DELETE FROM userdata WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
    
  }