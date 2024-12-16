const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', image: 'project1.jpg' },
        { title: 'Project 2', description: 'Description of project 2', image: 'project2.jpg' },
        // ... more projects
    ];

    return (
        <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
