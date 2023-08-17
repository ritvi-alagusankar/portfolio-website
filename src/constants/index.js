import {
  mobile,
  Continental,
  car,
  spotify,
  ureca,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  ey,
  indium,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ventrx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Forensic Data Analyst Intern",
    company_name: "Ernst & Young",
    icon: ey,
    iconBg: "#ffffff",
    date: "May 2023 – Aug 2023",
    points: [
      "Utilised clustering and anomaly detection techniques to identify suspicious vendors from invoice data.",
      "Ran several tests on MySQL to identify and further shortlist invoices and vendors which were potentially fraudulent.",
      "Developed interactive dashboards on Power BI to visualize and analyse the invoice data of these suspicious vendors",
      "Conducted network analysis using Neo4j to analyse connections among individuals associated with the list of suspicious vendors, providing comprehensive insights into potential fraud networks.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "Ventrx",
    icon: ventrx,
    iconBg: "#ffffff",
    date: "Feb 2023 – May 2023",
    points: [
      "Created a website for the start-up using ReactJS, HTML, and CSS.",
      "Developed an interactive map dashboard utilizing the Mapbox API and ReactJS.",
      "This dashboard empowers users with navigational control across the map, a geographical search bar, and the capability to generate, position, and display markers within the interface.",
    ],
  },
  {
    title: "NLP Engineer Intern",
    company_name: "Indium Software",
    icon: indium,
    iconBg: "#ffffff",
    date: "Jun 2022 – July 2022",
    points: [
      "Automated the extraction of financially critical clauses from legal contracts using BERT and TensorFlow.",
      "Performed an OCR on several contracts and extracted all clauses from it using Pytesseract. Created a dataset containing these clauses and annotated them as critical and non-critical clauses.",
      "Executed pre-processing and tokenization on the input dataset and utilized this to train the BERT model for binary text classification using neural networks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    title: "AI-powered Driver Behaviour Profiling system",
    company_name: "Continental-NTU Corporate Lab",
    icon: Continental,
    iconBg: "#ffffff",
    date: "Aug 2023 - Present",
    points: [
      "Development of driving simulator for emulating real driving scenarios and collecting the driving data for driver behaviour profiling as well as notifying unsafe driving events presented to drivers in real-time to prevent accidents.",
      "Utilization of various Deep Learning Algorithms to identity risky and unsafe driving practices and perform rating/categorizing drivers into different categories using the driving data obtained. Integration of driver behaviour profiling techniques into the driving simulator platform.",
    ],
  },
  {
    title: "Hardware-Software Co-Exploration for Efficient Edge Intelligent Systems",
    company_name: "URECA (Undergraduate Research Experience on Campus) NTU",
    icon: ureca,
    iconBg: "#ffffff",
    date: "Aug 2023 - Present",
    points: [
      "Optimization of Deep Neural Networks for application on edge systems to maximise performance under the guidance of Associate Professor Weichen Liu.",
      "Performing model pruning, model scaling, performance benchmarking (latency), and neural architecture search techniques to boost the result on the target edge devices. Implementation of an efficient edge DNN system with the best accuracy and latency.",
    ],
  },
  {
    title: "Automated License Plate Recognition System",
    company_name: "",
    icon: car,
    iconBg: "#ffffff",
    date: "Jan 2023",
    points: [
      "Created a CNN Machine Learning model to extract license plates from live video footage of moving vehicles.",
      "Performed an Optical Character Recognition (OCR) on the extracted license plate using pytesseract to extract the text from the image."
     ],
  },
  {
    title: "Spotify Music Recommendation System",
    company_name: "IE0005 Data Science Project",
    icon: spotify,
    iconBg: "#ffffff",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Recommended a personalised playlist based on the user’s past music history.",
      "Normalised the data present in the dataset provided by Spotify. Performed several feature selection techniques to determine the most important features of a song (valence, popularity, danceability, energy, etc.), and clustered the songs in the dataset using Kmeans.",
      "Queried the user’s playlist and found 10 songs and artists in the clustered dataset which closely resembled the features of the user’s song choices using cdist. Created a personalised playlist that caters to each user’s unique taste."
    ],
  },
  
];

export { services, technologies, experiences, testimonials, projects };