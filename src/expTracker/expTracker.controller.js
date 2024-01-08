import { createNewExpEntry, delEntryAtId } from "./expTracker.service.js"
import ResponseHandler from "../responseHandler.js";

export const newExpEntry = (req, res) => {
  try {
    const expenseData = req.body;
    const result = createNewExpEntry(expenseData);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch(error) {
    console.error(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}

export const delEntry = (req, res) =>{
  try {
    console.log('delController',req);
    const resultDel = delEntryAtId(req.params.id)
    ResponseHandler.sendSuccessResponse(res, resultDel, 200)
  } catch (error) {
    console.log(error.stack);
  }
}


