const ToDo = require('../models/ToDoModel');


//Login
exports.LoginUser = function(req, res){
    ToDo.LoginUser((err,result) => {
        if (err) throw err;
        res.json(result);
    });
};

//register
exports.RegisterUser = function(req, res){
    const dt_login = {
        email: req.params.body.email,
        username: req.params.body.username,
        password: req.params.body.password
    };

    ToDo.RegisterUser(dt_login, (err, result) => {
        if (err) throw err;
        res.json({message: 'Berhasil Registrasi'});
    });
};

//GET All Checklist
exports.GetAllChecklist = function(req, res){
    ToDo.GetAllChecklist((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Create New Checklist
exports.CreateNewChecklist = function(req, res){
    ToDo.CreateNewChecklist(req.params.body.name, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Delete Checklist
exports.DelChecklist = function(req, res){
    ToDo.DelChecklist(req.params.body.checklistID,(err, result) => {
        if (err) throw err;
        res.json({message: `Berhasil hapus checklist dengan id ${req.params.body.checklistID}`});
    });
};

//Get Checklist item by Checklist Id
exports.GetChecklistItembyChecklistId = function(req, res){
    ToDo.GetChecklistItembyChecklistId(req.params.body.checklistId, (err,result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Create New Checklist Item 
exports.CreateNewChecklistItem = function(req, res){
    ToDo.CreateNewChecklistItem(req.param.body.checklistId, req.param.body.ItemName, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Get Checklist Item Checklist ID
exports.GetChecklistItembyChecklistItemId = function(req, res){
    ToDo.GetChecklistItembyChecklistItemId(req.params.body.checklistId, req.params.body.checklistItemId, (err,result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Update status checklist
exports.UpdateStatusChecklistItem = function(req, res){
    ToDo.UpdateStatusChecklistItem(req.params.body.checklistId, req.params.body.checklistItemID, req.params.body.checklistItemId, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Delete Item checklist id
exports.DelChecklistItem = function(req, res){
    ToDo.DelChecklistItem(req.params.body.checklistId, req.params.body.checklistItemId, (err, result) => {
        if (err) throw err;
        res.json({message: `Berhasil hapus data checklist dengan checklist id ${req.params.body.checklistId} dan checklist item id ${req.params.body.checklistItemId}`});
    });
};

//Update name item checklist
exports.RenameChecklistItem = function(req, res){
    ToDo.RenameChecklistItem(req.params.checklistId, req.params.checklistItemId, req.params.body.itemName, (err,result) => {
        if (err) throw err;
        res.json(result);
    });
};
