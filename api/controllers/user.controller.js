const connection = require("../connection");
const {sign} = require("jsonwebtoken");

function UserSignUp(req, res) {
    const {email, password, full_name, phone, gender, address, state, city} = req.body;
    let checkUserExists = `SELECT * FROM user_signup WHERE email = '${email}'`;

    connection.query(checkUserExists, (error, record) => {
        if (error) {
            return res.json({error: error.message, message: ''});
        }
        if (record.length > 0) {
            return res.json({error: 'User already exists', message: ''});
        }

        let insertUser = `INSERT INTO user_signup(email, password, full_name, phone, gender, address, state, city) 
            VALUES ('${email}', '${password}', '${full_name}', '${phone}', '${gender}', '${address}', '${state}', '${city}')`;

        console.log(insertUser);

        connection.query(insertUser, (error) => {
            if (error) {
                return res.json({error: error.message, message: ''});
            }
            res.json({error: '', message: 'User Signed up'});
        });
    });
}

function UserLogin(req, res) {
    let {email, password} = req.body;

    if (email === "" || password === "") {
        return res.json({error: 'All fields are required', message: ''});
    }

    let checkUser = `SELECT * FROM user_signup WHERE email='${email}' AND password='${password}'`;
    connection.query(checkUser, (error, record) => {
        if (error) {
            return res.json({error: error.message, message: ''});
        }
        if (record.length === 0) {
            return res.json({error: "Invalid Email or Password", message: ''});
        }

        let payload = {
            id: record[0].id,
            email: record[0].email,
        };
        let secret = "abc@123";
        let expiry = 60 * 60 * 60; // 1 minute

        let token = sign(payload, secret, {expiresIn: expiry});
        res.json({error: '', message: 'Login Success', token: token});
    });
}

function AdoptionForm(req, res) {
    const {id} = req["userInfo"];
    const {
        firstname, lastname, age, address1, address2, state, city, postal,
        phone1, phone2, email, livingIn, fencedYard, anotherPet, veterinarian,
        hours_spends_by_pet_alone, home_activity_level, household_have_allergies_to_animals,
        family_agreeable_to_adopt, fullName1, email1, phone3, Address3,
        fullName2, email2, phone4, Address4, pet_id
    } = req.body;

    const insertCommand = `Insert Into adoption_form( firstname, lastname, age, address1, address2, state, city, postal,
        phone1, phone2, email, livingIn, fencedYard, anotherPet, veterinarian,
        hours_spends_by_pet_alone, home_activity_level, household_have_allergies_to_animals,
        family_agreeable_to_adopt, fullName1, email1, phone3, Address3,
        fullName2, email2, phone4, Address4, user_id, pet_id) 
        values('${firstname}', '${lastname}', ${age}, 
        '${address1}','${address2}', '${state}', '${city}', '${postal}', 
        '${phone1}','${phone2}', '${email}', '${livingIn}', '${fencedYard}', '${anotherPet}', '${veterinarian}', 
        '${hours_spends_by_pet_alone}', '${home_activity_level}','${household_have_allergies_to_animals}', 
        '${family_agreeable_to_adopt}','${fullName1}','${email1}','${phone3}','${Address3}',
        '${fullName2}','${email2}','${phone4}','${Address4}', ${id}, ${pet_id})`;
    connection.query(insertCommand, (error) => {
        if (error) {
            return res.json({error: error.message});
        }

        /* update pet status to adopted */
        let updatePet = `Update pets Set isAvailable='Adopted' Where id=${pet_id}`;
        connection.query(updatePet, (error) => {
            if (error) {
                return res.json({error: error.message});
            }

            res.json({error: '', message: 'Form submitted successfully'});
        });
    });
}

function MyAdoptions(req, res) {
    const {id} = req["userInfo"];
    let readAdoptions = `SELECT adoption_form.*, pets.id AS petId, pets.name AS petName, pets.color, pets.gender, pets.weight, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly, pets.photo, subcategory.name AS subCatName FROM adoption_form Inner Join pets On adoption_form.pet_id=pets.id Inner Join subcategory On pets.subcategory_id=subcategory.subcategory_id Where adoption_form.user_id=${id}`;
    connection.query(readAdoptions, (error, records) => {
        if (error) {
            return res.json({error: error.message});
        }
        res.json({error: '', records: records});
    });
}

function VerifyToken(req, res) {
    // console.log(req["userInfo"]);
    res.json({user: req["userInfo"]});
}

function ContactUs(req, res) {
    const {name, email, website, message} = req.body;

    let insertUser = `INSERT INTO contacts(name, email, website, message)VALUES('${name}', '${email}', '${website}', '${message}')`
    console.log(insertUser)

    connection.query(insertUser, (error) => {
        if (error) {
            return res.json({error: error.message, message: ''});
        }
        res.json({error: '', message: 'Message sent'});
    });
}

module.exports = {
    ContactUs,
    VerifyToken,
    MyAdoptions,
    AdoptionForm,
    UserSignUp,
    UserLogin
};
