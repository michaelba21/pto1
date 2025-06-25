import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Plug, 
  Shield, 
  Bot, 
  Cloud, 
  Lightbulb, 
  ArrowRight, 
  Check,
  Rocket,
  Users,
  Factory,
  Briefcase
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications using React, Node.js, and modern databases. From MVP to enterprise-scale solutions.',
    features: ['React, Vue.js, HTML/CSS', 'Node.js, Express, Django', 'MySQL, MongoDB, PostgreSQL'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Plug,
    title: 'Custom API Design & Integration',
    description: 'Scalable RESTful and GraphQL APIs with third-party integrations for payments, authentication, and CRM systems.',
    features: ['RESTful & GraphQL APIs', 'Payment & Auth Integration', 'Mobile, Web, IoT endpoints'],
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Support',
    description: 'Comprehensive security audits, vulnerability assessments, and GDPR-compliant solutions to protect your business.',
    features: ['Security code reviews', 'Vulnerability scans', 'GDPR-ready solutions'],
    gradient: 'from-amber-500 to-amber-600'
  },
  {
    icon: Bot,
    title: 'AI-Powered Automations',
    description: 'Smart automation solutions using OpenAI and custom AI models to optimize workflows and reduce manual tasks.',
    features: ['AI agents for task optimization', 'LLM integration (OpenAI, DeepSeek)', 'Business process enhancement'],
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Cloud,
    title: 'DevOps & Hosting',
    description: 'Secure hosting solutions, CI/CD pipelines, and infrastructure management for optimal performance and reliability.',
    features: ['Vercel, Netlify, custom VPS', 'CI/CD pipeline setup', 'Performance optimization'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Lightbulb,
    title: 'Technical Consultation',
    description: 'Strategic guidance on technology stack selection, architecture design, and digital transformation planning.',
    features: ['Architecture planning', 'Tech stack recommendations', 'Digital transformation'],
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

const clientTypes = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Get to MVP fast with scalable architecture',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: Users,
    title: 'Agencies',
    description: 'Overflow support & custom backend solutions',
    color: 'text-cyan-600 dark:text-cyan-400'
  },
  {
    icon: Factory,
    title: 'Factories',
    description: 'AI workflows during deadline pressure',
    color: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    description: 'Portfolio, booking & personal branding sites',
    color: 'text-amber-600 dark:text-amber-400'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From full-stack development to AI automation and cybersecurity, I offer comprehensive solutions tailored to your business needs.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" asChild className="group/btn">
                    <Link href="/contact">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Who I Help Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Who I Help</h3>
            <p className="text-gray-600 dark:text-gray-300">Tailored solutions for different business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client) => {
              const IconComponent = client.icon;
              return (
                <div key={client.title} className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className={`w-8 h-8 ${client.color}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{client.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{client.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
