import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'AI-Powered Factory Automation: 50% Efficiency Boost',
    description: 'How I helped a Dutch manufacturing company implement AI-driven workflow automation, reducing manual tasks by 50% and improving deadline management.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Dec 2024',
    category: 'Case Study',
    tags: ['Python', 'OpenAI', 'MongoDB'],
    type: 'case-study'
  },
  {
    id: 2,
    title: 'React + Node.js: Building Scalable Web Applications',
    description: 'A comprehensive guide to building production-ready web applications with React frontend and Node.js backend, including best practices for security and performance.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Nov 2024',
    category: 'Technical Guide',
    tags: ['React', 'Node.js', 'Security'],
    type: 'guide'
  },
  {
    id: 3,
    title: 'GDPR-Compliant API Security: A Complete Implementation',
    description: 'Deep dive into implementing GDPR-compliant API security measures, including data encryption, user consent management, and audit trails.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Oct 2024',
    category: 'Security Focus',
    tags: ['Security', 'GDPR', 'APIs'],
    type: 'security'
  },
  {
    id: 4,
    title: 'Automating Business Processes with AI: Real-World Examples',
    description: 'Explore practical examples of how AI can transform business operations, from email automation to intelligent task routing.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Sep 2024',
    category: 'AI Innovation',
    tags: ['AI', 'Automation', 'Business'],
    type: 'innovation'
  },
  {
    id: 5,
    title: 'Choosing the Right Tech Stack for Your Startup',
    description: 'Strategic guidance on selecting technologies that will scale with your business, from MVP to enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Aug 2024',
    category: 'Startup Guide',
    tags: ['Strategy', 'Tech Stack', 'Startups'],
    type: 'startup'
  },
  {
    id: 6,
    title: 'Performance Optimization for React Applications',
    description: 'Proven techniques to improve React app performance, including code splitting, lazy loading, and bundle optimization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    date: 'Jul 2024',
    category: 'Performance',
    tags: ['React', 'Performance', 'Optimization'],
    type: 'technical'
  }
];

const getBadgeVariant = (type: string) => {
  switch (type) {
    case 'case-study':
      return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300';
    case 'guide':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
    case 'security':
      return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
    case 'innovation':
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
    case 'startup':
      return 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
  }
};

export default function Blog() {
  return (
    <>
      <title>Blog & Case Studies - NeuroStack Solutions</title>
      <meta name="description" content="Explore technical insights, case studies, and industry trends in web development, AI automation, and cybersecurity from NeuroStack Solutions." />
      
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Latest Insights & Case Studies
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore my latest projects, technical insights, and industry trends in web development and AI automation.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getBadgeVariant(post.type)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read more
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Button size="lg" className="group">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
