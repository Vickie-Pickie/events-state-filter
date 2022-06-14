import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from "./ProjectList";

class Toolbar extends React.Component {
  onFilterClick(filter) {
    this.props.onSelectFilter(filter);
  }

  render() {
    return (
      <div className="filters">
        <div className="filters_nav">
          {
            this.props.filters.map((filter, index) => {
              let classFilter = "filter";
              if (filter.name === this.props.selected) {
                classFilter += " filter_active";
              }
              return (
                <div className={classFilter} key={index} onClick={() => this.onFilterClick(filter)}>{filter.name}</div>
              );
            })
          }
        </div>
      </div>

    );
  }
}
ProjectList.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
