const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Sartaj Hossain</h1>
        <p className="text-xl mb-8">A passionate web developer</p>
        <button className="bg-white text-blue-500 py-3 px-6 rounded-lg font-bold hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
