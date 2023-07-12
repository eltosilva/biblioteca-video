import { Comparable, Selectable } from '@/components/shared/Filter';

const dados = [
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. GL 1',
    tema: 'Geração de Leads'
  },
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Agências',
    tema: 'Agência'
  },
  {
    url: '',
    image: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Chatbot',
    tema: 'Chatbot'
  }
]

export class Theme implements Comparable {

  constructor(private _description: string){}

  get description() {
    return this._description
  }

  equals(object: Comparable): boolean {
    
    if(!(object instanceof Theme))
      return false
    
    const o = object as Theme;

    return o._description === this._description
  }
}

export class Video implements Selectable {

  constructor(private _url: string, private _title: string, private _image: string, private _theme: Theme){}

  get url() {
    return this._title
  }

  get title() {
    return this._title
  }

  get image() {
    return this._image
  }

  get theme() {
    return this._theme
  }

  select(object: Comparable): boolean {
    return this._theme.equals(object)
  }
}

export const videos = dados.map(item => new Video(item.url, item.title, item.image, new Theme(item.tema)))

dados.length = 0