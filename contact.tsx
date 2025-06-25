import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Clock, Linkedin } from 'lucide-react';

export default function Contact() {
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Security', icon: '🛡️' }
  ];

  return (
    <>
      <title>Contact - NeuroStack Solutions</title>
      <meta name="description" content="Get in touch with NeuroStack Solutions for your web development, AI automation, and cybersecurity needs. 24-hour response guarantee." />

      <div className="pt-16">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Let's Build Something Amazing
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to start your project? Get in touch and let's discuss how I can help bring your vision to life.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contactinformatie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a 
                        href="ms-outlook://compose?to=michaelba21@yahoo.com&subject=Contact%20from%20NeuroStack%20Solutions&body=Hello%20Michael,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0ABest%20regards," 
                        className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                        onClick={(e) => {
                          // Fallback to regular mailto if Outlook protocol doesn't work
                          setTimeout(() => {
                            window.location.href = "mailto:michaelba21@yahoo.com?subject=Contact from NeuroStack Solutions&body=Hello Michael,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ABest regards,";
                          }, 100);
                        }}
                      >
                        michaelba21@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                      <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                      <a 
                        href="https://wa.me/31648540037?text=Hello%20Michael,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline text-lg"
                      >
                        06-48540037
                      </a>
                    </div>
                  </div>

                  {/* AI Image */}
                  <div className="mt-8">
                    <img 
                      src="https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg"
                      alt="AI Advancements - Future Technology"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Cards */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400">michaelba21@yahoo.com</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">24h response guarantee</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/michaelbarak/" 
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          linkedin.com/in/michaelbarak
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Professional networking</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400">Netherlands</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Dutch & English support</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                        <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Availability</h4>
                        <p className="text-gray-600 dark:text-gray-400">Currently accepting new projects</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Start date: Within 1-2 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Quick Response Promise</h3>
                    <p className="mb-6 opacity-90">
                      I understand that time is critical for your business. That's why I guarantee a response within 24 hours, often much sooner.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold">Fast, reliable, professional service</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </div>
                      ))}
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