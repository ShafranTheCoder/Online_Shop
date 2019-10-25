import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { reducer as notifications } from "react-notification-system-redux";

import { reducer as common } from "./modules/common";

export default combineReducers({
  form,
  notifications,
  common,
});
