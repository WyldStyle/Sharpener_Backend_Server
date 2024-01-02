import express from 'express';
import * as ExpenseController from './expTracker.controller.js';

const router = express.Router();

router.post('/newExpEntry', ExpenseController.newExpEntry);

export default router;