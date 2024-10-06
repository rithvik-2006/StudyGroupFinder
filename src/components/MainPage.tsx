import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Users, Calendar, MessageSquare } from 'lucide-react'

export default function MainPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Study Group Finder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/groups" className="hover:text-blue-400 transition-colors">Find Groups</Link></li>
              <li><Link href="/create" className="hover:text-blue-400 transition-colors">Create Group</Link></li>
              <li><Link href="/profile" className="hover:text-blue-400 transition-colors">Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Study Group</h2>
          <p className="text-xl text-gray-400 mb-8">Connect with fellow students, ace your courses, and make studying more enjoyable!</p>
          <div className="flex justify-center">
            <Input type="text" placeholder="Search for a course or topic" className="w-full max-w-md mr-2" />
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Your Group</h3>
            <p className="text-gray-400">Join study groups that match your courses and schedule.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <Calendar className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule Sessions</h3>
            <p className="text-gray-400">Easily plan and organize study sessions with your group.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <MessageSquare className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
            <p className="text-gray-400">Communicate with your study buddies in real-time.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Studies?</h2>
          <Button size="lg">Get Started</Button>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          &copy; 2024 Study Group Finder. All rights reserved.
        </div>
      </footer>
    </div>
  )
}