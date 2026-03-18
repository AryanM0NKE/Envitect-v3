import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Insights & Industry Trends',
  description: 'Read our blog for insights on architecture, BIM, CAD, solar design, and graphic design. Industry trends, tips, and best practices.',
}

const categories = ['All', 'Architecture', 'BIM', 'CAD', 'Solar', 'Graphic Design', 'Industry News']

const posts = [
  {
    cat: 'BIM',
    title: 'The Future of BIM: Trends to Watch in 2025',
    summary: 'Artificial intelligence, digital twins, and cloud collaboration are transforming Building Information Modeling. Here\'s what every construction professional needs to know about where BIM is headed.',
    readTime: '6 min read',
    date: 'December 2024',
    featured: true,
    color: '#0F172A',
  },
  {
    cat: 'Solar',
    title: 'Solar Design Best Practices for Faster Permit Approvals',
    summary: 'The most common reasons solar permits get rejected — and exactly how to avoid them. A practical guide for installers and EPC companies.',
    readTime: '5 min read',
    date: 'November 2024',
    featured: true,
    color: '#0D9488',
  },
  {
    cat: 'CAD',
    title: 'How to Choose the Right CAD Drafting Partner',
    summary: 'Outsourcing CAD work can transform your firm\'s capacity — or create costly headaches. Here\'s what to look for and what questions to ask.',
    readTime: '4 min read',
    date: 'November 2024',
    featured: false,
    color: '#334155',
  },
  {
    cat: 'Architecture',
    title: '5 Interior Design Trends Reshaping Modern Offices in 2025',
    summary: 'The workplace has fundamentally changed. These five design trends are helping companies create offices that employees actually want to come to.',
    readTime: '5 min read',
    date: 'October 2024',
    featured: false,
    color: '#1e293b',
  },
  {
    cat: 'Graphic Design',
    title: 'Building a Real Estate Brand That Sells',
    summary: 'The difference between a property development that sells out on launch day and one that lingers on the market often comes down to branding. Here\'s the strategy.',
    readTime: '7 min read',
    date: 'October 2024',
    featured: false,
    color: '#0F766E',
  },
  {
    cat: 'Industry News',
    title: 'Why Multi-Disciplinary Design Firms Are Winning More Projects',
    summary: 'Clients are consolidating vendors. Firms that offer architecture, engineering, BIM, and design under one roof are capturing projects that fragmented providers are losing.',
    readTime: '4 min read',
    date: 'September 2024',
    featured: false,
    color: '#334155',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-24 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(13,148,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Blog
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Insights, Ideas<br />& Industry Trends
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Stay updated with the latest in architecture, BIM, CAD, solar design, and graphic design.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  cat === 'All'
                    ? 'bg-teal text-white border-teal'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-teal hover:text-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Posts (top 2) */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {posts.filter((p) => p.featured).map((post) => (
              <article
                key={post.title}
                className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Color header */}
                <div
                  className="h-40 relative overflow-hidden flex items-end p-6"
                  style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}88)` }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(13,148,136,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <span className="relative z-10 inline-block bg-teal/20 text-teal text-xs font-mono px-3 py-1 rounded-full border border-teal/30">
                    {post.cat}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Clock size={10} /> {post.readTime}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{post.date}</span>
                  </div>
                  <h2 className="font-display text-xl font-medium text-navy mb-3 group-hover:text-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Remaining Posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.filter((p) => !p.featured).map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <span className="inline-block bg-teal/8 text-teal text-xs font-mono px-2.5 py-1 rounded-full mb-3">
                  {post.cat}
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Clock size={10} /> {post.readTime}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{post.date}</span>
                </div>
                <h3 className="font-display text-base font-medium text-navy mb-2 group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">{post.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal">
                  Read article <ArrowRight size={12} />
                </span>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-navy rounded-2xl p-10 text-center">
            <h3 className="font-display text-3xl font-light text-white mb-3">Stay in the Loop</h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto text-sm">Get the latest insights on architecture, BIM, CAD, solar, and design delivered to your inbox monthly.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors"
              />
              <button className="bg-teal text-white font-display text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-teal-dark transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
