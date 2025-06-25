import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Brain } from 'lucide-react';

export default function About() {
  return (
    <>
      <title>About - NeuroStack Solutions</title>
      <meta name="description" content="Learn about NeuroStack Solutions - a freelance full-stack developer based in the Netherlands, specializing in AI-powered web development and cybersecurity." />
      
      <div className="pt-16">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    About NeuroStack Solutions
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>

                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I am a freelance full-stack developer based in the Netherlands, offering tailor-made digital solutions powered by modern web technologies and artificial intelligence. I combine fast development cycles with deep technical knowledge to help businesses meet their goals — especially when time and performance matter most.
                  </p>
                  
                  <p>
                    With expertise spanning from frontend React applications to backend Node.js services, database optimization, and AI integration, I provide end-to-end solutions that drive real business value.
                  </p>

                  <p>
                    My mission is simple: <strong className="text-blue-600 dark:text-blue-400">deliver high-quality, secure, and scalable solutions fast</strong>, while maintaining clear communication and thinking two steps ahead.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">24h</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">100%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Button asChild className="group">
                    <Link href="/contact">
                      Let's discuss your project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                  alt="Professional developer working on cybersecurity concepts"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />

                {/* Mission Statement Card */}
                <Card className="p-8">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Speed</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Fast delivery without compromising quality</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Security</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Security-first approach in every solution</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Brain className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Innovation</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Leveraging AI and modern tech stack</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
