/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import IerappsM from '../assets/images/Portfolio/ierapps_m.png';
import FirecekM from '../assets/images/Portfolio/firecek_m.png';
import FirecekW from '../assets/images/Portfolio/firecek_w.png';
import ReadM from '../assets/images/Portfolio/read_m.png';
import ReadW from '../assets/images/Portfolio/read_w.png';
import ManagementUISI from '../assets/images/Portfolio/uisi_w.png';
import InfaqbmW from '../assets/images/Portfolio/infaqbm_w.png';
import QuickCountW from '../assets/images/Portfolio/quickcount_w.png';
import StickerGenerator from '../assets/images/Portfolio/stickergenerator_w.png';
import Raprima from '../assets/images/Portfolio/raprima_w.png';
import ITKI from '../assets/images/Portfolio/itki_w.png';
import rsds from '../assets/images/Portfolio/rsds_w.png';
import newsportal from '../assets/images/Portfolio/newsportal_w.png';
import KAN from '../assets/images/Portfolio/kan_w.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Bobby from '../assets/images/Testimonials/Bobby GMF.png';
import lriansyah from '../assets/images/Testimonials/levi-riyansyah.jpg';
import baihaqy from '../assets/images/Testimonials/ahmad-baihaqy.jpeg';
import Arik from '../assets/images/Testimonials/arik.jpeg';
import cita from '../assets/images/Testimonials/cita-rosita.png';

// TeamMembers
import SISI from '../assets/images/TeamMembers/sisi.jpg';
import STI from '../assets/images/TeamMembers/sti.png';
import SGI from '../assets/images/TeamMembers/sgi.png';
import SPI from '../assets/images/TeamMembers/spi.png';
import SIG from '../assets/images/TeamMembers/sig.jpg';
import GAWI from '../assets/images/TeamMembers/gawi.png';
import RSDS from '../assets/images/TeamMembers/rsds.png';
import BIN from '../assets/images/TeamMembers/borneointech.png';
import UISI from '../assets/images/TeamMembers/uisi.png';
import SALT from '../assets/images/TeamMembers/salt.png';
import GMF from '../assets/images/TeamMembers/GMF.png';
import PGN from '../assets/images/TeamMembers/patigeni.png';
import TKM from '../assets/images/TeamMembers/telkomsel.png';
import JTI from '../assets/images/TeamMembers/JTI.png';
import BPD from '../assets/images/TeamMembers/bappeda.png';
import WINGS from '../assets/images/TeamMembers/wings.png';
import LMG from '../assets/images/TeamMembers/lamongan.png';
import JTM from '../assets/images/TeamMembers/jatim.jpg';
import AVE from '../assets/images/TeamMembers/avemedia.png';
import MANDIRI from '../assets/images/TeamMembers/mandiri.png';
import BRI from '../assets/images/TeamMembers/bri.png';

export const Services = [
  {
    title: 'Website',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Apps',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Desktop Apps',
    imageUrl: UIUX,
    animation: 'right',
  }
];

export const Portfolios = [
  {
    id: 'firecekapp',
    title: 'Firecek App',
    imageUrl: FirecekM,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
    ],
    detail: [
      'Technology :', 'Flutter & MySQL',
    ],
    credit: '',
  },
  {
    id: 'ierapps',
    title: 'IerApps',
    imageUrl: IerappsM,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
    ],
    detail: [
      'Technology :', 'Flutter & PostgreSQL',
    ],
    credit: '',
  },
  {
    id: 'firecekweb',
    title: 'Firecek Web',
    imageUrl: FirecekW,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Laravel & MySQL',
    ],
    credit: '',
  },
  {
    id: 'readapp',
    title: 'Registration Digital Apps',
    imageUrl: ReadM,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
    ],

    detail: [
      'Technology :', 'Android & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
    {
    id: 'readweb',
    title: 'Registration Digital Web',
    imageUrl: ReadW,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],

    detail: [
      'Technology :', 'Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
    {
    id: 'uisiweb',
    title: 'Management Assets UISI',
    imageUrl: ManagementUISI,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'infaqbmweb',
    title: 'Infaq Bahrul Maghfiroh',
    imageUrl: InfaqbmW,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Code Igniter & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'quiccountw',
    title: 'Quick Count Pilkada 2018',
    imageUrl: QuickCountW,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'stickergeneratorw',
    title: 'Sticker Generator',
    imageUrl: StickerGenerator,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'raprimaweb',
    title: 'E-Commerce Raprima Tempeh',
    imageUrl: Raprima,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'Code Igniter & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'itkirsdsweb',
    title: 'Helpdesk ITKI RSUD Dr. Soetomo',
    imageUrl: ITKI,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'VueJS, Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'rsdsweb',
    title: 'Company Profile RSUD Dr. Soetomo',
    imageUrl: rsds,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'VueJS, Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
    {
    id: 'newsportal',
    title: 'News Portal',
    imageUrl: newsportal,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'PHP, Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
     {
    id: 'kan',
    title: 'PT. Ketahanan Aspal Nasional',
    imageUrl: KAN,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Technology :', 'PHP, Laravel & MySQL',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
  {
    id: 'orbitweb',
    title: 'E-Commerce Telkomsel My Orbit',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=0-1',
  },
  {
    id: 'superindoweb',
    title: 'Management Warehouse Superindo',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2',
  },
  {
    id: 'budgetrealweb',
    title: 'Budget Realization PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-3338&p=f',
  },
  {
    id: 'budgetrealweb',
    title: 'Budget Realization PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1?node-id=2319-3338&p=f',
  },
  {
    id: 'tmsweb',
    title: 'Tools Management System PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/gtC4w1XOxnwUJgyjFD6mKn/Portofolio-1',
  },
  {
    id: 'itpmoweb',
    title: 'ICT Project Management PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: 'https://www.figma.com/design/tiqfGhQ0Q51zKK2oAs6BRW/Portofolio-2',
  },
  {
    id: 'arcweb',
    title: 'ARC Monthly Report PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: '',
  },
  {
    id: 'hilweb',
    title: 'Hold Item List PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: '',
  },
  {
    id: 'imteweb',
    title: 'IMTE PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: '',
  },
  {
    id: 'xpreamweb',
    title: 'XPREAM PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: '',
  },
  {
    id: 'xpreamtvweb',
    title: 'XPREAM Unit TV PT. GMF AeroAsia',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
    ],
    detail: [
      'Mobile Development',
    ],
    credit: '',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Bobi Gumelar Raspati',
    company: 'Director of Base Management, PT. Garuda Maintenance Facility Aero Asia',
    testimoni: 'Thanks for SItudio, you guys are the best! Keep up the great work!',
    imageUrl: Bobby,
    year: 2022,
  },
  {
    id: 2,
    name: 'Levi Riyansyah',
    company: 'Director, PT. Avemedia Nusantara',
    testimoni: 'I just wanted to let you know that it’s been great working with SItudio.',
    imageUrl: lriansyah,
    year: 2019,
  },
  {
    id: 3,
    name: 'Ahmad Baihaqy',
    company: 'Chief Executive Officer, CV. Pastijadi Digital Solution',
    testimoni: 'SItudio is so great. Thank you so much for a job well done.',
    imageUrl: baihaqy,
    year: 2020,
  },
  {
    id: 4,
    name: 'Arik Khudrianto',
    company: 'Mechanical Section Head, PT. KaryaIndah Alam Sejahtera (Wings Group)',
    testimoni: 'SItudio is so great. Thank you so much for a job well done.',
    imageUrl: Arik,
    year: 2025,
  },
  {
    id: 5,
    name: 'Prof. Dr. Cita Rosita Sigit Prakoeswa, dr., Sp.DVE., Subsp.DAI., FINSDV, FAADV., MARS',
    company: 'Chief Executive Officer, RSUD Dr. Soetomo East Java)',
    testimoni: 'SItudio is so great. Thank you so much for a job well done.',
    imageUrl: cita,
    year: 2021,
  },
];

export const TeamMembers = [
  { imageUrl: SISI, name: 'PT. Sinergi Informatika Semen Indonesia' },
  { imageUrl: STI, name: 'PT. Semen Tonasa Indonesia' },
  { imageUrl: SGI, name: 'PT. Semen Gresik Indonesia' },
  { imageUrl: SPI, name: 'PT. Semen Padang Indonesia' },
  { imageUrl: SIG, name: 'PT. Semen Indeonesia Tbk.' },
  { imageUrl: GAWI, name: 'PT. KaryaIndah Alam Sejahtera' },
  { imageUrl: WINGS, name: 'PT. Wings Surya' },
  { imageUrl: MANDIRI, name: 'PT Bank Mandiri Tbk.' },
  { imageUrl: BRI, name: 'PT Bank Rakyat Indonesia Tbk.' },
  { imageUrl: JTM, name: 'Pemerintah Provinsi Jawa Timur' },
  { imageUrl: RSDS, name: 'RSUD Dr. Soetomo Jawa Timur' },
  { imageUrl: BIN, name: 'CV. Borneo Intech' },
  { imageUrl: UISI, name: 'UISI' },
  { imageUrl: SALT, name: 'PT.Akomedia Asia (SALT Indonesia)' },
  { imageUrl: TKM, name: 'PT. Telekomunikasi Selular' },
  { imageUrl: GMF, name: 'PT. GMF Aero Asia Tbk.' },
  { imageUrl: JTI, name: 'PT. Jaya Teknologi Internasional' },
  { imageUrl: PGN, name: 'PT. Patigeni Mitra Sejati' },
  { imageUrl: BPD, name: 'BAPPEDA Kota Semarang'},
  { imageUrl: LMG, name: 'Pemerintah Kab. Lamongan' },
  { imageUrl: AVE, name: 'PT. Avemedia Nusantara' }
];
