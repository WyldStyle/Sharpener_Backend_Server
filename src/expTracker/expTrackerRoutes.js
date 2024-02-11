import express from 'express';
import * as ExpenseController from './expTracker.controller.js';

const router = express.Router();
console.log('router is', router);

router.post('/newExpEntry', ExpenseController.newExpEntry);
router.delete(`/delExpEntry/:id`,ExpenseController.delExpEntry)
// router.get('/findAll', ExpenseController.findAll);
router.update('/updateExpEntry/:id',ExpenseController.updateExpEntry)

export default router;
