import React from 'react';
import { Phone, Mail, MapPin, Globe, Calendar } from 'lucide-react';

export default function ProfessionalCV() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="bg-slate-800 text-white p-8 md:w-1/3">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">CONTACT</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">richard@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">123 Main St, New York</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} />
                <span className="text-sm">www.richardportfolio.com</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Calendar size={14} />
                  <span className="text-xs text-gray-300">2018 - 2022</span>
                </div>
                <h4 className="font-semibold text-sm">Bachelor of Business</h4>
                <p className="text-xs text-gray-300">MARQUEE UNIVERSITY</p>
                <p className="text-xs text-gray-400 mt-1">Marketing & Business Management</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Calendar size={14} />
                  <span className="text-xs text-gray-300">2016 - 2018</span>
                </div>
                <h4 className="font-semibold text-sm">Bachelor of Business</h4>
                <p className="text-xs text-gray-300">MARQUEE UNIVERSITY</p>
                <p className="text-xs text-gray-400 mt-1">Marketing & Business Management</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">SKILLS</h3>
            <div className="space-y-2">
              {[
                'Project Management',
                'Public Relations',
                'Teamwork',
                'Time Management',
                'Leadership',
                'Effective Communication',
                'Critical Thinking'
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">LANGUAGES</h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">English</span>
                <span className="text-xs text-gray-300 ml-2">(Fluent)</span>
              </div>
              <div>
                <span className="text-sm font-medium">French</span>
                <span className="text-xs text-gray-300 ml-2">(Fluent)</span>
              </div>
              <div>
                <span className="text-sm font-medium">German</span>
                <span className="text-xs text-gray-300 ml-2">(Beginner)</span>
              </div>
              <div>
                <span className="text-sm font-medium">Spanish</span>
                <span className="text-xs text-gray-300 ml-2">(Intermediate)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="p-8 md:w-2/3">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">RICHARD <span className="font-light">SANCHEZ</span></h1>
            <p className="text-lg text-gray-600 font-medium">MARKETING MANAGER</p>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">PROFILE</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">WORK EXPERIENCE</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">Bonsai Studio</h3>
                    <p className="text-blue-600 font-medium">Marketing Manager & Specialist</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2016 - PRESENT</span>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Analyze market trends and consumer behavior to identify new business opportunities and maximize brand growth potential.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Manage comprehensive marketing campaigns and execute time and resource management.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">Froggle Studio</h3>
                    <p className="text-blue-600 font-medium">Marketing Manager & Specialist</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2013 - 2016</span>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Create and manage the marketing budget, ensuring efficient allocation of resources and maximizing campaign impact.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Build and maintain relationships with key stakeholders, including clients, vendors, and internal teams.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Monitor brand performance, analyze marketing campaign and implement improvements based on data-driven insights.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">Sagebrush Studio</h3>
                    <p className="text-blue-600 font-medium">Marketing Manager & Specialist</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2010 - 2013</span>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Develop and implement strategic marketing plans, initiatives, and activities to support marketing objectives.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-2">•</span>
                    <span>Monitor and measure brand development and marketing effectiveness to determine ROI of marketing campaigns and initiatives.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reference Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">REFERENCE</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800">Estelle Darcy</h4>
                <p className="text-sm text-gray-600 mb-2">Wardfire Inc. / CEO</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} />
                    <span>estelle@wardfire.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Harper Richard</h4>
                <p className="text-sm text-gray-600 mb-2">Froggle Studio / CEO</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} />
                    <span>harper@froggle.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}