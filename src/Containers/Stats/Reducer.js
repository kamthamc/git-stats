import { produce } from 'immer';
import ActionTypes from "./ActionTypes";
import { RequestStatus } from "./Constants";



const initialState = {
  repositories: [],
  selectedRepoType: null,
  error: null,
  requestStatus: RequestStatus.NONE,
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.FETCH_REPOSITORIES_IN_PROGRESS:
        draft.repositories = [];
        draft.error = null;
        draft.requestStatus = RequestStatus.IN_PROGRESS;
        break;

      case ActionTypes.FETCH_REPOSITORIES_COMPLETED:
        draft.repositories = payload.repositories;
        draft.requestStatus = RequestStatus.COMPLETED;
        break;

      case ActionTypes.FETCH_REPOSITORIES_FAILED:
        draft.repositories = [];
        draft.requestStatus = RequestStatus.FAILED;
        draft.error = payload.error;
        break;

      case ActionTypes.SWITCH_REPO_TYPE:
        draft.selectedRepoType = payload.selectedRepoType;
        break;

    }

  });
}