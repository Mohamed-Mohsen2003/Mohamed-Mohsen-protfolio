export const profile = {
  name: 'Mohamed Mohsen',
  title: 'Full-Stack Developer',
  email: 'mohamedmohsen.webdeveloper@gmail.com',
  phone: '+201142413242',
  whatsapp: 'https://wa.me/201142413242',
  location: 'Maadi, Cairo, Egypt',
  cv: './Mohamed Mohsen ( Web Developer ).pdf',
  source: 'https://github.com/Mohamed-Mohsen2003/mohamed-mohsen-portfolio/tree/main/src',
};

export const aboutParagraphs = [
  "I'm Mohamed Mohsen, a Full-Stack Developer based in Cairo, Egypt, with over four years of experience building websites, applications, and business systems. I have worked with companies across the United States, Europe, and the Middle East.",
  'I build React front ends and back ends with Python, PHP, Laravel, and .NET. My work also includes WordPress development, UI/UX design, SEO, and performance optimization.',
  'From Flutter apps for iOS and Android to desktop applications, CRM platforms, and SaaS products, I turn business needs into reliable, easy-to-use solutions. I focus on clear design, maintainable code, and a smooth experience on every screen.',
];

type Service = { title: string; text: string } & (
  { image: string; icon?: never } | { image?: never; icon: 'mobile' | 'desktop' }
);

export const services: Service[] = [
  {
    title: 'Full-Stack Development',
    image: 'coding.png',
    text: 'Building React interfaces and back ends with Python, PHP/Laravel, and .NET, including CRM and SaaS platforms.',
  },
  {
    title: 'WordPress Development',
    image: 'plugin.png',
    text: 'Creating custom WordPress websites that are easy to manage, maintain, and grow.',
  },
  {
    title: 'SEO & Performance',
    image: 'seo-mobile-setting-gear-cog-07-svgrepo-com.svg',
    text: 'Improving search visibility and loading speed through technical SEO and performance optimization.',
  },
  {
    title: 'UI/UX Design',
    image: 'ui.png',
    text: 'Designing clear interfaces and intuitive user journeys for websites and applications.',
  },
  {
    title: 'Mobile Applications',
    icon: 'mobile',
    text: 'Building iOS and Android applications with Flutter, with consistent design and reliable performance.',
  },
  {
    title: 'Desktop Applications',
    icon: 'desktop',
    text: 'Developing desktop applications that simplify business processes and support everyday workflows.',
  },
];

export const skillGroups = [
  { title: 'Front-End', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Interfaces'] },
  { title: 'Back-End', skills: ['Python', 'PHP', 'Laravel', '.NET', 'API Development'] },
  {
    title: 'Applications & Systems',
    skills: ['Flutter', 'iOS & Android', 'Desktop Applications', 'CRM', 'SaaS'],
  },
  {
    title: 'Design & Optimization',
    skills: ['WordPress', 'UI/UX Design', 'SEO', 'Speed Optimization'],
  },
];

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Future of Egypt for Sustainable Development',
    period: 'October 2026 — Present',
    note: 'Full-time · Cairo',
    points: [
      'Develop and maintain full-stack web applications and internal systems across front-end, back-end, and databases.',
      'Build responsive, user-friendly interfaces and integrate them with RESTful APIs and back-end services.',
      'Work with cross-functional teams to turn business requirements into reliable features delivered on schedule.',
      'Improve performance, security, and code quality through testing, debugging, and code reviews.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Auto Media Marketing Agency',
    period: 'October 2024 — Present',
    note: 'Remote',
    points: [
      'Build and maintain responsive WordPress websites tailored to client requirements.',
      'Customize website functionality and integrate plugins to support business needs.',
      'Improve technical SEO, loading speed, and usability across devices.',
      'Review website performance and refine key pages to support engagement and conversions.',
    ],
  },
  {
    role: 'Web Development Team Leader',
    company: 'Vision22 Marketing Agency',
    period: 'March 2024 — June 2026',
    points: [
      'Led web project planning and coordinated development tasks across the team.',
      'Assessed client requirements and translated them into practical design and development plans.',
      'Oversaw UI/UX implementation and WordPress development with a focus on usability and performance.',
      'Reviewed website functionality, links, and responsiveness before delivery.',
      'Worked with cross-functional teams to resolve issues and deliver consistent project outcomes.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Global Results Outsourcing',
    period: 'July 2023 — March 2024',
    points: [
      'Contributed to project assessments and developed responsive, user-friendly website interfaces.',
      'Created UI/UX designs and implemented WordPress websites based on project requirements.',
      'Optimized loading speed and tested website functionality across devices.',
      'Collaborated with design and development teams to troubleshoot issues and complete projects.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Egyptian General Petroleum Corporation (EGPC)',
    period: 'January 2022 — March 2022',
    points: [
      'Contributed to interactive web interfaces and React-based application features.',
      'Supported usability and performance improvements for web applications.',
      'Assisted with development planning and testing to deliver reliable user experiences.',
    ],
  },
];

export const education = [
  { title: 'El Ibrahimeya Secondary School', period: '2018 — 2021' },
  {
    title: 'Modern Academy for Computer Science and Management Technology',
    period: '2021 — 2025',
    description: 'Management Information Systems',
  },
];

export type ProjectService =
  | 'Web Development'
  | 'Frontend Development'
  | 'WordPress Development'
  | 'Shopify Development'
  | 'UI/UX Design'
  | 'SEO';
export interface Project {
  name: string;
  url: string;
  image: number | string;
  imageAlt?: string;
  imageHeight?: number;
  services: ProjectService[];
}

export const projects: Project[] = [
  {
    name: 'Final SA',
    url: 'https://final.sa/',
    image: 'final-sa-responsive',
    imageAlt: 'Final SA photography equipment rental website preview',
    imageHeight: 640,
    services: ['Frontend Development', 'UI/UX Design', 'SEO'],
  },
  {
    name: 'Tesla Developments',
    url: 'https://tesladevelopments.com/',
    image: 'tesla-developments',
    imageAlt: 'Tesla Developments real estate website preview',
    imageHeight: 640,
    services: ['Frontend Development', 'UI/UX Design', 'SEO'],
  },
  {
    name: 'Etlala Watches',
    url: 'https://etlala-watches.com/',
    image: 'etlala-watches',
    imageAlt: 'Etlala Watches Shopify store website preview',
    imageHeight: 640,
    services: ['Shopify Development'],
  },
  {
    name: 'Beamer',
    url: 'https://beamerint.com/',
    image: 'beamer',
    imageAlt: 'Beamer lighting website preview',
    imageHeight: 640,
    services: ['WordPress Development', 'UI/UX Design', 'SEO'],
  },
  {
    name: 'ZA Marketing Agency',
    url: 'https://za-marketing.com/',
    image: 'za-marketing',
    imageAlt: 'ZA Marketing Agency website preview',
    imageHeight: 640,
    services: ['WordPress Development', 'UI/UX Design'],
  },
  {
    name: 'United for Engineering',
    url: 'https://u4e-eg.com/',
    image: 'united-for-engineering',
    imageAlt: 'United for Engineering website preview',
    imageHeight: 640,
    services: ['WordPress Development', 'UI/UX Design'],
  },
  {
    name: 'Enercon',
    url: 'https://enercon-eg.com/',
    image: 'enercon',
    imageAlt: 'Enercon engineering services website preview',
    imageHeight: 640,
    services: ['WordPress Development', 'UI/UX Design'],
  },
  {
    name: 'Cave Egypt',
    url: 'https://www.caveeg.com/',
    image: 'cave-egypt',
    imageAlt: 'Cave Egypt clothing store website preview',
    imageHeight: 640,
    services: ['Shopify Development'],
  },
  {
    name: 'New Zone',
    url: 'https://newzoneeg.com/',
    image: 'new-zone',
    imageAlt: 'New Zone kitchens and furniture website mockup',
    imageHeight: 640,
    services: ['WordPress Development', 'UI/UX Design'],
  },
  {
    name: 'Casual',
    url: 'https://casual-eg.com/',
    image: 'casual',
    imageAlt: 'Casual footwear Shopify store website preview',
    imageHeight: 640,
    services: ['Shopify Development'],
  },
  {
    name: 'AZM Alsafwa Trading',
    url: 'https://azzeem.com/',
    image: 'azm-alsafwa',
    imageAlt: 'AZM Alsafwa global trade and industrial solutions website preview',
    imageHeight: 640,
    services: ['Frontend Development', 'SEO'],
  },
  {
    name: 'Tycomed',
    url: 'https://tycomed.com.eg/',
    image: 'tycomed',
    imageAlt: 'Tycomed medical supplies homepage mockup',
    imageHeight: 640,
    services: ['WordPress Development'],
  },
  // Remove the block comment below to restore these projects.
  /*
  {
    name: 'Vision22 Marketing Agency',
    url: 'https://vision22adv.com/',
    image: 'vision22-agency',
    imageAlt: 'Vision22 Marketing Agency website mockup',
    imageHeight: 640,
    services: ['WordPress Development'],
  },
  {
    name: 'Arab Nuts',
    url: 'https://arab-nuts.com/',
    image: 'arab-nuts',
    imageAlt: 'Arab Nuts roasted nuts WooCommerce store website mockup',
    imageHeight: 640,
    services: ['WordPress Development'],
  },
  */
];

export const socialLinks = [
  {
    label: 'Facebook',
    icon: 'logo-facebook',
    url: 'https://www.facebook.com/muhamed.mohsen.3154/',
  },
  {
    label: 'Instagram',
    icon: 'logo-instagram',
    url: 'https://www.instagram.com/muuhamed_mohhsen/',
  },
  {
    label: 'LinkedIn',
    icon: 'logo-linkedin',
    url: 'https://www.linkedin.com/in/mohamed-mohsen-7a3615221/',
  },
  { label: 'GitHub', icon: 'logo-github', url: 'https://github.com/MohamedMohsen2024' },
  { label: 'WhatsApp', icon: 'logo-whatsapp', url: profile.whatsapp },
];
