import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, FileText, Calculator, ClipboardCheck, Building2, Scale, TrendingUp, Award, Clock, DollarSign, Users, Lightbulb, Shield, Star, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, services, whyChooseUs, testimonials } from '../mockData';

const iconMap = {
  FileText, Calculator, ClipboardCheck, Building2, Scale, TrendingUp, Lightbulb,
  Award, Clock, DollarSign, Users, Shield
};

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Elegant Hero Section - Indigo & Gold */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500 rounded-full opacity-10 blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-violet-400 rounded-full opacity-5 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Content - Takes 2 columns */}
            <div className="text-white animate-slide-in-up lg:col-span-2">
              <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-glow border border-indigo-400/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-indigo-300">{businessInfo.experience}+ Years of Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Professional
                <br />
                <span className="gradient-text">Tax & Compliance</span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                Comprehensive GST, Income Tax, Audit & USA Bookkeeping services with QuickBooks expertise. Serving individuals, startups, and established businesses across India and USA with commitment to accuracy, ethics, and timely compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-10 h-14 text-lg font-bold rounded-2xl shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all">
                    <Zap className="mr-2 w-5 h-5" />
                    Get Started
                  </Button>
                </Link>
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="glass hover:bg-white/20 text-white border-2 border-indigo-400/50 px-8 h-14 text-lg font-semibold rounded-2xl transition-all">
                    <Phone className="mr-2 w-5 h-5" />
                    {businessInfo.phone}
                  </Button>
                </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{businessInfo.experience}+</div>
                  <div className="text-sm text-slate-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">1000+</div>
                  <div className="text-sm text-slate-400 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-sm text-slate-400 font-medium">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-sm text-slate-400 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right - Key Highlights - Takes 1 column */}
            <div className="relative animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="space-y-6">
                {/* Expertise Card */}
                <div className="glass-card rounded-3xl p-6 backdrop-blur-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">Certified Expertise</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Chartered Accountant with deep knowledge of Indian tax laws, GST compliance, and international bookkeeping
                      </p>
                    </div>
                  </div>
                </div>

                {/* GST Specialist Card */}
                <div className="glass-card rounded-3xl p-6 backdrop-blur-xl border border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">GST Specialist</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Expert in GST registrations, returns, refunds, appeals & litigation with proven track record
                      </p>
                    </div>
                  </div>
                </div>

                {/* USA Bookkeeping Card */}
                <div className="glass-card rounded-3xl p-6 backdrop-blur-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">USA Bookkeeping</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Hands-on QuickBooks expertise for US-based businesses with comprehensive accounting support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview - Elegant Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Comprehensive <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge services designed for the modern business landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="group border-0 bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-violet-50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden card-3d">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/services">
                      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 font-bold group/btn">
                        Explore <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Elegant Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-bold mb-4 border border-indigo-400/30">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-indigo-300">WHY CHOOSE US</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">
              Built for <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the future of tax and compliance services today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div 
                  key={item.id} 
                  className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group backdrop-blur-xl border border-indigo-400/20"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Star className="w-4 h-4" />
              <span>CLIENT STORIES</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Trusted by <span className="gradient-text">Innovators</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                      <p className="text-indigo-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your Business Compliance?
            </h2>
            <p className="text-xl text-indigo-50 mb-10 leading-relaxed">
              Join 1000+ forward-thinking businesses leveraging our expertise for seamless tax management
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-10 h-14 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all">
                  <Zap className="mr-2 w-5 h-5" />
                  Start Now
                </Button>
              </Link>
              <a href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glass hover:bg-white/20 border-2 border-white text-white px-10 h-14 text-lg font-bold rounded-2xl">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
