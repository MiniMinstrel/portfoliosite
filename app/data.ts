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
    link: 'https://pro.motion-primitives.com/',
    video:
      'placeholder',
    id: 'project1',
  },
  {
    name: 'Southern Glazer\'s Auth Flow Case Study',
    description: 'Expanding on my previous job\'s work to give a login page a refresh.',
    link: 'https://motion-primitives.com/',
    video:
      'placeholder',
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
  },
  {
    company: 'UF Embodied Learning Experiences Lab',
    title: 'Research Assistant',
    start: 'Aug 2023',
    end: 'Dec 2023',
    link: 'placeholder',
    id: 'work2',
  },
  {
    company: 'Z Axis Solutions',
    title: 'Full Stack Software Engineer Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'placeholder',
    id: 'work3',
  },
  {
    company: 'Innovation Learning Center, Inc.',
    title: 'Technical Consultant',
    start: 'May 2022',
    end: 'Sept 2022',
    link: 'placeholder',
    id: 'work4',
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
