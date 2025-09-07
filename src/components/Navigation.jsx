import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">IGD</span>
        </div>
        <span className="text-white text-xl font-semibold">IGDTUW Verse</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          HOME
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          ABOUT
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          FEATURES
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          RESOURCES
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent">
          Sign In
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Create an Account</Button>
        <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
