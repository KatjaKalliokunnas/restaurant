import { Menu } from './menu';

export interface Restaurant {
  id: number;
  name: string;
  photo: string;
  menu: Menu[];
}
