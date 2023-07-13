import { ComparatorFilter } from '@/components/shared/Filter';

export interface IVideo {
  url: string,
  image: string,
  title: string,
  theme: string
}

export class ThemeComparator implements ComparatorFilter<IVideo> {

  constructor(private value: string){}

  get label(): string {
    return this.value
  }

  compareTo(object: IVideo): boolean {
    return object.theme === this.value
  }

}

export const videos: IVideo[] = [
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. GL 1',
    theme: 'Geração de Leads'
  },
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Agências',
    theme: 'Agência'
  },
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Chatbot',
    theme: 'Chatbot'
  }
]