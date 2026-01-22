import React from 'react';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo } from '../mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Expertise',
      description: 'ICAI certified professional with deep knowledge of Indian tax laws and compliance requirements'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">About Us</h1>
            <p className="text-xl text-slate-600">
              Your trusted partner for tax, compliance, and business advisory services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 p-8 rounded-2xl mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div className="mb-6 md:mb-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    HRS
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{businessInfo.name}</h2>
                  <div className="space-y-2">
                    <p className="text-lg text-slate-700">
                      <span className="font-semibold">ICAI Member:</span> {businessInfo.icaiNumber}
                    </p>
                    <p className="text-lg text-slate-700">
                      <span className="font-semibold">Experience:</span> {businessInfo.experience}+ Years
                    </p>
                    <p className="text-lg text-slate-700">
                      <span className="font-semibold">Location:</span> Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">
                Welcome to <strong>{businessInfo.name}</strong>, your trusted partner for comprehensive tax and compliance solutions. With over {businessInfo.experience} years of professional experience in the field of chartered accountancy, we specialize in providing expert guidance on GST, Income Tax, Audit, and Business Advisory services.
              </p>

              <p className="text-lg leading-relaxed">
                As an ICAI certified Chartered Accountant (Member No. {businessInfo.icaiNumber}), I bring a wealth of knowledge and practical expertise to help individuals, startups, and established businesses navigate the complex landscape of Indian taxation and regulatory compliance.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Approach</h3>
              <p className="text-lg leading-relaxed">
                We believe in building long-term relationships with our clients based on trust, transparency, and timely service. Every business is unique, and we take the time to understand your specific needs, challenges, and goals to provide personalized solutions that work for you.
              </p>

              <p className="text-lg leading-relaxed">
                Our approach combines deep technical knowledge with practical business understanding. We don't just help you stay compliant – we help you optimize your tax positions, improve financial processes, and make informed business decisions.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Commitment</h3>
              <p className="text-lg leading-relaxed">
                We are committed to delivering accurate, timely, and reliable services. Our systematic approach ensures that you never miss important compliance deadlines, and our proactive communication keeps you informed about regulatory changes that may impact your business.
              </p>

              <p className="text-lg leading-relaxed">
                Whether you're a startup founder navigating business registrations for the first time, an established business seeking audit services, or an individual needing help with income tax matters, we're here to provide expert guidance and support at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to experience professional, reliable tax and compliance services? Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="inline-block">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </a>
            <a href={`tel:${businessInfo.phone}`} className="inline-block">
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-medium transition-colors">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
