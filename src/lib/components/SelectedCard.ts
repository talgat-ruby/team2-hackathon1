import { writable } from 'svelte/store';
export type Addon = {
  id: number;
  name: string;
  description: string;
  monthlyAddPrice: number;
  selected: boolean;
  yearlyAddPrice:number;
};
export const clickEvent = writable("");
export const selectedAddons = writable<Addon[]>([
  { id: 1, name: 'Online service', description: 'Access to multiplayer games', monthlyAddPrice: 1,yearlyAddPrice:10 ,selected: false },
  { id: 2, name: 'Larger storage', description: 'Extra 1TB of cloud save', monthlyAddPrice: 2,yearlyAddPrice:20, selected: false },
  { id: 3, name: 'Customizable Profile', description: 'Custom theme on your profile', monthlyAddPrice: 2,yearlyAddPrice:20, selected: false },
]);

type SelectedCardData ={
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  switcher: string;
  imageUrl: string;
}
export const selectedCard = writable<SelectedCardData>({
  name: '',
  monthlyPrice: 0,
  yearlyPrice: 0,
  switcher: 'monthly',
  imageUrl: '',
});
