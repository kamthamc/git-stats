import { createSelector } from 'reselect';

const statsState = state => state.stats;

export const repositoriesListSelector = createSelector(
  statsState,
  (stats) => {

  }
);

export const groupedRepositorySummarySelector = createSelector(
  statsState,
  (stats) => {

  }
);

export const repositorySummarySelector = createSelector(
  statsState,
  (stats) => {

  }
);

export const repoTypeSelector = createSelector(
  statsState,
  (stats) => {

  }
);