import { createNewExpEntry, delEntryAtId , updateEntryAtId} from "./expTracker.service.js"
import ResponseHandler from "../responseHandler.js";

export const newExpEntry = (req, res) => {
  try {
    const expenseData = req.body;
    console.log('controller1');
    const result = createNewExpEntry(expenseData);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch (error) {
    console.error(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}
export const delExpEntry = (req, res) => {
  try {
    // console.log(req.params);
    const result = delEntryAtId(id);
    ResponseHandler.sendSuccessResponse(res, result, 300)
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null, 500);
  }
}

export const updateExpEntry = (req, res) =>{
  try {
    const updatedExpData = req.body;
    const result  = updateExpEntry(id, updatedExpData);
    ResponseHandler.sendSuccessResponse(res, result,200)
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendSuccessResponse(res, error.message, null, 500)
  }
}