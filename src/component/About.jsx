const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <h2 className="text-3xl font-extrabold text-center text-gray-500 dark:text-white mb-12">
          About Me
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <img
              src="/myPhoto.jpg"  // Make sure this image path is correct
              alt="Profile"
              className="rounded-lg shadow-lg w-full object-cover h-80 md:h-full transition-transform transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity opacity-0 group-hover:opacity-100"></div>
          </div>

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a passionate and detail-oriented professional with a solid
              foundation in ethics and continuous learning. My journey started
              with basic education, where I honed my academic and interpersonal
              skills. Pursuing moral and spiritual growth, I completed my
              Hifz-ul-Quran and later achieved a Dawra-e-Hadith certificate.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Driven by a passion for technology, I transitioned into web design
              and development, mastering tools like HTML, CSS, JavaScript, and
              React. This journey has empowered me to craft visually appealing
              and functional web experiences that leave a lasting impact.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a blend of technical expertise and strong ethical values, I
              am excited to contribute to innovative projects and grow as a
              frontend developer.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Let's create something remarkable together.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
