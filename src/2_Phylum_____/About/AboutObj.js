import mobiuss_1 from '../../Design/Images/LogoGk.jpg';
import mobiuss_3 from '../../Design/Images/mobiuss_3.png';
import mobiuss_4 from '../../Design/Images/mobiuss_4.png';
import mobiuss_5 from '../../Design/Images/mobiuss_5.png';
import aggregate from '../../Design/Images/Aggregate.jpg';
import algorithm from '../../Design/Images/algorithm.png';
import algorithm2 from '../../Design/Images/algorithm2.png';
import algorithm3 from '../../Design/Images/algorithm3.png';
import algorithm4 from '../../Design/Images/algorithm4.jpg';
import esc_1 from '../../Design/Images/esc.png';
import bridger from '../../Design/Images/BridgerBaby1.JPG';
import ohnodamn from '../../Design/Images/ohnodamn.png';
import PG13_0 from '../../Design/Images/PG-13_0.jpg';
import PG13_1 from '../../Design/Images/PG-13_1.jpg';
import PG13_2 from '../../Design/Images/PG-13_2.jpg';
import PG13_4 from '../../Design/Images/PG-13_4.jpg';

export const introObj = [
  `I’ve been building things for as long as I can remember.`,
  `By age five, household items and my sisters’ toys would go missing because ‘Conor was making something again’ and by grade five, I
had convinced my dad to purchase blueprints for a 6’x8’x32’ half-pipe.  As a general contractor, we agreed that he’d handle the cuts 
but I had to mark them out myself and do all other work. He taught me what all the symbols meant on the schematics, and by middle school I’d built it. `,
  `Twenty years later I’m learning a different set of symbols and exploring how I can implement
them to build new things that I’ve now designed myself.`,
  `Below are a collection of projects I feel are relevant to the reason you are here.`,
  `Cheers`,
];
export const softwareObj = [
  {
    favRank: 1,
    timeRank: 5,
    title: 'Needle Drop Co.',
    tech: [
      'ReactJS',
      'NodeJS',
      'PostgreSQL',
      'AWS',
      'Redux/Thunk',
      'Axios',
      'ExpressJS',
      'Heroku',
      'Jira Software',
    ],
    summary:
      'Application Software for a music licensing company in Portland, OR. Consumer and Enterprise systems.',
    story: [
      `Needle Drop Co. is a music licensing company in Portland, Oregon. Having outgrown the functionality of their prior web presence, 
      they were seeking a web application that could help the user explore their product library and streamline inventory maintainence`,
      `While working closely with the client a solution was reached that offers a powerful customer experience and a comprehensive catalogue management system.`,
      `Consumer Software Features: `,
      `Library browsing by filters or search`,
      `User playlists and favorites`,
      `Currated playlists by Needle Drop`,
      `Artist discovery and Artist Profiles`,
      `Secure payment system for obtaining licenses`,
      `Enterprise Software Features:`,
      `Library Managment`,
      `Filter Managment`,
      `Artist Managment`,
      `Playlist Managment`,
      `Purchase History and Trends`,
    ],
    titleImgUrl: 'https://www.needledrop.co/images/whitesmlogo.png',
    storyImgUrls: ['void'],
  },

  {
    favRank: 2,
    timeRank: 6,
    title: 'GK_Talk',
    tech: [
      'ReactJS',
      'NodeJS',
      'PostgreSQL',
      'Socket.io',
      'AWS',
      'Redux/Thunk',
      'Axios',
      'ExpressJS',
      'Heroku',
    ],
    summary:
      'GK_Talk is a text-based communication module designed for reuse across projects and microservice implementation.',
    story: [
      `Designed for reuse across projects with and for later implementation as a microservice, GK_Talk is foundationally a messaging service.
      However, with a backend architecture that is flexibly suited for feature updates, GK_Talk features go beyond live chat and persisted conversation history. 
      Along with AWS integration for media sharing, collaborative 'note' sections shared within the conversation feed can be edited by all parties and used for organizing shopping lists, camping trips or the weekend 'To-Do.'`,
    ],
    titleImgUrl: algorithm3,
    storyImgUrls: ['void'],
  },

  {
    favRank: 4,
    timeRank: 1,
    title: 'Web Content Aggregator',
    tech: ['Django', 'mongoDB', 'Azure DevOps', 'Scrum', 'Beautiful Soup'],
    summary:
      'Final Project Instructor, Scrum Master, and Project Lead for web scraping application at a code school in Portland, OR. ',
    story: [
      'Final Project Instructor, Scrum Master, and Project Lead for web scraping application at a code school in Portland, OR. ',
    ],
    titleImgUrl: algorithm2,
    storyImgUrls: ['void'],
  },

  {
    favRank: 4,
    timeRank: 2,
    title: 'Document Parsing Algorithm',
    tech: ['C#', 'Javascript', 'Google Apps Script'],
    summary:
      'A text parsing algorithm developed in C# to identify, isolate and organize 1200+ pages of course curriculum for automated field population.',
    story: [
      `After leaving Escape Collective and pursuing software development as my primary focus, I found suprising overlap in skills. 
      The ability to stay calm and lead a team through long hours appeared to fit well with what I’d experience in the software industry. 
      On the first day of my first job, a crippling situation with the company’s database occurred.`,
      `I suddenly found myself deputized.`,
      `I served as the liaison to the fraught development team while tracking the progress of seperate team tasked with manually repopulating an inhuman amount of data.
      By the second day I was able to project my observations and saw it was likely the Monday deadline would be missed, so I decided to develop a script for the task after hours.
      I ended up with a parsing algorithm that could translate any amount of raw data (following the established format) from Google Documents and repopulate the damaged system. 
      `,
      `This may sound like a nightmare but, again, I felt like I was discovering magic.`,
    ],
    titleImgUrl: algorithm,
    storyImgUrls: ['void'],
  },

  {
    favRank: 5,
    timeRank: 3,
    title: 'GK_HBD-Bridger',
    tech: ['ReactJS', 'Heroku', 'C#', 'ASP.NET'],
    summary: `"Happy Birthday Bridger" is a birthday gift to an old friend. The application generates 100,000+ permutations of a personalized adulation.[ripe with inside jokes..]`,
    story: [
      `Originally built with C# on ASP.NET, this application was basically a Mad Lib solution generator. 
      There was a predetermined paragraph structure with associated collections of nouns, verbs, adjectives, etc... that were randomized for each solution.`,
      `The resulting application was capable of generating more than 100,000 permutations of the three sentence phrase. 
      I'm certain Bridger has yet to see the same joke twice.`,
    ],
    titleImgUrl: bridger,
    storyImgUrls: ['void'],
  },

  {
    favRank: 6,
    timeRank: 1,
    title: 'Escape Collective',
    tech: [
      'Python',
      'SolidWorks',
      'Statics',
      'FEA (Finite Element Analysis)',
      'JavaScript',
      'Project Management',
    ],
    summary:
      'Co-Founder and Lead Design Engineer of a design and fabrication company in Portland, OR.',
    story: [
      `Shortly after graduating with a degree in Mechanical Engineering from WSU, I chose to start a design and fabrication company with some talented friends in Portland called the Escape Collective. 
      I was the design engineer. 
      My early roles were focused on calculating, analyzing and explaining the frame and cover designs for 36’ diameter geodesic domes. 
      This is where I remember really experiencing programming in a powerful way for the first time. 
      I’d learned and implemented Matlab, EES and similar engineering tools, but this was different. 
      I found a python script off a blog of an Australian aerospace engineer that tackled most of the math published by Buckminster Fuller in regards to the linear approximation of spherical geodesics. 
      With some quick python study and a few modifications, I had a functional script that took in radius, frequency (degree of subdivisions) and returned to me an order list of every ‘beam’ in CSV format.`,

      `In Escape Collective, as with all start-ups, no one person could afford to play a single role. 
      I found myself project managing event installations, leading build teams on remote event sites around the country and interfacing with on-site civil engineers all while making sure the client representatives for Nike, Corona, or DocuSign were satisfied. 
      The amount of organization, communication, and planning involved with executing demanding fabrication and installation deadlines was very challenging and sleepless for the first few years, but I loved it. 
      `,
    ],
    titleImgUrl: esc_1,
    storyImgUrls: ['void'],
  },
];

export const personalObj = [
  {
    favRank: 1,
    timeRank: 1,
    title: 'PG-13 [band]',
    tech: [
      'Audio Production',
      'Composition',
      'Ableton Live 9',
      'Guitar',
      'Bass',
      'Vocals',
      'Synth',
      'Drums',
    ],
    summary:
      'A personal music project started in 2017 after 18yrs of experimentation.',
    story: ['This is PG-13'],
    titleImgUrl: PG13_2,
    storyImgUrls: ['void'],
  },
];
