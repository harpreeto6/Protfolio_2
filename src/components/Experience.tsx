import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Math Tutor",
      company: "Self-Employed",
      location: "Surrey, B.C.",
      period: "Jan 2025 – August 2025",
      type: "Education",
      description: "Providing personalized mathematics tutoring to high school students, focusing on building confidence and understanding in complex mathematical concepts.",
      achievements: [
        "Tutored students in Algebra, Geometry, and Pre-Calculus",
        "Developed adaptive teaching methods for different learning styles",
        "Improved student confidence through encouragement and celebration of progress",
        "Maintained flexible pacing to accommodate individual student needs"
      ]
    },
    {
      title: "Customer Service Associate",
      company: "Save-On-Foods",
      location: "New Westminster, B.C.",
      period: "Mar 2022 – Dec 2023",
      type: "Retail",
      description: "Enhanced store operations through inventory management, customer service excellence, and process optimization in a fast-paced retail environment.",
      achievements: [
        "Reduced inventory discrepancies through systematic reporting",
        "Improved stock tracking accuracy and inventory management",
        "Decreased restocking times by 20-25% through strategic layout optimization",
        "Utilized multilingual skills to serve diverse customer base during peak hours"
      ]
    },
    {
      title: "Retail Supervisor",
      company: "Petro Canada",
      location: "Revelstoke, B.C.",
      period: "Mar 2020 – April 2022",
      type: "Leadership",
      description: "Led retail operations team while implementing data-driven solutions to improve efficiency, customer satisfaction, and operational processes.",
      achievements: [
        "Managed team performance during peak-hour demand periods",
        "Improved customer satisfaction through efficient service delivery",
        "Conducted comprehensive inventory audits and resolved stock issues",
        "Automated sales reporting, reducing manual work by 25-30%",
        "Implemented data-driven forecasting for optimal inventory management"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education": return "bg-skill-ai/20 text-skill-ai border-skill-ai/30";
      case "Retail": return "bg-skill-web/20 text-skill-web border-skill-web/30";
      case "Leadership": return "bg-skill-cpp/20 text-skill-cpp border-skill-cpp/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building leadership skills and practical experience across education, 
            retail, and customer service while developing technical expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-8`}>
                
                {/* Timeline Dot */}
                <div className="relative lg:flex-shrink-0 order-2 lg:order-none">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block"></div>
                </div>

                {/* Content Card */}
                <Card className={`gradient-card p-8 flex-1 group hover:scale-105 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                } order-1 lg:order-none`}>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className={`mb-3 ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center text-primary font-semibold">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold">Key Achievements</h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Spacer for alternating layout */}
                <div className="lg:flex-1 hidden lg:block order-3 lg:order-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Skills Developed Through Experience</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Leadership", "Team Management", "Customer Service", "Problem Solving",
              "Data Analysis", "Process Optimization", "Multilingual Communication",
              "Inventory Management", "Training & Mentoring", "Quality Assurance"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;