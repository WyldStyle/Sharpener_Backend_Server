import {
  createNewExpEntry,
  delEntryAtId,
  updateEntryAtId,
  findAllExpEntries
} from "./expTracker.service.js"
import ResponseHandler from "../responseHandler.js";

export const newExpEntry = async (req, res) => {
  try {
    const expenseData = req.body;
    const result = await createNewExpEntry(expenseData);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch (error) {
    console.error(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}
export const delExpEntry = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await delEntryAtId(id);
    ResponseHandler.sendSuccessResponse(res, result, 300)
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}

export const updateExpEntry = async (req, res) =>{
  try {
    const updatedExpData = req.body;
    const id = req.params.id;
    const result  = await updateEntryAtId(id, updatedExpData);
    ResponseHandler.sendSuccessResponse(res, result,200)
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendSuccessResponse(res, error.message, null, 500)
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