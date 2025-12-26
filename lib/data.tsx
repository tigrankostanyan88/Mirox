import { Mail, Code2, Database, Bot, GraduationCap, Globe, Home, User, Briefcase, Zap } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Գլխավոր", icon: Home },
  { href: "/experience", label: "Փորձ", icon: Briefcase },
  { href: "/portfolio", label: "Պորտֆոլիո", icon: Code2 },
  { href: "/courses", label: "Դասընթացներ", icon: GraduationCap },
  { href: "/about-us", label: "Իմ Մասին", icon: User },
  { href: "/contact", label: "Կապ", icon: Mail },
];

export const HERO_DATA = {
  badge: "ՊԱՏՐԱՍՏ ԵՄ ԱՇԽԱՏԵԼ",
  title: {
    line1: "Full-Stack Web",
    highlight1: "Ծրագրավորում",
    line2: "և AI",
    highlight2: "Ավտոմատացում",
  },
  description: "Օգնում եմ բիզնեսներին թվայնացվել՝ ստեղծելով ժամանակակից կայքեր և ինտեգրելով արհեստական բանականությունը Ձեր աշխատանքային պրոցեսներում։",
  buttons: {
    primary: "Իմ Աշխատանքները",
    secondary: "Մուտք",
  },
  stats: {
    count: "100+",
    label: "Հաջողված Նախագծեր",
    subLabel: "Վեբ կայքեր և AI լուծումներ",
  },
  experience: {
    years: "4+",
    label: "Տարվա Փորձ",
  }
};

export const COURSES_PAGE_DATA = {
  hero: {
    title: {
      text: "Իմ",
      highlight: "Դասընթացները"
    },
    description: "Սովորեք պրակտիկ հմտություններ Full-Stack ծրագրավորման և AI ավտոմատացման ոլորտում: Կառուցեք իրական նախագծեր զրոյից մինչև պրոֆեսիոնալ մակարդակ:"
  },
  filters: [
    { id: "all", label: "Բոլորը" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Automation" },
    { id: "beginner", label: "Սկսնակ" },
    { id: "advanced", label: "Advanced" }
  ],
  courses: [
    {
      id: 1,
      title: "React JS Masterclass",
      image: "/images/courses/react.png",
      badge: { text: "WEB DEV", color: "cyan" },
      level: { text: "ՍԿՍՆԱԿ - ՄԻՋԻՆ", rating: "4.9" },
      description: "Սովորեք ստեղծել ժամանակակից, արագագործ վեբ կայքեր React-ով: 2 ամիս տևողությամբ պրակտիկ դասընթաց՝ իրական պորտֆոլիոյի...",
      duration: "2 ամիս",
      link: "#",
      tags: ["web", "beginner"]
    },
    {
      id: 2,
      title: "AI Բիզնեսի Համար",
      image: "/images/courses/ai.png",
      badge: { text: "AI & AUTOMATION", color: "purple" },
      level: { text: "ԲՈԼՈՐԻ ՀԱՄԱՐ", rating: "5.0" },
      description: "Ինչպես օգտագործել ChatGPT, Midjourney և Python սկրիպտներ՝ աշխատանքային պրոցեսները ավտոմատացնելու և ժամանակ...",
      duration: "1 ամիս",
      link: "#",
      tags: ["ai", "beginner"]
    },
    {
      id: 3,
      title: "Python Backend Pro",
      image: "/images/courses/python.png",
      badge: { text: "BACKEND", color: "green" },
      level: { text: "ADVANCED", rating: "4.8" },
      description: "Խորացված դասընթաց Django և FastAPI ֆրեյմվորքներով: Սովորեք կառուցել մասշտաբային API-ներ և անվտանգ...",
      duration: "3 ամիս",
      link: "#",
      tags: ["web", "advanced"]
    }
  ],
  testimonials: {
    title: "Ուսանողների Կարծիքները",
    subtitle: "Մենք հպարտ ենք մեր ուսանողների հաջողություններով:",
    items: [
      {
        id: 1,
        name: "Արմեն Պետրոսյան",
        role: "Junior Frontend Developer",
        avatar: "/images/testimonials/avatar1.png",
        quote: "React JS Masterclass-ը տվեց ինձ այն հիմքերը, որոնք անհրաժեշտ էին իմ առաջին աշխատանքը գտնելու համար: Դասերը շատ պրակտիկ էին, և ես կառուցեցի իրական նախագծեր իմ պորտֆոլիոյի համար:"
      }
    ]
  },
  cta: {
    title: "Պատրա՞ստ եք սկսել Ձեր կարիերան",
    description: "Եթե ունեք հարցեր կամ չեք կարողանում կողմնորոշվել, գրեք ինձ: Ես սիրով կօգնեմ ձեզ ընտրել ճիշտ ուղղությունը:",
    buttons: {
      primary: "Կապվել Ինձ Հետ",
      secondary: "Դիտել Պորտֆոլիոն"
    }
  }
};

export const TECH_STACK = [
  { 
    label: "React / Next.js", 
    icon: Code2, 
    iconColor: "text-cyan-400", 
    borderColor: "hover:border-cyan-500/30" 
  },
  { 
    label: "Node.js", 
    icon: Database, 
    iconColor: "text-green-400", 
    borderColor: "hover:border-green-500/30" 
  },
  { 
    label: "OpenAI API", 
    icon: Bot, 
    iconColor: "text-purple-400", 
    borderColor: "hover:border-purple-500/30" 
  },
];

export const SPECIALIZATION_DATA = {
  title: "Իմ Մասնագիտացումը",
  description: "Համադրելով ծրագրավորումը և արհեստական բանականությունը՝ ստեղծում եմ արդյունավետ լուծումներ։",
};

export const CASE_STUDIES_DATA = {
  title: "Նախընտրելի Քեյս Սթադիներ",
  description: "Իրական նախագծեր, որոնք փոխել են բիզնեսի աշխատանքի որակը և արդյունավետությունը:",
  button: "Բոլոր Նախագծերը"
};

export const CASE_STUDIES = [
  {
    tags: ["AI Automation", "FinTech"],
    title: "AI Աջակցման Համակարգ",
    description: "Ներդրվել է AI չատբոտ, որը սպասարկում է հաճախորդների 80%-ին առանց օպերատորի միջամտության՝ խնայելով ռեսուրսներ:",
    color: "blue"
  },
  {
    tags: ["System Integration", "Logistics"],
    title: "Պահեստային AI Կառավարում",
    description: "Պահեստային մնացորդների կառավարման ավտոմատացված համակարգ, որը կանխատեսում է պահանջարկը:",
    color: "green"
  }
];

export const SERVICES = [
  {
    title: "Front-end Dev",
    description: "React, Next.js, Tailwind CSS - Ժամանակակից և արագ ինտերֆեյսներ",
    icon: Code2,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    groupHoverIconBg: "group-hover:bg-blue-500/20",
    borderColor: "hover:border-cyan-500/30"
  },
  {
    title: "Back-end & API",
    description: "Node.js, Python, PostgreSQL - Հզոր սերվերային լուծումներ",
    icon: Database,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    groupHoverIconBg: "group-hover:bg-green-500/20",
    borderColor: "hover:border-green-500/30"
  },
  {
    title: "AI Solutions",
    description: "LLM Integration, Automation - Խելացի բիզնես լուծումներ",
    icon: Bot,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    groupHoverIconBg: "group-hover:bg-cyan-500/20",
    borderColor: "hover:border-cyan-500/30"
  },
  {
    title: "Mentorship",
    description: "Դասընթացներ սկսնակների և փորձառուների համար",
    icon: GraduationCap,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    groupHoverIconBg: "group-hover:bg-purple-500/20",
    borderColor: "hover:border-purple-500/30"
  },
];

export const ABOUT_DATA = {
  hero: {
    badge: "Open for new projects",
    title: {
      line1: "Կոդ,",
      line2: "Ավտոմատացում",
      line3: "և Կրթություն"
    },
    description: "Ես պարզապես կայքեր չեմ պատրաստում, ես ստեղծում եմ ավտոմատացված համակարգեր, որոնք աշխատում են Ձեզ համար, և սովորեցնում եմ ուրիշներին անել նույնը:",
    buttons: {
      primary: "Կարդալ ավելին",
      secondary: "Տեսնել աշխատանքները"
    },
    stats: [
      { value: "50+", label: "ՆԱԽԱԳԻԾ" },
      { value: "120+", label: "ՈՒՍԱՆՈՂՆԵՐ" },
      { value: "5+", label: "ՏԱՐՎԱ ՓՈՐՁ" }
    ],
    image: "/images/hero/aboutme.png"
  },
  philosophy: {
    title: "Աշխատանքային Փիլիսոփայություն",
    subtitle: "Իմ մոտեցումը հիմնված է որակի, արագության և նորարարության վրա:",
    cards: [
      {
        icon: "CleanCode",
        title: "Մաքուր Կոդ",
        description: "Կոդը պետք է լինի ոչ միայն աշխատող, այլ նաև ընթեռնելի և հեշտ պահպանվող ապագայի համար:"
      },
      {
        icon: "Efficiency",
        title: "AI Արդյունավետություն",
        description: "Ազատագրում եմ արժեքավոր ժամանակը բարդ խնդիրները AI գործիքների օգնությամբ ավտոմատացնելու համար:"
      },
      {
        icon: "Learning",
        title: "Շարունակական Կրթություն",
        description: "Տեխնոլոգիաները սրընթաց փոխվում են, և ես սովորում եմ անընդհատ՝ ուսանողներիս սովորեցնելով լավագույնը:"
      }
    ]
  },
  techStack: {
    title: "Տեխնոլոգիական Զինանոց",
    stack: [
      "JavaScript", "React.js", "Next.js", "Node.js", "Python", 
      "OpenAI API", "LangChain", "PostgreSQL", "MongoDB", 
      "Tailwind CSS", "Docker", "Git"
    ]
  },
  timeline: {
    title: "Իմ Ուղին",
    steps: [
      {
        year: "2019",
        title: "Առաջին խոշոր հաճախորդը",
        description: "Հաջողությամբ ավարտեցի e-commerce պատվեր մը, որը սկիզբ դրեց իմ ֆրիլանս կարիերային:",
        icon: "Client"
      },
      {
        year: "2021",
        title: "Դասավանդման մեկնարկ",
        description: "Սկսեցի անցկացնել խմբային և անհատական ծրագրավորման դասընթացներ:",
        icon: "Teaching"
      },
      {
        year: "2023",
        title: "AI գործիքների ինտեգրում",
        description: "Մասնագիտացա LLM-ների և ավտոմատացման սկրիպտների մեջ՝ բիզնես պրոցեսները արագացնելու համար:",
        icon: "AI"
      },
      {
        year: "NOW",
        title: "Full-Stack & AI Expert",
        description: "Այժմ ստեղծում եմ բարդ SaaS և Enterprise լուծումներ:",
        icon: "Expert"
      }
    ]
  },
  outside: {
    title: "Կոդից դուրս",
    description: "Երբ համակարգչի առջև չեմ, ինձ կգտնեք շախմատ խաղալիս, սուրճ խմելիս կամ գիտական գրականություն կարդալիս։ Ես հավատում եմ, որ լավագույն գաղափարները ծնվում են հանգստի և տարբեր հոբբիների համադրությունից:",
    badges: ["Շախմատ", "Ընթերցանություն", "Պոդկաստներ"],
    image: "/images/aboutme.png" // Placeholder path, need to verify or handle
  },
  cta: {
    title: "Պատրա՞ստ եք սկսել Ձեր նախագիծը:",
    subtitle: "Կապ հաստատեք ինձ հետ՝ քննարկելու ձեր գաղափարները կամ գրանցվելու դասընթացների:",
    buttons: {
      primary: "Սկսել Նախագիծ",
      secondary: "Գրանցվել Դասի"
    }
  }
};

export const PORTFOLIO_PAGE_DATA = {
  hero: {
    badge: "SKILLS & TECHNOLOGIES",
    title: {
      text: "Իմ",
      highlight: "Ունակությունները"
    },
    description: "Full-Stack ծրագրավորումից մինչև AI ավտոմատացում: Ահա այն տեխնոլոգիաները, որոնցով ես ստեղծում եմ արժեք և իրականացնում նախագծեր:"
  },
  tabs: [
    { id: "frontend", label: "Frontend", icon: "Layout" },
    { id: "backend", label: "Backend", icon: "Server" },
    { id: "ai", label: "AI & Automation", icon: "Bot" },
    { id: "tools", label: "Tools", icon: "Wrench" }
  ],
  sections: [
    {
      id: "frontend",
      title: "Frontend Development",
      color: "cyan",
      items: [
        {
          id: 1,
          title: "React.js",
          description: "Component-based UI architecture",
          badge: { text: "Expert", color: "green" },
          icon: "React"
        },
        {
          id: 2,
          title: "Tailwind CSS",
          description: "Utility-first styling framework",
          badge: { text: "Expert", color: "green" },
          icon: "Palette"
        },
        {
          id: 3,
          title: "JavaScript (ES6+)",
          description: "Dynamic Interactivity & Logic",
          badge: { text: "Advanced", color: "blue" },
          icon: "FileCode"
        },
        {
          id: 4,
          title: "HTML5 / CSS3",
          description: "Semantic Markup & Layouts",
          badge: { text: "Expert", color: "green" },
          icon: "Layout"
        }
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      color: "green",
      items: [
        {
          id: 5,
          title: "Node.js",
          description: "Server-side runtime",
          badge: { text: "Advanced", color: "blue" },
          icon: "Server"
        },
        {
          id: 6,
          title: "Python",
          description: "Scripting & Backend Logic",
          badge: { text: "Advanced", color: "blue" },
          icon: "Code"
        },
        {
          id: 7,
          title: "PostgreSQL",
          description: "Relational Database",
          badge: { text: "Intermediate", color: "purple" },
          icon: "Database"
        }
      ]
    },
    {
      id: "ai",
      title: "AI & Automation",
      color: "purple",
      items: [
        {
          id: 8,
          title: "OpenAI API",
          description: "LLM Integration & Prompt Eng.",
          badge: { text: "Expert", color: "green" },
          icon: "Bot"
        },
        {
          id: 9,
          title: "Make / n8n",
          description: "Workflow Automation",
          badge: { text: "Advanced", color: "blue" },
          icon: "Workflow"
        }
      ]
    }
  ],
  cta: {
    title: {
      text: "Պատրա՞ստ եք նոր",
      highlight: "մարտահրավերների"
    },
    description: "Եթե փնտրում եք որակյալ կայք կամ ցանկանում եք խորացնել ձեր գիտելիքները ծրագրավորման մեջ, ես այստեղ եմ օգնելու համար:",
    buttons: {
      primary: "Պատվիրել Կայք",
      secondary: "Սովորել Ծրագրավորում"
    }
  }
};

export const CONTACT_PAGE_DATA = {
  hero: {
    title: {
      text: "Կապ",
      highlight: "(Contact)"
    },
    description: "Ունե՞ք հարցեր կամ համագործակցության առաջարկ։ Գրեք ինձ, և ես կպատասխանեմ հնարավորինս շուտ։",
    subDescription: "(Do you have questions or a collaboration offer? Write to me, and I will answer as soon as possible.)"
  },
  form: {
    labels: {
      name: "Անուն (Name)",
      email: "Էլ. հասցե (Email)",
      subject: "Թեմա (Subject)",
      message: "Հաղորդագրություն (Message)"
    },
    placeholders: {
      name: "Ձեր անունը",
      email: "example@email.com",
      subject: "Ընտրեք թեման...",
      message: "Գրեք ձեր հաղորդագրությունն այստեղ..."
    },
    subjects: [
      "Համագործակցություն (Collaboration)",
      "Պատվիրել Կայք (Order Website)",
      "Դասընթացներ (Courses)",
      "Այլ (Other)"
    ],
    button: "Ուղարկել"
  },
  info: {
    title: "Կոնտակտային տվյալներ",
    subtitle: "Contact Details",
    details: [
      { id: "email", value: "contact@developer.am", icon: "Mail", label: "EMAIL" },
      { id: "phone", value: "+374 99 00 00 00", icon: "Phone", label: "PHONE" },
      { id: "location", value: "Yerevan, Armenia", icon: "MapPin", label: "LOCATION" }
    ],
    social: {
      title: "Հետևեք ինձ (Follow me)",
      links: [
        { id: "linkedin", icon: "Linkedin", url: "#" },
        { id: "github", icon: "Github", url: "#" },
        { id: "youtube", icon: "Youtube", url: "#" }
      ]
    },
    map: {
      location: "Yerevan, Armenia"
    }
  }
};

export const COURSE_DETAILS_DATA = {
  breadcrumb: [
    { label: "Դասընթացներ", href: "/courses" },
    { label: "Full-Stack & AI", href: "#" }
  ],
  title: {
    highlight: "Full-Stack Web Development",
    text: "& AI Integration Masterclass"
  },
  description: "Սովորեք ստեղծել ժամանակակից վեբ հավելվածներ և ավտոմատացնել դրանք AI գործակալների միջոցով։ Զրոյից մինչև Cloud Deployment։",
  stats: [
    { label: "Տևողությունը", value: "24 Ժամ", icon: "Clock" },
    { label: "Բարդությունը", value: "Միջին", icon: "BarChart" },
    { label: "Վարկանիշ", value: "4.9/5", icon: "Star" },
    { label: "Լեզուն", value: "Հայերեն", icon: "Globe" }
  ],
  sidebar: {
    price: "50,000 ֏",
    guarantee: "30 օր հետվճարի երաշխիք",
    button: "Գրանցվել Հիմա",
    note: "Սահմանափակ քանակով տեղեր",
    includes: [
      "24 Ժամ Full HD տեսանյութեր",
      "Ավարտական սերտիֆիկատ",
      "Ուղիղ կապ դասախոսի հետ (Discord)",
      "3 Ռեալ պրոյեկտներ պորտֆոլիոյի համար",
      "Ընդմիշտ հասանելիություն"
    ],
    contact: {
      title: "Հարցե՞ր ունեք։",
      subtitle: "Գրեք մեզ, մենք սիրով կպատասխանենք",
      link: "Կապնվել մեզ հետ ->"
    }
  },
  learningPoints: [
    "React.js & Next.js 14-ի խորացված ուսուցում",
    "OpenAI API-ի ինտեգրում և AI Chatbot-ների ստեղծում",
    "Server-side rendering (SSR) և Static generation",
    "Տվյալների բազաների նախագծում (PostgreSQL, Supabase)",
    "Backend ճարտարապետություն Node.js-ով",
    "CI/CD և Cloud Deployment (Vercel, AWS)"
  ],
  curriculum: [
    {
      title: "Մոդուլ 1: Վեբ ծրագրավորման հիմունքներ և JS",
      duration: "4 դաս • 5 ժամ",
      lessons: [
        { title: "HTML5 & CSS3 խորացված տեխնիկաներ", preview: true },
        { title: "JavaScript ES6+ սինտաքս և ասինխրոն ծրագրավորում", preview: false },
        { title: "DOM Մանիպուլյացիա և Event-ներ", preview: false }
      ]
    },
    {
      title: "Մոդուլ 2: React & Next.js էկոհամակարգ",
      duration: "8 դաս • 10 ժամ",
      lessons: [
        { title: "React Components, Props & State", preview: false },
        { title: "Next.js App Router & Server Components", preview: false }
      ]
    },
    {
      title: "Մոդուլ 3: AI Integration & Backend",
      duration: "6 դաս • 9 ժամ",
      lessons: [
        { title: "Node.js & Express Basics", preview: false },
        { title: "OpenAI API Integration", preview: false }
      ]
    }
  ],
  instructor: {
    name: "Արմեն Սարգսյան",
    title: "Senior Full-Stack Developer & AI Enthusiast",
    bio: "Ունեմ ավելի քան 8 տարվա փորձ վեբ ծրագրավորման ոլորտում։ Աշխատել եմ միջազգային ստարտափներում որպես Tech Lead։ Իմ նպատակն է սովորեցնել ոչ միայն կոդ գրել, այլև մտածել որպես ինժեներ և կիրառել AI գործիքները արտադրողականությունը բարձրացնելու համար։",
    image: "/placeholder-avatar.jpg" 
  },
  faq: [
    {
      question: "Ի՞նչ նախնական գիտելիքներ են անհրաժեշտ։",
      answer: "Ցանկալի է ունենալ HTML, CSS և JavaScript-ի բազային գիտելիքներ։ Մնացածը կսովորենք զրոյից։"
    },
    {
      question: "Դասընթացը օնլա՞յն է, թե՞ օֆլայն։",
      answer: "Դասընթացը ամբողջությամբ օնլայն է՝ նախապես ձայնագրված տեսանյութերով, որոնք հասանելի են ցանկացած ժամանակ։"
    }
  ]
};

export const FOOTER_DATA = {
  copyright: "© 2024 Անձնական Պորտֆոլիո։ Բոլոր իրավունքները պաշտպանված են։",
  socials: [
    { icon: Mail, href: "#" },
    { icon: Globe, href: "#" },
    { icon: Code2, href: "#" },
  ]
};

export const EXPERIENCE_PAGE_DATA = {
  hero: {
    title: {
      text: "Իմ",
      highlight: "Փորձը"
    },
    subtitle: "Full-Stack ծրագրավորման և AI ավտոմատացման մասնագիտական ուղիս, որտեղ տեխնոլոգիան հանդիպում է կրթությանը:"
  },
  timeline: [
    {
      id: 1,
      title: "Senior Full-Stack Developer & AI Specialist",
      subtitle: "Freelance / Agency Partner",
      date: "2022 - Ներկա",
      description: "Զբաղվում եմ բարդ վեբ հավելվածների մշակմամբ և բիզնես պրոցեսների ավտոմատացմամբ AI գործիքների միջոցով:",
      bullets: [
        "Մշակել եմ 10+ SaaS նախագծեր React և Node.js հիմքով:",
        "Ինտեգրել եմ LLM մոդելներ (OpenAI, Anthropic) հաճախորդների սպասարկման համակարգերում:",
        "Օպտիմալացրել եմ տվյալների բազաները, ապահովելով 40% արագագործության աճ:"
      ],
      tags: ["React", "Node.js", "Python", "OpenAI API", "LangChain"],
      icon: "Briefcase"
    },
    {
      id: 2,
      title: "Web Development Instructor",
      subtitle: "Tech School Armenia",
      date: "2021 - 2022",
      description: "Դասավանդել եմ ծրագրավորման հիմունքներ և առաջադեմ վեբ տեխնոլոգիաներ 50+ ուսանողների:",
      bullets: [
        "Մշակել եմ Frontend (React) և Backend (Node.js) ուսումնական ծրագրեր:",
        "Մենթորություն եմ արել ուսանողների ավարտական նախագծերի համար:",
        "Կազմակերպել եմ hackathon-ներ և տեխնիկական workshop-ներ:"
      ],
      tags: ["Curriculum Design", "Mentorship", "JavaScript"],
      icon: "GraduationCap"
    },
    {
      id: 3,
      title: "Mid-level Developer",
      subtitle: "Local IT Company",
      date: "2019 - 2021",
      description: "Աշխատել եմ որպես թիմի հիմնական backend ծրագրավորող, մասնակցելով էլեկտրոնային առևտրի հարթակների ստեղծմանը:",
      bullets: [
        "Իրականացրել եմ API ինտեգրացիաներ վճարային համակարգերի հետ:",
        "Մասնակցել եմ Legacy code-ի refactoring-ին:",
        "Աշխատել եմ Agile/Scrum թիմում:"
      ],
      tags: ["PHP / Laravel", "MySQL", "Vue.js"],
      icon: "Code"
    }
  ],
  education: {
    title: "Կրթություն",
    items: [
      {
        institution: "Երևանի Պետական Համալսարան",
        degree: "Կիրառական Մաթեմատիկա",
        year: "2015-2019"
      }
    ]
  }
};
