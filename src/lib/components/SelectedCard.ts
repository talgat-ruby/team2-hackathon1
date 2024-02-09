import { writable } from 'svelte/store';

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