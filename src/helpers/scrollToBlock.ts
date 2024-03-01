export const scrollToBlock = (id: string): void => {
  if (id[0] === '/') return;
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
