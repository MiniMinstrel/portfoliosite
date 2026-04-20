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
    tagline: 'I worked under Southern Glazer\'s Wine and Spirits frontend division, which dedicated itself to improving the user experience on their flagship website, Proof. Specifically, my team was focused on any and all aspects of the authentication and identity management, including implementations of webpages related to it.',
    description: [
      'Constructed new login and password reset experiences through ReactJS, popular web SDKs, and SAP Hybris environments to successfully authenticate over 30k users since initial launch',
      'Wrote thorough documentation and unit tests with over 90% code coverage to take initiative and prepare excellent resources for the team to utilize within a GitHub monorepository environment',
      'Utilized Splunk dashboards to examine logs in real-time and fix production-level bugs within a day',
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
      'Collaborated with the research team at the UF ELX Lab while managing three college classes to examine human behavior within technological contexts',
      'Efficiently conducted, formatted, and coded interview transcripts for over 25 mock job interviews for a behavioral analysis within a job training study',
      'Presented findings to the head researcher through appropriate diagrams and reports to draw actionable insights from the research',
    ]
  },
  {
    company: 'Z Axis Solutions',
    title: 'Full Stack Software Engineer Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'placeholder',
    id: 'work3',
    tagline: 'I worked on a small, diverse team to implement web and mobile versions of The Promo App, a large-scale ticket management application that specializes in advertising/marketing for small businesses. The internship lasted 3 months, in which I was tasked to build and test both implementations extensively alongside a seasoned team of developers.',
    description: [
      'Developed a modern UI for the mobile application’s web port through React Native, ensuring responsive breakpoints, cross-browser compatibility, and accessibility needs were considered and added',
      'Implemented a custom error handler in JavaScript that was widely utilized throughout the GitHub repository to properly triage exceptions and maintain proper UX across the web and mobile applications',
      'Learned MERN stack and React Native within two weeks, as well as software such as Postman, Expo, Jira, and Figma to adapt to the necessary tools utilized within the company',
    ]
  },
  {
    company: 'Innovation Learning Center, Inc.',
    title: 'Technical Consultant',
    start: 'May 2022',
    end: 'Sept 2022',
    link: 'placeholder',
    id: 'work4',
    tagline: 'I worked remotely as a subject matter expert and program lead on behalf of a non-profit to direct a tech-based summer program headed by MIT and NASA. The program aimed to teach middle school students the basics of programming through hands-on activities, as well as competing in various challenges regarding robotics.',
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
