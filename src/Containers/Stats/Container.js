
import { connect } from 'react-redux';
import React from 'react';
import Stats from './Stats';
import { repositoriesListSelector, groupedRepositorySummarySelector, repositorySummarySelector, repoTypeSelector } from './Selectors';
import { fetchRepositories, switchRepoType } from './Actions';

class Container extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRepositories();
  }

  render() {
    return (
      <Stats
        repositories={this.props.repositories}
        groupedRepositorySummary={this.props.groupedRepositorySummary}
        repositorySummary={this.props.repositorySummary}
        selectedRepoType={this.props.selectedRepoType}
        switchRepoType={this.props.switchRepoType}
      />
    );
  }

}


const mapDispatchToProps = (dispatch) => ({
  fetchRepositories: (payload) => dispatch(fetchRepositories(payload)),
  switchRepoType: (payload) => dispatch(switchRepoType(payload)),
});

const mapState = (state) => ({
  repositories: repositoriesListSelector(state),
  groupedRepositorySummary: groupedRepositorySummarySelector(state),
  repositorySummary: repositorySummarySelector(state),
  selectedRepoType: repoTypeSelector(state),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(Container);
