import React from 'react';
import { Award, Target, Heart, TrendingUp, Briefcase, GraduationCap, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo } from '../mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Expertise',
      description: 'Chartered Accountant with deep knowledge of Indian tax laws and compliance requirements'
    },
    {
      icon: Heart,
      title: 'Ethics',
      description: 'Committed to highest standards of professional ethics and confidentiality'
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Meticulous attention to detail ensuring error-free compliance and filings'
    },
    {
      icon: TrendingUp,
      title: 'Client Growth',
      description: 'Focused on helping businesses grow through strategic tax planning and advisory'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Clients Served', icon: Users },
    { number: '12+', label: 'Years Experience', icon: Briefcase },
    { number: '100%', label: 'Compliance Rate', icon: Target },
    { number: '24/7', label: 'Support', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[3rem] opacity-20 blur-2xl"></div>
                <div className="relative glass-card rounded-[3rem] p-2 backdrop-blur-2xl overflow-hidden">
                  <img 
                    src={businessInfo.profileImage} 
                    alt={businessInfo.founderName}
                    className="w-full h-auto object-cover rounded-[2.5rem]"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-white order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">ABOUT ME</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                <span className="gradient-text">{businessInfo.founderName}</span>
              </h1>
              
              <p className="text-2xl text-emerald-300 font-bold mb-6">
                {businessInfo.qualification}
              </p>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {businessInfo.detailedBio.intro}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-2xl backdrop-blur-xl">
                  <div className="text-3xl font-black text-white mb-1">{businessInfo.experience}+</div>
                  <div className="text-emerald-300 text-sm font-semibold">Years Experience</div>
                </div>
                <div className="glass-card p-4 rounded-2xl backdrop-blur-xl">
                  <div className="text-3xl font-black text-white mb-1">500+</div>
                  <div className="text-emerald-300 text-sm font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Profile Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {/* Expertise */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-10 rounded-3xl border-2 border-emerald-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Professional Expertise</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {businessInfo.detailedBio.expertise}
              </p>
            </div>

            {/* Approach */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border-2 border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Client-Centric Approach</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {businessInfo.detailedBio.approach}
              </p>
            </div>

            {/* Vision & Track Record */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border-2 border-purple-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Vision & Track Record</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {businessInfo.detailedBio.vision}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {businessInfo.detailedBio.commitment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Achievements in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-lg text-slate-600">
              Driving success through dedication and expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-slate-900 mb-2">{achievement.number}</div>
                  <div className="text-sm font-semibold text-slate-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-slate-300 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Ready to experience professional, reliable tax and compliance services?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="inline-block">
              <button className="bg-white hover:bg-slate-50 text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all">
                Get in Touch
              </button>
            </a>
            <a href={`tel:${businessInfo.phone}`} className="inline-block">
              <button className="glass hover:bg-white/20 border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all">
                Call {businessInfo.phone}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
