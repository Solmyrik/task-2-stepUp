import { QuizProduct } from '../redux/slices/QuizSlice';

export const filterItems = (items: QuizProduct[], category: string[]): QuizProduct[] => {
  const currentItems: QuizProduct[] = [];
  items.forEach((item) => {
    for (let i = 0; i < category.length; i++) {
      if (item.category === category[i]) {
        currentItems.push(item);
      }
    }
  });

  return currentItems.sort((a, b) => (b.rating || 0) - (a.rating || 0));
};
