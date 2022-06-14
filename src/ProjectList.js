import React from 'react';
import PropTypes from 'prop-types';

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projects">
        {
          this.props.projects.map((project, index) => {
            return (
              <img className="projects_item" key={index} src={project.img} />
            );
          })
        }
        </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectList;
