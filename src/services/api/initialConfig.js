import { success as noticeSuccess, error as noticeError } from 'react-notification-system-redux';
import store from 'store';
import logger from "utils/logger";
import history from 'utils/history';
import * as ROUTES from 'config/routes';


var initialConfig = {
  timeout: 10000,
  validateStatus: status => {
    return status;
  }
};

function handleInterceptorsResponse(response) {
  if (response.status >= 400) {
    logger(response)
  }

  if (response.status === 401) {
    // token refresh
  }

  if (response.status === 430) {
    // logout
  }

  return response;
};

const handleInterceptorsError = error => {
  // store.dispatch(noticeError({
  // 	message: error.message
  // }));

  return { error, data: {} };
}

export {
  initialConfig as default,
  handleInterceptorsResponse,
  handleInterceptorsError
}
