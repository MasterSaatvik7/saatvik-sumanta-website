import React, { useState, useEffect } from 'react';
import { Rocket, Cpu, Zap, GitBranch, Mail, Linkedin, MapPin, Code2, Brain, Radio, Database, Terminal, Github, Globe, ExternalLink } from 'lucide-react';

export default function EngineerPortfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [terminalText, setTerminalText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const fullTerminalText = "$ whoami\nsaatvik.sumanta\n$ cat skills.txt\n> Quantum Computing • Robotics • Machine Learning\n$ status\n> Building the future, one algorithm at a time...";
  const fullTerminalText = "$ whoami\nsaatvik.sumanta\n$ cat profile.txt\n> AI & Robotics Engineer | Quantum ML Researcher\n$ cat focus.txt\n> Embedded Systems • Autonomous Robotics • Applied ML\n$ status\n> Engineering systems that operate in the real world.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // const projects = [
  //   {
  //     title: "Lunar Vitalis",
  //     subtitle: "IAC 2025 Conference Paper",
  //     description: "Communication relay router concept for lunar missions in permanently shadowed regions",
  //     icon: <Rocket className="w-6 h-6" />,
  //     tags: ["Aerospace", "Communications", "Research"],
  //     link: "https://github.com/yourusername/lunar-vitalis" // Replace with actual link
  //   },
  //   {
  //     title: "MOON Robot",
  //     subtitle: "Mobile Orb for Omnidirectional Navigation",
  //     description: "Self-balancing spherical robot with GPS, IMU, and real-time navigation",
  //     icon: <Radio className="w-6 h-6" />,
  //     tags: ["Robotics", "Embedded Systems", "Arduino"],
  //     link: "https://github.com/yourusername/moon-robot" // Replace with actual link
  //   },
  //   {
  //     title: "Swarm MicroRobots",
  //     subtitle: "Self-Assembling Simulation",
  //     description: "Python simulation using boid-inspired algorithms for dynamic formations",
  //     icon: <GitBranch className="w-6 h-6" />,
  //     tags: ["Python", "Simulation", "Algorithms"],
  //     link: "https://github.com/yourusername/swarm-microrobots" // Replace with actual link
  //   },
  //   {
  //     title: "Quantum ML",
  //     subtitle: "KwantumG Research Labs",
  //     description: "Developing quantum computing algorithms and conducting QML research",
  //     icon: <Brain className="w-6 h-6" />,
  //     tags: ["Quantum", "Machine Learning", "Research"],
  //     link: "https://github.com/yourusername/quantum-ml" // Replace with actual link
  //   }
  // ];

  const projects = [
  {
    title: "Lunar Vitalis",
    subtitle: "IAC 2025 • Research Paper",
    description:
      "Proposed a resilient lunar communication relay architecture for permanently shadowed regions, enabling fault-tolerant data routing and extended mission lifetimes in extreme environments.",
    icon: <Rocket className="w-6 h-6" />,
    tags: ["Space Systems", "Networking", "Research"],
    link: "https://github.com/yourusername/lunar-vitalis"
  },
  {
    title: "MOON Robot",
    subtitle: "Mobile Orb for Omnidirectional Navigation",
    description:
      "Designed a self-balancing spherical robot integrating BLDC actuation, IMU fusion, and control logic for omnidirectional mobility and terrain-adaptive navigation.",
    icon: <Radio className="w-6 h-6" />,
    tags: ["Robotics", "Embedded Systems", "Control"],
    link: "https://github.com/yourusername/moon-robot"
  },
  {
    title: "Swarm MicroRobots",
    subtitle: "Self-Assembling Swarm Simulation",
    description:
      "Developed a Python-based swarm simulation inspired by boid dynamics to study decentralized coordination, adaptive shape formation, and emergent collective behavior.",
    icon: <GitBranch className="w-6 h-6" />,
    tags: ["Swarm Robotics", "Algorithms", "Simulation"],
    link: "https://github.com/yourusername/swarm-microrobots"
  },
  {
    title: "Quantum Machine Learning",
    subtitle: "KwantumG Research Labs",
    description:
      "Worked on quantum algorithms and quantum machine learning workflows, exploring hybrid quantum–classical models and variational circuits for data-driven problems.",
    icon: <Brain className="w-6 h-6" />,
    tags: ["Quantum Computing", "QML", "Research"],
    link: "https://github.com/yourusername/quantum-ml"
  }
];


  // const experiences = [
  //   {
  //     role: "Quantum ML Developer Intern",
  //     company: "KwantumG Research Labs",
  //     period: "Dec 2024 - Apr 2025",
  //     description: "Quantum algorithms & QML research"
  //   },
  //   {
  //     role: "Programmer Analyst Trainee",
  //     company: "Cognizant Technology Solutions",
  //     period: "Apr 2025",
  //     description: "Azure Cloud & Data Pipelines"
  //   },
  //   {
  //     role: "Research Intern",
  //     company: "Centre for Advanced Data Science, VIT",
  //     period: "Mar 2023 - Aug 2023",
  //     description: "Neural Networks for PDEs"
  //   }
  // ];

const experiences = [
  {
    role: "Quantum Machine Learning Developer Intern",
    company: "KwantumG Research Labs",
    period: "Dec 2024 – Apr 2025",
    description:
      "Researched and implemented quantum algorithms and hybrid QML pipelines, focusing on variational circuits, data encoding strategies, and experimental benchmarking."
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    period: "Apr 2025",
    description:
      "Worked with Azure cloud services and data pipelines, gaining hands-on exposure to enterprise-scale systems, deployment workflows, and cloud-based analytics."
  },
  {
    role: "Research Intern",
    company: "Centre for Advanced Data Science, VIT",
    period: "Mar 2023 – Aug 2023",
    description:
      "Conducted research on neural networks for solving partial differential equations (PDEs), focusing on model stability, convergence, and numerical accuracy."
  }
];

  // const skills = [
  //   { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  //   { name: "C/C++", icon: <Terminal className="w-5 h-5" /> },
  //   { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
  //   { name: "ROS", icon: <Cpu className="w-5 h-5" /> },
  //   { name: "Azure Cloud", icon: <Database className="w-5 h-5" /> },
  //   { name: "Machine Learning", icon: <Zap className="w-5 h-5" /> }
  // ];

const skills = [
  { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  { name: "C / C++", icon: <Terminal className="w-5 h-5" /> },
  { name: "Machine Learning", icon: <Brain className="w-5 h-5" /> },
  { name: "Robotics & ROS", icon: <Cpu className="w-5 h-5" /> },
  { name: "Embedded Systems", icon: <Radio className="w-5 h-5" /> },
  { name: "Cloud & Data", icon: <Database className="w-5 h-5" /> }
];



  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,65,0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'left 0.1s, top 0.1s'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header Terminal */}
        <div className="border-2 border-green-500 bg-black/90 backdrop-blur-sm mb-12 shadow-[0_0_20px_rgba(0,255,65,0.3)] animate-[fadeIn_1s_ease-in]">
          <div className="bg-green-500 text-black px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-700" />
            </div>
            <span className="font-bold">terminal@saatvik-portfolio</span>
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {terminalText}
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
            </pre>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 animate-[slideInLeft_0.8s_ease-out]">
          <h1 className="text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">SAATVIK</span>
            <span className="text-green-400 ml-4">SUMANTA</span>
          </h1>
          <div className="flex items-center gap-4 text-green-300 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Noida, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:saatvik.sumanta02@gmail.com" className="hover:text-white transition-colors">
                saatvik.sumanta02@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a 
                href="https://www.linkedin.com/in/saatvik-sumanta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* <p className="text-xl text-green-200 max-w-3xl border-l-4 border-green-500 pl-4">
            Engineering graduate specializing in quantum computing, robotics, and machine learning. 
            Building scalable systems that push the boundaries of what's possible.
          </p> */}
          <p className="text-xl text-green-200 max-w-3xl border-l-4 border-green-500 pl-4">
            B.Tech Computer Science and Engineering student specializing in AI & Robotics. 
            I design and build intelligent systems across embedded hardware, autonomous robotics, 
            machine learning, and quantum computing—bridging theory with deployable engineering.
          </p>

        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {['projects', 'experience', 'skills', 'leadership'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 border-2 transition-all ${
                activeSection === section
                  ? 'border-green-400 bg-green-400/10 text-white shadow-[0_0_10px_rgba(0,255,65,0.5)]'
                  : 'border-green-600 text-green-400 hover:border-green-400 hover:bg-green-400/5'
              }`}
            >
              {'>'} {section.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_0.5s_ease-in]">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border-2 border-green-600 bg-black/80 p-6 hover:border-green-400 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-green-400 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-green-300 text-sm mb-2">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-green-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-green-500/10 border border-green-500 text-green-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all group/link"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="space-y-6 animate-[fadeIn_0.5s_ease-in]">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-green-500 pl-6 pb-6 relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-green-400 rotate-45" />
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-green-300">{exp.company}</p>
                  </div>
                  <span className="text-green-400 border border-green-500 px-3 py-1 text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-green-200">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="animate-[fadeIn_0.5s_ease-in]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="border-2 border-green-600 bg-black/80 p-4 flex flex-col items-center gap-2 hover:border-green-400 hover:bg-green-400/5 transition-all hover:scale-105"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {skill.icon}
                  <span className="text-sm font-bold">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="border-2 border-green-600 bg-black/80 p-6">
              <h3 className="text-xl font-bold text-white mb-4">TECHNICAL STACK</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-400 font-bold mb-2">Languages:</p>
                  <p className="text-green-200">Python, C/C++, Java, MySQL, NoSQL</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">Technologies:</p>
                  <p className="text-green-200">TensorFlow, YOLO, Pandas, Flask, ROS, Gazebo, Power BI</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">Cloud & DevOps:</p>
                  <p className="text-green-200">Azure Cloud, Git, CI/CD, Unix/Linux</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">Domains:</p>
                  <p className="text-green-200">ML, Data Science, Robotics, Quantum Computing</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Section */}
        {activeSection === 'leadership' && (
          <div className="space-y-6 animate-[fadeIn_0.5s_ease-in]">
            <div className="border-2 border-green-500 bg-black/80 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Student Rocket Team Co-founder</h3>
              </div>
              <p className="text-green-200 mb-4">
                Co-founded the first Student Rocket Team at VIT Chennai, establishing technical workflows, 
                industry collaborations, and testing infrastructure for competitive sounding rocket development.
              </p>
              <ul className="space-y-2 text-green-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Managed DAQ software production for rocket engine testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Led payload division developing Arduino-based test payload for measuring Earth's magnetic field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Spearheaded microgravity experiment payload planning for future launches</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-green-600 bg-black/80 p-6">
              <h3 className="text-xl font-bold text-white mb-4">EDUCATION</h3>
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <p className="text-green-400 font-bold">Vellore Institute of Technology, Chennai</p>
                  <p className="text-green-200">B.Tech in Computer Science and Engineering</p>
                  <p className="text-green-300 text-sm">(AI & Robotics Specialization)</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">CGPA: 8.43</p>
                  <p className="text-green-300 text-sm">Sept 2021 - May 2025</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-green-600 text-center">
          <p className="text-green-400">
            <span className="text-green-300">$</span> Built with React • Powered by passion for innovation
          </p>
          <p className="text-green-600 text-sm mt-2">
            © 2025 Saatvik Sumanta. All systems operational.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
