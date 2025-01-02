const express = require('express');
const router = express.Router();
const todo = require('../controller/ToDoController');

router.post('/login', todo.LoginUser);//login
router.post('/register', todo.RegisterUser); //register
router.get('/checklist', todo.GetAllChecklist); //GET All Checklist
router.post('/checklist', todo.CreateNewChecklist); //Create New Checklist
router.delete('/checklist/:checklistId', todo.DelChecklist); //Delete Checklist
router.get('/checklist/:checklistId/item', todo.GetChecklistItembyChecklistId) //Get Checklist item by Checklist Id
router.post('/checklist/:checklistId/item', todo.CreateNewChecklistItem); //Create New Checklist Item 
router.get('/checklist/:checklistId/item/:checklistItemId'); //Get Checklist Item Checklist ID
router.put('/checklist/:checklistId/item/:checklistItemId', todo.UpdateStatusChecklistItem); //Update status checklist
router.delete('/checklist/:checklistId/item/:checklistItemId', todo.DelChecklistItem);//Delete Item checklist id
router.put('/checklist/:checklistId/item/rename/:checklistItemId', todo.RenameChecklistItem); //Update name item checklist

module.exports = router;