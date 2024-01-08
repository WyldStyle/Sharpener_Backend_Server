import {
  createNewExpEntry,
  delEntryAtId,
  findAllExpEntries
} from "./expTracker.service.js"
import ResponseHandler from "../responseHandler.js";

export const newExpEntry = async (req, res) => {
  try {
    const expenseData = req.body;
    const result = await createNewExpEntry(expenseData);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch(error) {
    console.error(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}

export const delEntry = async (req, res) =>{
  try {
    console.log('delController',req);
    const resultDel = await delEntryAtId(req.params.id)
    ResponseHandler.sendSuccessResponse(res, resultDel, 200)
  } catch (error) {
    console.log(error.stack);
  }
}

export const findAll = async (req, res) => {
  try {
    console.log('findAll Controller...');
    const findRes = await findAllExpEntries();
    ResponseHandler.sendSuccessResponse(res, findRes, 200);
  } catch(error) {
    console.log(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}


