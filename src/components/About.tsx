import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Users } from "lucide-react";

const About = () => {
  const skills = {
    "Programming": ["Java", "C++", "C", "C#", "R", "SQL"],
    "Tools & Technologies": ["GitHub", "Xcode", "Unreal Engine", "Visual Studio Code", "RStudio"],
    "AI & Data": ["Predictive Modeling", "AI Training", "Data Analysis", "JSON"],
    "Soft Skills": ["Customer Service", "Human Factors", "Multilingual", "Team Leadership"]
  };

  const education = [
    {
      degree: "BASc, Computer Engineering",
      school: "University of British Columbia",
      location: "Vancouver, B.C.",
      period: "Sept 2024 – Dec 2027",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Associate of Science, Mathematics",
      school: "Douglas College",
      location: "New Westminster, B.C.",
      period: "May 2022 – Apr 2024",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Engineering student with a drive for innovation 
            and a commitment to creating meaningful technological solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm currently pursuing my Bachelor's in Computer Engineering at UBC, 
                building on a strong foundation in mathematics from Douglas College. 
                My passion lies in bridging the gap between theoretical knowledge and 
                practical applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From developing fitness trackers to creating AI-powered chatbots, 
                I enjoy tackling complex problems and turning ideas into functional solutions. 
                My experience spans across various domains including game development, 
                data science, and web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm tutoring students in mathematics, helping them 
                build confidence and discover the beauty of problem-solving.
              </p>
            </div>

            {/* Education */}
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 text-lg">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              <div className="gradient-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;