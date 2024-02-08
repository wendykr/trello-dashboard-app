import react_img from '../assets/img/react_header.jpg';
import supabase_img from '../assets/img/supabase_header.jpg';
import tailwind_img from '../assets/img/tailwind_header.jpg';
import typescript_img from '../assets/img/react_header.jpg';
import vite_img from '../assets/img/vite_header.jpg';

export const tasksData = [
  {
    id: 2,
    title: 'TypeScript',
    description: 'lorem ipsum',
    image: typescript_img,
    labels: [
      {
        id: 1,
        title: 'medium',
        color: 'f5cd47',
      },
    ],
    status: 'Todo'
  },
  {
    id: 3,
    title: 'Figma',
    description: 'lorem ipsum',
    image: '',
    labels: [
      {
        id: 1,
        title: 'low',
        color: '4bce97',
      },
    ],
    status: 'Todo'
  },
  {
    id: 4,
    title: 'Coaching course on Prague - Úvod do HTML a CSS',
    description: 'lorem ipsum',
    image: '',
    labels: [
      {
        id: 1,
        title: 'high',
        color: 'f87168',
      },
    ],
    status: 'Todo'
  },
  {
    id: 6,
    title: 'English',
    description: '',
    image: '',
    labels: [
      {
        id: 1,
        title: 'low',
        color: '4bce97',
      },
      {
        id: 2,
        title: 'medium',
        color: 'f5cd47',
      },
    ],
    status: 'In progress'
  },
  {
    id: 7,
    title: 'Vite',
    description: 'lorem ipsum',
    image: vite_img,
    labels: [
      {
        id: 1,
        title: 'high',
        color: 'f87168',
      },
      {
        id: 2,
        title: 'low',
        color: '4bce97',
      },
      {
        id: 3,
        title: 'medium',
        color: 'f5cd47',
      },
    ],
    status: 'In progress'
  },
  {
    id: 8,
    title: 'Programming Trello Dashboard',
    description: '',
    image: '',
    // labels: [
    // ],
    status: 'In progress'
  },
  {
    id: 9,
    title: 'React 1 - Základy',
    description: 'lorem ipsum',
    image: react_img,
    labels: [
      {
        id: 1,
        title: 'medium',
        color: 'f5cd47',
      },
    ],
    status: 'In progress'
  },
  {
    id:10,
    title: 'Supabase',
    description: 'lorem ipsum',
    image: supabase_img,
    // labels: [
    // ],
    status: 'In progress'
  },
  {
    id: 11,
    title: 'Tailwind CSS',
    description: 'lorem ipsum',
    image: tailwind_img,
    // labels: [
    // ],
    status: 'In progress'
  },
]