import { SUBMISSION_REQUEST, SUBMISSION_SUCCESS, SUBMISSION_FAILURE } from '../actions';

export default (name, src) => {
  return (state = {
    src: src,
    formId: '',
    id: '',
    name: name,
    isFetching: false,
    lastUpdated: 0,
    submission: {},
    error: ''
  }, action) => {
    // Only proceed for this form.
    if (action.name !== state.name) {
      return state;
    }
    switch (action.type) {
      case SUBMISSION_REQUEST:
        return {
          ...state,
          formId: action.formId,
          id: action.id,
          submission: {},
          isFetching: true,
        };
      case SUBMISSION_SUCCESS:
        return {
          ...state,
          id: action.submission._id,
          submission: action.submission,
          isFetching: false,
          error: ''
        };
      case SUBMISSION_FAILURE:
        return {
          ...state,
          isFetching: false,
          isInvalid: true,
          error: action.error
        };
      default:
        return state;
    }
  };
};
