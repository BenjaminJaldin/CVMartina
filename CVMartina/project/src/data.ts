import {
  Briefcase,
  Building2,
  Boxes,
  ShoppingCart,
  BarChart3,
  HeartHandshake,
  Megaphone,
  Users,
  Sparkles,
  GraduationCap,
  Award,
  type LucideIcon,
} from 'lucide-react';

export type Skill = { label: string; icon: LucideIcon };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Administración',
    skills: [
      { label: 'Software de Remuneraciones', icon: Briefcase },
      { label: 'Sistemas ERP', icon: Building2 },
      { label: 'Control de Inventarios', icon: Boxes },
      { label: 'Excel', icon: BarChart3 },
    ],
  },
  {
    title: 'Área Comercial',
    skills: [
      { label: 'Ventas B2C', icon: ShoppingCart },
      { label: 'Resolución de conflictos', icon: HeartHandshake },
      { label: 'Fidelización de clientes', icon: Users },
    ],
  },
  {
    title: 'Marketing',
    skills: [
      { label: 'Marketing Digital y Tradicional', icon: Megaphone },
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: LucideIcon;
  duties: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Manpower',
    role: 'Reponedora Líder',
    period: 'Octubre 2022 — Noviembre 2022',
    icon: Boxes,
    duties: [
      'Coordinación de tareas de reposición.',
      'Control de inventario.',
      'Orden y mantenimiento del establecimiento.',
      'Apoyo a clientes.',
    ],
  },
  {
    company: 'Arcos Dorados (McDonald\'s)',
    role: 'Crew',
    period: 'Noviembre 2022 — Septiembre 2023',
    icon: ShoppingCart,
    duties: [
      'Gestión de reclamos y atención al cliente.',
      'Cumplimiento de objetivos.',
      'Resolución de problemas.',
      'Trabajo colaborativo bajo presión.',
    ],
  },
  {
    company: 'PDG Duty Free',
    role: 'Promotora de Ventas',
    period: 'Noviembre 2022 — Septiembre 2023',
    icon: Sparkles,
    duties: [
      'Venta personalizada de perfumes.',
      'Asesoramiento según preferencias del cliente.',
      'Promoción de productos.',
    ],
  },
  {
    company: 'Casino Dreams',
    role: 'Ejecutiva de Marketing',
    period: 'Noviembre 2022 — Septiembre 2023',
    icon: Megaphone,
    duties: [
      'Atención y asesoría a clientes.',
      'Implementación de nuevas tarjetas de juego.',
      'Mejora de experiencia del usuario.',
    ],
  },
  {
    company: 'Trabajo Particular',
    role: 'Niñera',
    period: '',
    icon: HeartHandshake,
    duties: [
      'Cuidado de niños con diagnóstico autista y Asperger.',
      'Apoyo educativo y emocional.',
      'Desarrollo de actividades sociales.',
    ],
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  icon: LucideIcon;
};

export const education: EducationItem[] = [
  {
    title: 'Ingeniería en Administración de Empresas',
    institution: 'INACAP',
    period: 'Marzo 2024 — Actualidad',
    icon: GraduationCap,
  },
  {
    title: 'Enseñanza Media Completa',
    institution: 'Liceo María Auxiliadora, Iquique',
    period: 'Noviembre 2022',
    icon: Building2,
  },
];

export type Certification = {
  title: string;
  institution: string;
  hours: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: 'Asistente Financiero',
    institution: 'INACAP',
    hours: '414 horas',
    icon: Award,
  },
  {
    title: 'Asistente en Marketing',
    institution: 'INACAP',
    hours: '360 horas',
    icon: Award,
  },
  {
    title: 'Asistente en Remuneraciones',
    institution: 'INACAP',
    hours: '216 horas',
    icon: Award,
  },
  {
    title: 'Talleres de Liderazgo',
    institution: 'Líderes para Chile',
    hours: '',
    icon: Sparkles,
  },
];

export const contactInfo = {
  location: 'Iquique, Chile',
  phone: '+569 66984730',
  email: 'martibelenespi@gmail.com',
};
