"use client"

const HackathonCard = ({ name, description, url, tags, category }) => {
  const handleExplore = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getCategoryColor = (category) => {
    const colors = {
      League: "from-purple-600 to-purple-800",
      Platform: "from-blue-600 to-purple-700",
      Educational: "from-green-600 to-blue-700",
      Contests: "from-orange-600 to-red-700",
      Series: "from-pink-600 to-purple-700",
      Community: "from-indigo-600 to-purple-700",
    }
    return colors[category] || "from-purple-600 to-purple-800"
  }

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full flex flex-col transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-gray-900/70">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{name}</h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(category)}`}
            >
              {category}
            </span>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">{description}</p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-md border border-purple-800/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleExplore}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Visit Platform
          </button>
        </div>
      </div>
    </div>
  )
}

export default HackathonCard
