const connection = require("../connection")
const {sign} = require('jsonwebtoken')

function AddCategory(req, res) {
    console.log(req.body)
    const {CategoryName} = req.body
    const insertCommand = `Insert Into category(CategoryName) values('${CategoryName}')`
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Category Added'})
        }
    })
}

function ReadCategory(req, res) {
    let readCommand = `Select * from category`
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function DeleteCategory(req, res) {
    let {id} = req.params
    let deleteCommand = `Delete from category where id = ${id}`
    console.log(id)
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Category Deleted'})
        }
    })
}

// function AdminLogin(req, res) {
// console.log(req.body)
// const {Email, Password} = req.body;
// const insertAdmin =  Insert Into admin(Email, Password, FullName) values('${Email}', '${Password}', '${FullName}');
// connection.query(insertAdmin, (error) => {
//     if(error) {
//         res.json({error: error.message, message: ''})
//     }
//     else {
//         res.json({error: '', message: 'Login Successful'})
//     }
// })
// }

function AdminLogin(req, res) {
    let {Email, Password} = req.body

    if (Email == "" || Password == "") {
        res.json({error: 'All fields are required', message: ''})
    } else {
        // authenticate user
        let checkUser = `SELECT * FROM admin WHERE email='${Email}' and password='${Password}'`
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                if (record.length == 0) {
                    // []
                    res.json({error: "Invalid Email or Password", message: ''})
                } else {
                    // generate JWT
                    let payload = {
                        id: record[0].id,
                        email: record[0].email,
                    }
                    let secret = "abc@123"
                    let expiry = 60 * 60 * 60 // 1 minute

                    // create token
                    let token = sign(payload, secret, {expiresIn: expiry})
                    // console.log(token)

                    // res.cookie('customerToken', token, {
                    //     expires: new Date(Date.now() + expiry * 1000) // 1 minute
                    // })

                    res.json({error: '', message: 'Login Success', token: token})
                }
            }
        })
    }
}

function AdminChangePassword(req, res) {
    console.log(req.adminInfo)
    console.log(req.body)

    try {
        let {Password, newPassword, confirmPassword} = req.body;
        let {id} = req['adminInfo'];

        let checkOldPassword = `select * from admin where id=${id}`
        connection.query(checkOldPassword, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ''})
            } else {
                if (record[0].password != Password) {
                    res.json({error: 'Invalid Current Password.', message: ''})
                } else {
                    if (newPassword != confirmPassword) {
                        res.json({error: 'new password and confirm password must be same', message: ''})
                    } else {
                        let updateCommand = `update admin set password='${newPassword}' where id=${id}`
                        connection.query(updateCommand, (error) => {
                            if (error) {
                                res.json({error: error.message, message: ''})
                            } else {
                                res.json({error: '', message: 'Password Updated Successfully.'})
                            }
                        })
                    }
                }
            }
        })
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function SubAddCategory(req, res) {
    // console.log(req.body)
    const {Category, CategoryName} = req.body;
    const insertCommand = `Insert Into subcategory(name,id) values('${CategoryName}', '${Category}')`
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'SubCategory Added'})
        }
    });
}

function ReadSubCategory(req, res) {
    let readCommand = `Select * from subcategory`
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function DeleteSubCategory(req, res) {
    let {subcategory_id} = req.params;

    let deleteCommand = `Delete from subcategory where subcategory_id= ${subcategory_id}`;
    // console.log(subcategory_id);
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'SubCategory Deleted'})
        }
    })
}


//add pet function
function AddPets(req, res) {
    // console.log(req.body)
    const {
        name, color, gender, weight, vaccinated, friendly_to_other_pets, children_friendly, subcategory
    } = req.body

    const insertCommand = `Insert Into pets(name, color,gender, weight, vaccinated, friendly_to_other_pets, children_friendly, subcategory_id) 
values('${name}', '${color}', '${gender}', '${weight}', '${vaccinated}', '${friendly_to_other_pets}', '${children_friendly}', ${subcategory})`
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Pet Added'})
        }
    });
}


function ReadPets(req, res) {
    let readCommand = `Select * from pets Order by id Desc;`
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function DeletePets(req, res) {
    let {id} = req.params
    let deleteCommand = `Delete from pets where id = ${id}`
    console.log(id)
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            res.json({error: '', message: 'Pet Deleted'})
        }
    })
}


// async function DeleteSubCategory(req, res) {
//     let { subcategory_id } = req.params; // Extract subcategory_id from request parameters
//     let deleteCommand = `DELETE FROM subcategory WHERE id = ${subcategory_id}`;
//     console.log(subcategory_id);
//
//     connection.query(deleteCommand, (error) => {
//         if (error) {
//             res.json({ error: error.message, message: '' });
//         } else {
//             res.json({ error: '', message: 'Subcategory Deleted' });
//         }
//     });
// }


function SubCategoryByCategory(req, res) {
    let {cat_id} = req.params;
    let subCat = `SELECT * FROM subcategory WHERE id=${cat_id}`;
    connection.query(subCat, (error, records) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            res.json({error: '', message: 'Subcategory Fetched', records: records});
        }
    })
}

function UploadPhoto(req, res) {
    // console.log(req.body);
    // console.log(req.files);
    try {
        let {pId} = req.body
        let {photo} = req.files

        let serverPath = `public/images/pets/${photo.name}`;
        let dbPath = `/images/pets/${photo.name}`;
        photo.mv(serverPath, (error) => {
            if (error) {
                res.json({error: error.message})
            } else {
                let updateFilePath = `Update pets Set photo='${dbPath}' Where id=${pId}`;
                connection.query(updateFilePath, (error) => {
                    if (error) {
                        res.json({error: error.message})
                    } else {
                        res.json({error: '', message: 'Photo uploaded.'})
                    }
                })
            }
        });
    } catch (e) {
        res.json({error: e.message})
    }
}

function GetPendingAdoptionRequests(req, res) {
    let readCommand = `SELECT adoption_form.*, pets.id AS petId, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly FROM adoption_form Inner Join pets On adoption_form.pet_id=pets.id WHERE adoption_form.adoption_status='Pending'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetApprovedAdoptionRequests(req, res) {
    let readCommand = `SELECT adoption_form.*, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly FROM adoption_form Inner Join pets On adoption_form.pet_id=pets.id WHERE adoption_form.adoption_status='Approved'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetRejectedAdoptionRequests(req, res) {
    let readCommand = `SELECT adoption_form.*, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly FROM adoption_form Inner Join pets On adoption_form.pet_id=pets.id WHERE adoption_form.adoption_status='Rejected'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function ApproveRejectAdoptionRequests(req, res) {
    try {
        // console.log(req.params)
        let {id, petId, status} = req.params;

        let updateStatus = `Update adoption_form Set adoption_status='${status}' Where id=${id}`;
        // console.log(readCommand);
        connection.query(updateStatus, (error) => {
            if (error) {
                res.json({error: error.message});
            } else {
                if (status === "Rejected") {
                    let updatePetStatus = `Update pets Set isAvailable='Available' Where id=${petId}`;
                    connection.query(updatePetStatus, (error) => {
                        if (error) {
                            return res.json({error: error.message});
                        }
                        res.json({error: "", message: 'Status Updated'});
                    });
                } else {
                    res.json({error: "", message: 'Status Updated'});
                }
            }
        });
    } catch (e) {
        console.log(e.message)
        res.json({error: e.message});
    }
}

function UserFeedback(req, res) {
    let readCommand = `Select * from contacts`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: '', records: records})
        }
    })
}

function VerifyToken(req, res) {
    // console.log(req["userInfo"]);
    res.json({user: req["adminInfo"]});
}

module.exports = {
    UserFeedback,
    VerifyToken,
    GetPendingAdoptionRequests,
    GetApprovedAdoptionRequests,
    GetRejectedAdoptionRequests,
    ApproveRejectAdoptionRequests,
    UploadPhoto,
    SubCategoryByCategory,
    AddPets,
    DeletePets,
    ReadPets,
    DeleteSubCategory,
    ReadSubCategory,
    SubAddCategory,
    AddCategory,
    ReadCategory,
    DeleteCategory,
    AdminLogin,
    AdminChangePassword,
    // UserLogin
}