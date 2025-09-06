import Navigation from "../components/Navigation"
import AnimatedBackground from "../components/AnimatedBackground"
import HackathonCard from "../components/HackathonCard"

const HackathonsPage = () => {
  const hackathons = [
    {
      name: "Major League Hacking",
      description: "The official student hackathon league with events worldwide",
      url: "https://mlh.io/",
      tags: ["Global", "Student", "Official"],
      category: "League",
    },
    {
      name: "Devpost",
      description: "Discover and participate in hackathons, coding competitions, and more",
      url: "https://devpost.com/",
      tags: ["Competitions", "Projects", "Community"],
      category: "Platform",
    },
    {
      name: "HackerEarth",
      description: "Programming challenges, hackathons and hiring challenges",
      url: "https://www.hackerearth.com/challenges/",
      tags: ["Programming", "Challenges", "Hiring"],
      category: "Platform",
    },
    {
      name: "Unstop",
      description: "India's largest platform for competitions and hackathons",
      url: "https://unstop.com/hackathons",
      tags: ["India", "Competitions", "Students"],
      category: "Platform",
    },
    {
      name: "GeeksforGeeks",
      description: "Coding competitions and hackathons for programmers",
      url: "https://www.geeksforgeeks.org/events/",
      tags: ["Coding", "Learning", "Practice"],
      category: "Educational",
    },
    {
      name: "CodeChef",
      description: "Monthly programming contests and hackathons",
      url: "https://www.codechef.com/contests",
      tags: ["Monthly", "Contests", "Programming"],
      category: "Contests",
    },
    {
      name: "Codeforces",
      description: "Programming contests and competitive programming platform",
      url: "https://codeforces.com/contests",
      tags: ["Competitive", "Programming", "Contests"],
      category: "Contests",
    },
    {
      name: "AngelHack",
      description: "Global hackathon series connecting developers worldwide",
      url: "https://angelhack.com/",
      tags: ["Global", "Developers", "Innovation"],
      category: "Series",
    },
    {
      name: "Junction",
      description: "Europe's leading hackathon organizing community",
      url: "https://www.junction.fi/",
      tags: ["Europe", "Community", "Innovation"],
      category: "Community",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Explore <span className="text-purple-500">Hackathons</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Discover amazing hackathons, coding competitions, and innovation challenges from around the world. Join the
            community and showcase your skills!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={index}
              name={hackathon.name}
              description={hackathon.description}
              url={hackathon.url}
              tags={hackathon.tags}
              category={hackathon.category}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">Ready to code? Pick a platform and start your hackathon journey!</p>
        </div>
      </main>
    </div>
  )
}

export default HackathonsPage
