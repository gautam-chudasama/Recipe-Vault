import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Welcome to Recipe Hub
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Discover, create, and share amazing recipes. Your culinary journey
          starts here!
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <Link
            to="/recipes"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Browse Recipes
          </Link>

          <Link
            to="/create"
            className="px-8 py-4 bg-gray-900 hover:bg-gray-950 border border-orange-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Create Recipe
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300">
            <div className="text-4xl mb-4">🍳</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              Easy to Use
            </h3>
            <p className="text-gray-400">
              Create and manage your recipes with a simple, intuitive interface
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              Organize
            </h3>
            <p className="text-gray-400">
              Categorize recipes by meal type and keep everything organized
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all duration-300">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              {/* Save Locally */}
            </h3>
            <p className="text-gray-400">
              All your recipes are saved in your browser for quick access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
