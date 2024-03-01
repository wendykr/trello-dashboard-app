import react_img from '../assets/img/react_header.jpg';
import supabase_img from '../assets/img/supabase_header.jpg';
import tailwind_img from '../assets/img/tailwind_header.jpg';
import typescript_img from '../assets/img/typescript_header.jpg';
import vite_img from '../assets/img/vite_header.jpg';

export const cardsData = [
  {
    id: 2,
    title: 'TypeScript',
    description: 'Chci se jej naučit v Reactu k typování komponent, props, stavů a dalších stavebních bloků.',
    image: typescript_img,
    status: 'Todo'
  },
  {
    id: 3,
    title: 'Figma',
    description: 'Naučit se navrhovat jednoduché wireframy a prototypy webových aplikací, pro kódování do HTML/CSS. Design a barvy ladící oku ráda přenechám zkušenějším grafikům :-)',
    image: '',
    status: 'Todo'
  },
  {
    id: 4,
    title: 'Coaching course on Prague - Úvod do HTML a CSS',
    description: '',
    image: '',
    status: 'Todo'
  },
  {
    id: 6,
    title: 'English',
    description: 'Pracuju na sobě a učím se tak, abych se mohla dále vzdělávat ve frontendu zahraničními online kurzy a tutoriály.',
    image: '',
    status: 'In progress'
  },
  {
    id: 7,
    title: 'Vite',
    description: '',
    image: vite_img,
    status: 'In progress'
  },
  {
    id: 8,
    title: 'Programming Trello Dashboard',
    description: '',
    image: '',
    status: 'In progress'
  },
  {
    id: 9,
    title: 'React 1 - Základy',
    description: 'Třídím si své myšlenky a naučené postupy, abych sladila své znalosti s rozsahem kurzu. Mou další cestou je se bez jakýchkoliv obav přihlásit na kurz React 2 - Nástroje a techniky.',
    image: react_img,
    status: 'In progress'
  },
  {
    id:10,
    title: 'Supabase',
    description: 'Backendová služba, které chci znát více do hloubky, abych dokázala ve webových aplikacích pracovat s dynamickými daty.',
    image: supabase_img,
    status: 'In progress'
  },
  {
    id: 11,
    title: 'Tailwind CSS',
    description: 'Ráda si osahávám nové technologie, abych si dokázala zhodnotit, jestli je budu chtít na svých projektech využívat, či nikoliv.',
    image: tailwind_img,
    status: 'In progress'
  },
]