const ToDo = require('../models/ToDoModel');
const jwt = require('jsonwebtoken');

//Login
exports.LoginUser = function(req, res){
    ToDo.LoginUser(req.body.username, req.body.password, (err,result) => {
        if (err) throw err;
        //res.json(result);
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
        time: Date(),
        username: result[0].username,
        password: result[0].password,
        email: result[0].email,
        checklistId: result[0].checklistId
        }

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
    });
};

//register
exports.RegisterUser = function(req, res){
    const dt_login = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };

    ToDo.RegisterUser(dt_login, (err, result) => {
        if (err) throw err;
        res.json({message: 'Berhasil Registrasi'});
    });
};

//GET All Checklist
exports.GetAllChecklist = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            ToDo.GetAllChecklist((err, result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Create New Checklist
exports.CreateNewChecklist = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        req.user = verified;
        if (verified) {
            const dt_checklist = {
                name: req.body.name,
                username: req.user.username,
                password: req.user.password,
                email: req.user.email,
                checklistId: req.user.checklistId + 1
            };
            console.log(req.user);
            ToDo.CreateNewChecklist(dt_checklist, (err, result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Delete Checklist
exports.DelChecklist = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            ToDo.DelChecklist(req.params.checklistId,(err, result) => {
            if (err) throw err;
            res.json({message: `Berhasil hapus checklist dengan id ${req.params.checklistId}`});
        });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Get Checklist item by Checklist Id
exports.GetChecklistItembyChecklistId = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        req.user = verified;
        if (verified) {
            ToDo.GetChecklistItembyChecklistId(req.user.checklistId, (err,result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Create New Checklist Item 
exports.CreateNewChecklistItem = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        req.user = verified;
        if (verified) {
            ToDo.CreateNewChecklistItem(req.user.checklistId, req.body.ItemName, (err, result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Get Checklist Item Checklist ID
exports.GetChecklistItembyChecklistItemId = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            ToDo.GetChecklistItembyChecklistItemId(req.params.checklistId, req.params.checklistItemId, (err,result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Update status checklist
exports.UpdateStatusChecklistItem = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            ToDo.UpdateStatusChecklistItem(req.params.checklistId, req.params.checklistItemId, (err, result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Delete Item checklist id
exports.DelChecklistItem = function(req, res){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
    ToDo.DelChecklistItem(req.params.checklistId, req.params.checklistItemId, (err, result) => {
        if (err) throw err;
        res.json({message: `Berhasil hapus data checklist dengan checklist id ${req.params.checklistId} dan checklist item id ${req.params.checklistItemId}`});
    });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

//Update name item checklist
exports.RenameChecklistItem = function(req, res){

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            ToDo.RenameChecklistItem(req.params.checklistId, req.params.checklistItemId, req.body.itemName, (err,result) => {
                if (err) throw err;
                res.json(result);
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }    
};
