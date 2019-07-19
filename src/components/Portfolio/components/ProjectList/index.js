import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard';
import { projects } from '../../../../services/api';

class ProjectList extends React.Component {

  render() {
    const { targetTag } = this.props;
    const allProjects = projects.map(project => {
        return <ProjectCard key={project.title} project={project} ref={project.tag}/>
    });
    const projectsList = allProjects.filter(project => {
      return project.ref === targetTag || targetTag === 'all'
    });

    return (
      <div className="portfolio-cards">
        {projectsList}
      </div>
    );
  }
}

ProjectList.propTypes = {
  targetTag: PropTypes.string.isRequired
}

export default ProjectList;
