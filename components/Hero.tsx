export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">The Perfect Intern</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate developer ready to make an impact at my favorite startup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
