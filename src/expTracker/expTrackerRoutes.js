import express from 'express';
import * as ExpenseController from './expTracker.controller.js';

const router = express.Router();

router.post('/newExpEntry', ExpenseController.newExpEntry);
router.delete(`/delExpEntry/:id`,ExpenseController.delEntry)
router.get('/findAll', ExpenseController.findAll);

export default router;