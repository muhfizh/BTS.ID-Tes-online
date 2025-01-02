const Dt_ToDo = require('../config/database');

//Login
exports.LoginUser = function(user, password, callback){
    Dt_ToDo.query('select * from list_todo_tabs where username = ? and password = ? and rownum = 1', [user,password], callback);
};

//register
exports.RegisterUser = function(newUser, callback){
    Dt_ToDo.query('insert into list_todo_tabs set ?', [newUser], callback);
};

//GET All Checklist
exports.GetAllChecklist = function(callback){
    Dt_ToDo.query('select * from list_todo_tabs', callback);
};

//Create New Checklist
exports.CreateNewChecklist = function(newChecklist, callback){
    Dt_ToDo.query('insert into list_todo_tabs set ?', [newChecklist], callback);
};

//Delete Checklist
exports.DelChecklist = function(checklist_id, callback){
    Dt_ToDo.query('delete from list_todo_tabs where checklistid = ?', [checklist_id], callback);
};

//Get Checklist item by Checklist Id
exports.GetChecklistItembyChecklistId = function(checklist_id, callback){
    Dt_ToDo.query('select * from list_todo_tabs where checklistid = ?', [checklist_id], callback);
};

//Create New Checklist Item 
exports.CreateNewChecklistItem = function(newChecklistItem, checklist_id, callback){
    Dt_ToDo.query('insert into list_todo_tabs set ? where checklistid = ?', [newChecklistItem, checklist_id], callback);
};

//Get Checklist Item Checklist ID
exports.GetChecklistItembyChecklistItemId = function(checklist_id, checklistitem_id, callback){
    Dt_ToDo.query('select * from list_todo_tabs where checklistid = ? and checklistitemid = ?', [checklist_id, checklistitem_id], callback);
};

//Update status checklist
exports.UpdateStatusChecklistItem = function(checklist_id, checklistitem_id, callback){
    Dt_ToDo.query('update list_todo_tabs set status = 1 where checklistid = ? and checklistitemid = ?', [checklist_id, checklistitem_id], callback);
};

//Delete Item checklist id
exports.DelChecklistItem = function(checklist_id, checklistitem_id, callback){
    Dt_ToDo.query('delete from list_todo_tabs where checklistid = ? and checklistitemid = ?', [checklist_id, checklistitem_id], callback);
};

//Update name item checklist
exports.RenameChecklistItem = function(checklistId, checklistitemid, nameitem, callback){
    Dt_ToDo.query('update from list_todo_tabs where checklistid = ? and checklistitemid = ?', [nameitem, checklistId, checklistitemid], callback);
};