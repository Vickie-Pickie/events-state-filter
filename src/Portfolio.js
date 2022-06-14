import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
  static propTypes = { };
  constructor(props) {
    super(props);
    const filters = [
      {
        name: "All",
      },
      {
        name: "Websites",
      },
      {
        name: "Flayers",
      },
      {
        name: "Business Cards",
      },
    ];

    const projects = [
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
      }
    ];

    this.state = {
      filters,
      selected: filters[0].name,
      projects,
    };

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

    onSelectFilter(filter) {
      this.setState({
        selected: filter.name
      });
    }

  render() {
    const { filters, selected, projects } = this.state;
    let filteredProjects;
    if (selected === "All") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter((project) => project.category === selected);
    }

    return (
      <div className="container">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects}/>
      </div>
    );
  }
}

export default Portfolio;
