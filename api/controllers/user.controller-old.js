const connection = require("../connection");
const { sign } = require("jsonwebtoken");

function UserSignUp(req, res) {
    const { email, password, full_name, phone, gender, address, state, city } = req.body;
    let checkUserExists = `SELECT * FROM user_signup WHERE email = '${email}'`;

    connection.query(checkUserExists, (error, record) => {
        if (error) {
            return res.json({ error: error.message, message: '' });
        }
        if (record.length > 0) {
            return res.json({ error: 'User already exists', message: '' });
        }

        let insertUser = `INSERT INTO user_signup(email, password, full_name, phone, gender, address, state, city) 
            VALUES ('${email}', '${password}', '${full_name}', '${phone}', '${gender}', '${address}', '${state}', '${city}')`;

        console.log(insertUser);

        connection.query(insertUser, (error) => {
            if (error) {
                return res.json({ error: error.message, message: '' });
            }
            res.json({ error: '', message: 'User Signed up' });
        });
    });
}

function UserLogin(req, res) {
    let { email, password } = req.body;

    if (email == "" || password == "") {
        return res.json({ error: 'All fields are required', message: '' });
    }

    let checkUser = `SELECT * FROM user_signup WHERE email='${email}' AND password='${password}'`;

    connection.query(checkUser, (error, record) => {
        if (error) {
            return res.json({ error: error.message, message: '' });
        }
        if (record.length == 0) {
            return res.json({ error: "Invalid Email or Password", message: '' });
        }

        let payload = {
            id: record[0].id,
            email: record[0].email,
        };
        let secret = "abc@123";
        let expiry = 60 * 60 * 60; // 1 minute

        let token = sign(payload, secret, { expiresIn: expiry });
        res.json({ error: '', message: 'Login Success', token: token });
    });
}

module.exports = {
    UserSignUp,
    UserLogin
};
