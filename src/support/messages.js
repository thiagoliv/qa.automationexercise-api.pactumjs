export const messages = {
  CREATE_USER_SUCCESS: {
    responseCode: 201,
    message: 'User created!',
  },
  CREATE_USER_MISSING_EMAIL: {
    responseCode: 400,
    message: 'Bad request, email parameter is missing in POST request.',
  },
  CREATE_USER_INVALID_EMAIL: {
    responseCode: 400,
    message: 'Email already exists!',
  },
  DELETE_ACCOUNT_SUCCESS: {
    responseCode: 200,
    message: 'Account deleted!',
  },
  DELETE_ACCOUNT_MISSING_EMAIL: {
    responseCode: 400,
    message: 'Bad request, email parameter is missing in DELETE request.',
  },
};

export default messages;
