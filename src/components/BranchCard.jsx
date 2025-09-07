"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BranchCard({ branch }) {
  return (
    <Card className="group relative overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${branch.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      />

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 text-balance">
          {branch.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed text-pretty">{branch.description}</p>

        <div className="flex flex-wrap gap-2">
          {branch.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:bg-purple-500 transition-all duration-300"
          onClick={() => {
            // Navigate to study materials for this branch
            console.log(`Navigating to ${branch.id} study materials`)
          }}
        >
          Explore Materials
        </Button>
      </CardContent>
    </Card>
  )
}
