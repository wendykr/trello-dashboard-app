import react_img from '../assets/img/react_header.jpg';
import supabase_img from '../assets/img/supabase_header.jpg';
import tailwind_img from '../assets/img/tailwind_header.jpg';
import typescript_img from '../assets/img/react_header.jpg';
import vite_img from '../assets/img/vite_header.jpg';

export const tasksData = [
  {
    id: 1,
    title: 'Todo',
    cards: [
      {
        id: 1,
        title: 'TypeScript',
        description: 'lorem ipsum',
        image: typescript_img,
        labels: [
          {
            id: 1,
            title: 'medium',
            color: 'f5cd47',
          },
        ]
      },
      {
        id: 2,
        title: 'Figma',
        description: 'lorem ipsum',
        image: '',
        labels: [
          {
            id: 1,
            title: 'low',
            color: '4bce97',
          },
        ]
      },
      {
        id: 3,
        title: 'Coaching course on Prague - Úvod do HTML a CSS',
        description: 'lorem ipsum',
        image: '',
        labels: [
          {
            id: 1,
            title: 'high',
            color: 'f87168',
          },
        ]
      },
    ],
  },
  {
    id:  2,
    title: 'In progress',
    cards: [
      {
        id: 1,
        title: 'English',
        description: 'lorem ipsum',
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
        ]
      },
      {
        id: 2,
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
        ]
      },
      {
        id: 3,
        title: 'Programming Trello Dashboard',
        description: 'lorem ipsum',
        image: '',
        // labels: [

        // ],
      },
      {
        id: 4,
        title: 'React 1 - Základy',
        description: 'lorem ipsum',
        image: react_img,
        labels: [
          {
            id: 1,
            title: 'medium',
            color: 'f5cd47',
          },
        ]
      },
      {
        id: 5,
        title: 'Supabase',
        description: 'lorem ipsum',
        image: supabase_img,
        // labels: [

        // ],
      },
      {
        id: 6,
        title: 'Tailwind CSS',
        description: 'lorem ipsum',
        image: tailwind_img,
        // labels: [

        // ],
      },
    ],
  },
  {
    id: 3,
    title: 'Done',
    cards: [

    ],
  },
]