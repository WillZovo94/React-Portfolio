// Project Lists
const myProjects = [
    {
        title: 'CheapSkate Gamer',
        image: 'cheapskate-gamer.png',
        url: 'https://dashboard.render.com/d/dpg-cqtqogdsvqrc73agc360-a',
        github: 'https://github.com/WillZovo94/CheapSkate-Gamer/tree/main?tab=readme-ov-file',        
    },
    {
        title: 'Express Note Taker',
        image: 'express-note-taker.png',
        url: 'https://express-note-taker-3bam.onrender.com',
        github: 'https://github.com/WillZovo94/Express-Note-Taker',        
    },
    {
        title: 'ClimateView Weather Dashboard',
        image: 'climate-view.png',
        url: 'https://willzovo94.github.io/ClimateView-Weather-Dashboard/',
        github: 'https://github.com/WillZovo94/ClimateView-Weather-Dashboard',        
    },
    {
        title: 'Sunset Lounge Personal Blog',
        image: 'sunset-lounge.png',
        url: 'https://willzovo94.github.io/Sunset-Lounge-Personal-Blog/',
        github: 'https://github.com/WillZovo94/Sunset-Lounge-Personal-Blog?tab=readme-ov-file',        
    },
    {
        title: 'Taskboard Management App',
        image: 'taskboard.png',
        url: 'https://willzovo94.github.io/Task-board-management-application/',
        github: 'https://github.com/WillZovo94/Task-board-management-application',        
    },
    {
        title: 'Employee Payroll Tracker',
        image: 'employee-tracker.png',
        url: 'https://willzovo94.github.io/Employee-Payroll-Tracker/',
        github: 'https://github.com/WillZovo94/Employee-Payroll-Tracker'
    }


]

// Makes new projects per each in the array
const Project = () => {
    return (
        <div id="portfolio-div">
        <h2 id="project-page-title">My Projects</h2>
        <div id="project-list">
            {myProjects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3>{project.title}</h3>
                    <a href={project.github} target="_blank"><img src={project.image} alt={project.title} className="portfolio-img" /></a>
                    <div className="link-div">
                        <a href={project.url} target="_blank" rel="" className="projectView-link">View Project</a>
                        <a href={project.github} target="_blank" rel="">GitHub Repo</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Project;