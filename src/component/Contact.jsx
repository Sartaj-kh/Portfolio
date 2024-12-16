const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Me</h2>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">Feel free to reach out!</p>
                <div className="flex justify-center">
                  <a href="mailto:your.email@example.com" className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
                    Email Me
                  </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
