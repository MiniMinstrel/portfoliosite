type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  tagline: string
  description: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Personal Budgeting Application',
    description:
      'Bridging design and development to create a personal finance application.',
    link: '/project/personal-budgeting-application',
    video:
      'https://img.freepik.com/free-vector/dollar-sign-pattern-background_23-2150927123.jpg',
    id: 'project1',
  },
  {
    name: 'Southern Glazer\'s Auth Flow Case Study',
    description: 'Expanding on my previous job\'s work to give a login page a refresh.',
    link: 'https://motion-primitives.com/',
    video:
      'https://i.imgur.com/jgVi0wN.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Southern Glazer\'s Wine & Spirits',
    title: 'Frontend Developer',
    start: 'Jul 2024',
    end: 'Feb 2026',
    link: 'placeholder',
    id: 'work1',
    tagline: 'I had the opportunity to work across multiple divisions for half a year, then transitioned to the Digital Commerce team for the remainder of my time at Southern Glazer\'s. I worked on a variety of projects, but my main focus was on the login and password reset experiences for the company\'s B2B e-commerce platform.',
    description: [
      'Selected through a rigorous process to be part of the 10 person prestigious Next-Gen ETP career program for new graduates.',
      'Constructed new login and password reset experiences through ReactJS and popular web SDKs to successfully authenticate over 30k users since launch.',
      'Actively participated in design reviews on Figma to provide critical developer inputs, whilst also maintaining suitable UX as a top priority.',
    ]
  },
  {
    company: 'UF Embodied Learning Experiences Lab',
    title: 'Research Assistant',
    start: 'Aug 2023',
    end: 'Dec 2023',
    link: 'placeholder',
    id: 'work2',
    tagline: 'I had the privilege of working alongside lab director Dr. Sharon Lynn Chu and her research team within the University of Florida ELX Lab, which is dedicated to studying human behavior in technological contexts. My work revolved around studying college undergraduates\' performance in job interviews, and the development of educational technology for children.',
    description: [
      'Collaborated with the research team at the Embodied Learning Experience Lab while managing three college classes',
      'Conducted studies, formatted interview transcripts, and properly coded them for a job interview study',
      'Performed research into WearOS and general wearable technology for the development of an educational smartwatch app',
    ]
  },
  {
    company: 'Z Axis Solutions',
    title: 'Full Stack Software Engineer Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'placeholder',
    id: 'work3',
    tagline: 'I worked as an intern within a fast-paced startup environment, where I was responsible for implementing new features and maintaining the codebase for The Promo App, a large-scale ticket management mobile app that specializes in advertising for small businesses.',
    description: [
      'Implemented a custom error handler for teh repository to best fit the team\'s needs, which drastically reduced time spent debugging and handling errors across the app',
      'Communicated priorities each day with development team, as well as assisted with bug detection, software testing, code refactoring, and thorough documentation of the codebase',
      'Learned React.js, Node.js, and React Native within two weeks, as well as software such as Postman, Expo, Jira, and Figma to adapt to the necessary tools utilized within the company',
    ]
  },
  {
    company: 'Innovation Learning Center, Inc.',
    title: 'Technical Consultant',
    start: 'May 2022',
    end: 'Sept 2022',
    link: 'placeholder',
    id: 'work4',
    tagline: 'I served as a program lead and technical consultant for the Zero Robotics Middle School Summer Program 2022, which is a competitive programming challenge for middle school students run by MIT and NASA. My team and I were the first contacts for strategy design, social media outreach, and competition management over the 5 month program.',
    description: [
      'Consistently met with MIT, NASA, and ILC representatives to operate the Zero Robotics Middle School Summer Program 2022',
      'Created and updated detailed technical manuals, educator documents, and social media outlets for Zero Robotics staff',
      'Provided technical support in Zero Robotics\' unique C++ IDE for teams that required technical assistance with the program\'s challenge, as well as strategy development',
    ]
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Duolingo and Identity Design',
    description: 'Exploring design for purpose versus prestige',
    link: '/blog/duolingo-and-identity-design ',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/MiniMinstrel',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/john-scharff',
  },
]

export const EMAIL = 'scharff.ja@gmail.com'
