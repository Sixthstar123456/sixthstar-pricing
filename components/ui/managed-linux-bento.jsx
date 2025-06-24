"use client"
import { ArrowRight, CircleUser, Sparkles, Zap } from "lucide-react"
import Button from "./button"


const ManagedBentoGridSection = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 pt-10">Advanced Features of Managed Linux Server in India</h2>
    <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
          
      {/* Logo and Tagline */}
      <div className="col-span-12 md:col-span-3 bg-[#1a1c36] rounded-xl p-6 flex flex-col justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-purple-400 font-medium">PromptPal</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Effortless Prompt Perfection</h3>
          <div className="text-gray-400 text-sm mt-4">
            <p>14 days trial</p>
            <p>after - $5/month</p>
          </div>
        </div>
      </div>

      {/* Main Feature */}
      <div className="col-span-12 md:col-span-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
        <div className="mb-2 text-purple-200 text-sm">PromptPal</div>
        <h2 className="text-3xl font-bold text-white mb-6">Your AI Prompt Companion</h2>

        <div className="relative w-40 h-40 mb-4">
          <div className="absolute inset-0 rounded-full bg-purple-900/50 flex items-center justify-center overflow-hidden">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs text-purple-200 tracking-wider uppercase rotate-[30deg]">
              Create • Analyze • Optimize • Refine • Create
            </div>
          </div>
        </div>
      </div>

      {/* User Icon */}
      <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6 flex items-center justify-center">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <CircleUser className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Stats - 25M */}
      <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6 flex flex-col justify-center">
        <h3 className="text-4xl font-bold text-white">25M</h3>
        <div className="flex items-center mt-1">
          <div className="w-12 h-1 bg-purple-600 mr-2"></div>
          <span className="text-gray-400 text-sm">created prompts</span>
        </div>
      </div>

      {/* User Count - 12K */}
      <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6">
        <h3 className="text-4xl font-bold text-orange-400">12K</h3>
        <p className="text-gray-400 text-sm mb-4">happy users</p>

        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-[#1a1c36]"></div>
          <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#1a1c36]"></div>
          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#1a1c36]"></div>
        </div>
      </div>

      {/* Templates */}
      <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6">
        <h3 className="text-lg font-medium text-white mb-1">Prompt templates</h3>
        <p className="text-gray-400 text-sm mb-4">Use pre-made templates to jumpstart creativity.</p>

        <div className="relative h-24 mt-6">
          <div className="absolute bottom-0 right-0 transform rotate-12">
            <div className="w-16 h-20 bg-gradient-to-b from-purple-700 to-purple-900 rounded-lg flex items-center justify-center border border-purple-600">
              <span className="text-xs text-white">14 days trial</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 transform rotate-6">
            <div className="w-16 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-lg flex items-center justify-center border border-blue-600">
              <span className="text-xs text-white">Premium</span>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 transform rotate-0">
            <div className="w-16 h-20 bg-gradient-to-b from-orange-700 to-orange-900 rounded-lg flex items-center justify-center border border-orange-600">
              <span className="text-xs text-white">Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="col-span-12 md:col-span-3 bg-purple-600 rounded-xl p-6 flex items-center justify-center">
        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white border-none">
          <Sparkles className="w-5 h-5 mr-2" />
          Generate
        </Button>
      </div>

      {/* Branching Paths */}
      {/* <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium text-white">Branching paths</h3>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <p className="text-gray-400 text-sm">Explore multiple prompt directions with branching.</p>
      </div> */}

      {/* Keyword Enhancer */}
      {/* <div className="col-span-6 md:col-span-3 bg-[#1a1c36] rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium text-white">Keyword enhancer</h3>
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
        <p className="text-gray-400 text-sm">Boost your prompt precision with keywords.</p>
      </div> */}
    </div>
    </div>
  )
}
export default ManagedBentoGridSection;