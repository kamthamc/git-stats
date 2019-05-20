import { createSelector } from 'reselect';

const statsState = state => state.stats;

export const filterReposSelector = createSelector(
  statsState,
  ({ repositories, selectedRepoType }) => {
    return repositories
      .filter(repo => {
        if(selectedRepoType !== 'all') {
          return selectedRepoType === 'public' ? repo.repo.isPublic : !repo.repo.isPublic;
        } else {
          return true;
        }
      });
  }
);

export const repositoriesListSelector = createSelector(
  filterReposSelector,
  (repos) => {
    return repos.map(({ repo, stats }) => ({
      ...repo,
      unmanagedDevices: stats.reduce((sum, stat) => ( sum + stat.unmanagedDevices), 0),
      managedDevices: stats.reduce((sum, stat) => ( sum + stat.managedDevices), 0)
    }));
  }
);

export const groupedRepositorySummarySelector = createSelector(
  filterReposSelector,
  (repos) => {
    const stats = [];
    for(let index = 0; index < repos.length; index += 1) {
      const repo = repos[index];
      for(let j = 0; j < repo.stats.length; j += 1) {
        const stat = repo.stats[j];
        if(!stats[j]) {
          const dt = new Date(stat.date);
          stats[j] = {
            date: `${dt.getMonth()}/${dt.getDate()}`,
            managedDevices: 0,
            unmanagedDevices: 0,
            ts: stat.date,
          }
        }

        stats[j].managedDevices += stat.managedDevices;
        stats[j].unmanagedDevices += stat.unmanagedDevices;
      }
    }
    return stats.sort((a, b) => a.ts - b.ts);
  }
);

export const repositorySummarySelector = createSelector(
  statsState,
  (stats) => {

  }
);

export const repoTypeSelector = createSelector(
  statsState,
  ({ selectedRepoType }) => selectedRepoType
);