//Initialize Express
const express = require('express');
//Initialize fileSystem
const fs = require('fs')
const app = express();

//this line is required to parse the request body
app.use(express.json())

// Create post method
app.post('/user/add', (req,res) => {
    const user = getUserData()
    const userData = req.body

    //check if the username exist already
    const findExist = user.find( user => user.name === userData.name )
    if (findExist) {
        return res.status(409).send({error: true, msg: 'username already exist'})
    }

    //append the user data
    user.push(userData)

    //save the new user data
    saveUserData(user);
    res.send({success: true, msg: 'User data added successfully'})
})

/* Read - GET method */
app.get('/user/list', (req, res) => {
    const users = getUserData()
    res.send(users)
})

/* Update - Patch method */
app.patch('/user/update/:name', (req, res) => {
    const username = req.params.name
    const userData = req.body

    //get the existing user data
    const existUsers = getUserData()

    //check if the username exist or not       
    const findExist = existUsers.find( user => user.name === username )
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'username not exist'})
    }

    //filter the userdata
    const updateUser = existUsers.filter( user => user.name !== username )

    //push the updated data
    updateUser.push(userData)

    //finally save it
    saveUserData(updateUser)
    res.send({success: true, msg: 'User data updated successfully'})
})

/* Delete - Delete method */
app.delete('/user/delete/:name', (req, res) => {
    const username = req.params.name
    const existUsers = getUserData()

    //filter the userdata to remove it
    const filterUser = existUsers.filter( user => user.name !== username )
    if ( existUsers.length === filterUser.length ) {
        return res.status(409).send({error: true, msg: 'username does not exist'})
    }

    //save the filtered data
    saveUserData(filterUser)
    res.send({success: true, msg: 'User removed successfully'})
    
})

/* util functions */
//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('employee.json', stringifyData)
}

//get the user data from json file
const getUserData = () => {
    const jsonData = fs.readFileSync('employee.json')
    return JSON.parse(jsonData)    
}

/* util functions ends */
//configure the server port
app.listen(5000, () => {
    console.log('Server runs on port 5000')
})