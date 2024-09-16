const myProjects = [
    {
        title: '',
        image: '',
        url: '',
        github: '',
    },
    {
        title: 'CheapSkate Gamer',
        image: '',
        url: '',
        github: '',        
    },
    {
        title: 'Express Note Taker',
        image: '',
        url: '',
        github: '',        
    },
    {
        title: 'ClimateView Weather Dashboard',
        image: '',
        url: '',
        github: '',        
    },
    {
        title: 'Sunset Lounge Personal Blog',
        image: '',
        url: '',
        github: '',        
    },
    {
        title: 'Taskboard Management Application',
        image: '',
        url: '',
        github: '',        
    }


]




const Portfolio = () => {
    return (
        <div id="portfolio-div">
            <h2>Portfolio Page</h2>
            <p>About</p>
            <div id="project-list">
                {myProjects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <a href={project.url} target="_blank" rel="">View Project</a>
                        <a href={project.github} target="_blank" rel="">GitHub Repo</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;