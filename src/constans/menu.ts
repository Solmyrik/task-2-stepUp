export interface MenuItem {
  value: string;
  link: string;
}

export const MainMenuItems: MenuItem[] = [
  {
    value: 'Catalog',
    link: 'catalog',
  },
  {
    value: 'About us',
    link: 'about',
  },
  {
    value: 'Product selection',
    link: 'quiz',
  },
  {
    value: 'Our team',
    link: 'team',
  },
  {
    value: 'FAQ',
    link: 'faq',
  },
  {
    value: 'For staff',
    link: '/catalog',
  },
];

export const CatalogPageMenuItems: MenuItem[] = [
  {
    value: 'Back to site',
    link: '/',
  },
];

export const ProductPageMenuItems: MenuItem[] = [
  {
    value: 'Back to site',
    link: '/',
  },
];

export const FooterMenuItems: MenuItem[] = [
  {
    value: 'Catalog',
    link: 'catalog',
  },
  {
    value: 'About us',
    link: 'about',
  },
  {
    value: 'Product selection',
    link: 'quiz',
  },
  {
    value: 'Our team',
    link: 'team',
  },
  {
    value: 'FAQ',
    link: 'faq',
  },
];
