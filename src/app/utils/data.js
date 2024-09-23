import Skills from "../components/Skills"
import javascript from "../../../public/images/skills/javascript.png"
import react from "../../../public/images/skills/react.png"
import next from "../../../public/images/skills/next.png"
import node from "../../../public/images/skills/node.png"
import mongodb from "../../../public/images/skills/mongodb.png"
import mysql from "../../../public/images/skills/mysql.png"
import postgres from "../../../public/images/skills/postgres.png"
import bash from "../../../public/images/skills/bash.png"
import Link from "next/link"
import Experience from "../components/Experience"

export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <Skills />
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <Experience />
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="text-[#ADB7BE] underline">
                {/* <li><a href="/SAG_Integration_Professional_Certificate.pdf" target="_blank">SAG Integration Professional Certificate</a></li>
                <li><a href="/SAG_API_Professional_Certificate.pdf" target="_blank">SAG API Professional Certificate</a></li>
                <li><a href="/Google_Cloud_Digital_Leader_Certificate.pdf" target="_blank">Cloud Digital Leader - Google Cloud</a></li>
                <li><a href="/Creative_JavaScript_Course.png" target="_blank">Creative JavaScript Course</a></li>
                <li><a href="/TypeScript_for_Beginners.png" target="_blank">TypeScript for Beginners</a></li>
                <li><a href="/React_Testing.png" target="_blank">React Testing with RTL & Jest</a></li> */}
                <li><a href="https://www.udemy.com/certificate/UC-28e759da-82f8-4483-9929-8080256bd630/" target="_blank">Bash Shell Scripting: Crash Course For Beginners</a></li>
                <li><a href="https://www.hackerrank.com/certificates/188c9c24894e" target="_blank">JavaScript (Basic) Certificate</a></li>
            </ul>
        )
    }
]

export const PROJECT_DATA = [
    {
        id: 1,
        title: "Invoice Generator",
        description: "ReactJS, Bootstrap, JSpdf, html2canvas",
        image: "/images/projects/invoice_app.png",
        tags: ['All', 'Frontend', 'ReactJS'],
        gitUrl: "https://github.com/raj-kubal99/Invoice-Generator",
        previewUrl: "https://invoice-generator-psi-three.vercel.app/"
    },
    {
        id: 2,
        title: "Snake Game",
        description: "ReactJS, CSS, Github Pages",
        image: "/images/projects/snake_game.png",
        tags: ['All', 'Frontend', 'ReactJS'],
        gitUrl: "https://github.com/raj-kubal99/Snake-Game",
        previewUrl: "https://raj-kubal99.github.io/Snake-Game/"
    },
    {
        id: 3,
        title: "Portfolio",
        description: "NextJS, ReactJS",
        image: "/images/projects/portfolio.png",
        tags: ['All', 'Fullstack', 'Frontend', 'Backend', 'NextJS', 'ReactJS'],
        gitUrl: "https://github.com/raj-kubal99/Raj-Kubal",
        previewUrl: "https://raj-kubal.vercel.app/"
    },
    {
        id: 4,
        title: "MVC Node App",
        description: "NodeJS, ExpressJS, MySQL",
        image: "/images/projects/CC_POC.png",
        tags: ['All', 'Backend', 'NodeJS', 'MySQL', 'Express'],
        gitUrl: "https://github.com/raj-kubal99/POC-Backend-Nodejs",
        previewUrl: "https://github.com/raj-kubal99/POC-Backend-Nodejs"
    },
    // {
    //     id: 5,
    //     title: "SnapDev",
    //     description: "NextJS, ReactJS, Prisma, MongoDB",
    //     image: "/images/projects/SnapDev.png",
    //     tags: ['All', 'Fullstack', 'NextJS', 'ReactJS', 'Prisma', 'MongoDB'],
    //     gitUrl: "https://github.com/AishwaryaParab/SnapDev-Blog",
    //     previewUrl: "https://snap-dev-blog.vercel.app/"
    // },
    // {
    //     id: 6,
    //     title: "Movix",
    //     description: "ReactJS, Redux, Infinite Scrolling, TMDB API",
    //     image: "/images/projects/Movix.png",
    //     tags: ['All', 'Frontend', 'ReactJS', 'Redux'],
    //     gitUrl: "https://github.com/AishwaryaParab/movix",
    //     previewUrl: "https://aishwaryaparab.github.io/movix/"
    // },
    // {
    //     id: 3,
    //     title: "BlueRockTek",
    //     description: "NextJS, ReactJS",
    //     image: "/images/projects/BlueRockTek.png",
    //     tags: ['All', 'Frontend', 'NextJS'],
    //     gitUrl: "https://github.com/AishwaryaParab/bluerocktek",
    //     previewUrl: "https://bluerocktek.in/"
    // },
    // {
    //     id: 4,
    //     title: "Advanced Filtering",
    //     description: "ReactJS, JavaScript filtering methods",
    //     image: "/images/projects/AdvancedFiltering.png",
    //     tags: ['All', 'Frontend', 'ReactJS'],
    //     gitUrl: "https://github.com/AishwaryaParab/advanced-filtering",
    //     previewUrl: "https://aishwaryaparab.github.io/advanced-filtering/"
    // },
    // {
    //     id: 5,
    //     title: "Aventek",
    //     description: "ReactJS",
    //     image: "/images/projects/Aventek.png",
    //     tags: ['All', 'Frontend', 'ReactJS'],
    //     gitUrl: "https://github.com/AishwaryaParab/Aventek",
    //     previewUrl: "https://aventek.in/"
    // },
    // {
    //     id: 6,
    //     title: "Sushiman",
    //     description: "HTML, CSS, Vanilla JavaScript",
    //     image: "/images/projects/Sushiman.png",
    //     tags: ['All', 'Frontend', 'HTML', 'CSS'],
    //     gitUrl: "https://github.com/AishwaryaParab/sushiman",
    //     previewUrl: "https://aishwaryaparab.github.io/sushiman/"
    // },
    // {
    //     id: 7,
    //     title: "Coolors",
    //     description: "HTML, CSS, Vanilla JavaScript",
    //     image: "/images/projects/Coolors.png",
    //     tags: ['All', 'Frontend', 'JavaScript'],
    //     gitUrl: "https://github.com/AishwaryaParab/coolors",
    //     previewUrl: "https://aishwaryaparab.github.io/coolors/"
    // },
    // {
    //     id: 8,
    //     title: "Book Landing Page",
    //     description: "HTML, Tailwind CSS, UI Design",
    //     image: "/images/projects/BookLandingPage.png",
    //     tags: ['All', 'Frontend', 'Tailwind', 'Design'],
    //     gitUrl: "https://github.com/AishwaryaParab/book-landing-page",
    //     previewUrl: "https://aishwaryaparab.github.io/book-landing-page/"
    // },
    // {
    //     id: 9,
    //     title: "HooBank",
    //     description: "ReactJS, UI Design",
    //     image: "/images/projects/HooBank.png",
    //     tags: ['All', 'Frontend', 'ReactJS', 'Design'],
    //     gitUrl: "https://github.com/AishwaryaParab/HooBank",
    //     previewUrl: "https://aishwaryaparab.github.io/HooBank/"
    // },
    // {
    //     id: 12,
    //     title: "Travel Pin",
    //     description: "ReactJS, NodeJS, MongoDB, Express, Mapbox",
    //     image: "/images/projects/TravelPin.png",
    //     tags: ['All', 'Fullstack', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mapbox'],
    //     gitUrl: "https://github.com/AishwaryaParab/travel-pin",
    //     previewUrl: "https://travel-pin-client.onrender.com/"
    // },
]

export const skills = [
    {
        id: 1,
        name: "JavaScript",
        img: javascript
    },
    {
        id: 2,
        name: "React",
        img: react
    },
    {
        id: 3,
        name: "Next",
        img: next
    },
    {
        id: 4,
        name: "Node",
        img: node
    },
    {
        id: 5,
        name: "MongoDB",
        img: mongodb
    },
    {
        id: 6,
        name: "MySql",
        img: mysql
    },
    {
        id: 7,
        name: "Postgres",
        img: postgres
    }, 
    {
        id: 8,
        name: "Bash Shell Scripting",
        img: bash
    }, 
]

export const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "HugeLeap",
        period: "Sept 2023 - Present"
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Persistent Systems",
        period: "Aug 2021 - Sept 2023"
    }
]

export const achievements = [
    {
        metric: "Professional Experience",
        value: "3",
        postfix: "+"
    },
    {
        metric: "Work Projects",
        value: "3",
        postfix: "+"
    },    
    {
        metric: "Volunteer Work",
        value: "10",
        postfix: "+"
    },
    {
        metric: "Technology",
        value: "15",
        postfix: "+"
    }
]

export const workExperiences = [
    {
      companyName: 'HugeLeap',
      logo: "/images/company/hugeleap.png",
      date: 'Sept 2023 - Present',
      jobRole: [
        {
            role: "Full Stack Developer",
            type: "Product Development",
            period: "Sept 2023 - Present",
            responsibilities: [
                'Optimized Next.js apps with code splitting and virtual DOM techniques for enhanced performance.',
                'Integrated external APIs to fetch data from remote servers and improve application functionality.',
                'Developed React components with ES6, Context API, and Webpack for a scalable e-commerce site.',
                'Utilized JavaScript libraries (D3.js, Bootstrap) to design and implement user interfaces per client specs.',
                'Ledbackendteam in Node.js for API development and Postgres database management.',
                'Directed team activities, managed PR reviews, and oversaw feature releases and application maintenance'
            ]
        }
      ]
    },
    {
      companyName: 'Persistent Systems',
      logo: "/images/company/psl.png",
      date: 'Aug 2021 - Sept 2023',
      jobRole: [
        {
            role: "IAM Product Engineering",
            type: "Client - IBM",
            period: "Jan 2023 - Sept 2023",
            responsibilities: [
                'Developed and maintained tool to automate porting process, using Python and React.',
                'Led the migration of UI from halfmoon UI framework to carbon design system. Translated intricate wireframes and designs into high quality React code using Carbon framework, seamlessly integrating with the tool.',
                'Contributed to the development of backend services and APIs using Node Js.',
                'Proactively implemented new features and enhancements to meet evolving client requirements within an agile project structure, collaborating closely with a small team of 4 members.',
                'Implemented comprehensive unit tests and API tests, significantly reducing bugs, and elevating overall code quality to ensure a reliable and efficient application.'
              ]
        },
        {
            role: "UI Development",
            type: "Client - IBM",
            period: "Aug 2021 - Dec 2022",
            responsibilities: [
                'UIdevelopment as per the shared UX design.',
                'Integration of backend API with developed UI.',
                'Implementing mockup APIs for testing UI functionalities.',
                'Testing application for end-to-end functionality.',
                'WorkedonUIcode-peer review and PR reviews'
            ]
        }
      ]
    }
];