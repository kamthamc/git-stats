import ActionTypes from "./ActionTypes";

export function fetchRepositories() {
  return {
    type: ActionTypes.FETCH_REPOSITORIES
  }
}

export function switchRepoType(payload) {
  return {
    type: ActionTypes.SWITCH_REPO_TYPE,
    payload
  }
}