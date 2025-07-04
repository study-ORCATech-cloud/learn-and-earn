
import { LearningPath } from '../types/learningPath';

export const learningPaths: LearningPath[] = [
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Complete learning path to become a DevOps Engineer with containerization, orchestration, and automation skills',
    longDescription: 'Master the complete DevOps workflow from basic version control to enterprise-level automation. This path covers Git, Docker, Kubernetes, CI/CD pipelines, infrastructure as code, monitoring, and security best practices.',
    icon: 'clog',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'DevOps',
    estimatedHours: 300,
    courseIds: ['devops-beginner', 'devops-intermediate', 'devops-professional'],
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Infrastructure', 'Automation'],
    isPopular: true,
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    description: 'Complete Python development path from fundamentals to professional-level applications',
    longDescription: 'Master Python programming from basics to advanced enterprise development. Learn core Python, web frameworks, database integration, testing, and deployment strategies for building professional applications.',
    icon: '🐍',
    iconColor: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    category: 'Programming',
    estimatedHours: 270,
    courseIds: ['python-beginner', 'python-intermediate', 'python-professional'],
    tags: ['Python', 'Web Development', 'APIs', 'Databases', 'Testing'],
    isPopular: true,
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'java-developer',
    title: 'Java Developer',
    description: 'Complete Java development path from fundamentals to enterprise-level applications',
    longDescription: 'Master Java programming from basics to advanced enterprise development. Learn core Java, Spring framework, microservices, database integration, and scalable system design.',
    icon: '☕',
    iconColor: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    category: 'Programming',
    estimatedHours: 280,
    courseIds: ['java-beginner', 'java-intermediate', 'java-professional'],
    tags: ['Java', 'Spring', 'Microservices', 'Enterprise', 'Scalability'],
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'End-to-end cloud architecture path with DevOps integration and enterprise solutions',
    longDescription: 'Design and implement scalable cloud solutions. This comprehensive path combines cloud computing fundamentals with DevOps practices to create enterprise-ready architectures.',
    icon: '🏗️',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Cloud',
    estimatedHours: 370,
    courseIds: ['devops-beginner', 'cloud-beginner', 'cloud-intermediate', 'cloud-professional', 'devops-intermediate'],
    tags: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps', 'Enterprise'],
    isPopular: true,
    lastUpdated: new Date('2024-01-05')
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    description: 'Complete full-stack development journey with Python backend, React frontend, and cloud deployment',
    longDescription: 'Master both frontend and backend development with Python, React, and cloud deployment. Perfect for building modern, scalable web applications with professional deployment practices.',
    icon: '🌐',
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    category: 'Programming',
    estimatedHours: 355,
    courseIds: ['python-beginner', 'python-intermediate', 'react-beginner', 'react-intermediate', 'cloud-beginner'],
    tags: ['Python', 'React', 'Full-Stack', 'Cloud', 'Web Development'],
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'cloud-infrastructure-specialist',
    title: 'Cloud Infrastructure Specialist',
    description: 'Comprehensive path combining system administration skills with cloud technologies for infrastructure management',
    longDescription: 'Become a cloud infrastructure specialist by mastering system administration fundamentals and advanced cloud technologies. Perfect for managing enterprise cloud infrastructure and hybrid environments.',
    icon: '🖥️',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500 to-violet-500',
    category: 'Cloud',
    estimatedHours: 395,
    courseIds: ['sysadmin-beginner', 'sysadmin-intermediate', 'sysadmin-professional', 'cloud-beginner', 'cloud-intermediate'],
    tags: ['System Administration', 'Cloud Infrastructure', 'Linux', 'Enterprise', 'Hybrid Cloud'],
    isNew: true,
    lastUpdated: new Date('2024-01-25')
  }
];
