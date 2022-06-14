import React from 'react';

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

export default ProjectList;
