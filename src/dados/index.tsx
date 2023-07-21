import { Organizer } from '@/components/shared/Stage';

export interface IVideo {
  url: string,
  srcImage: string,
  title: string,
  theme: string,
  description: string
}

export const VideoOrganizer: Organizer<IVideo>[] = [
  {
    label: 'Selecionei...',
    sort: () => videos
  },
  {
    label: 'A - Z',
    sort: (videos: IVideo[]) => videos.sort((videoA, videoB) => videoA.title > videoB.title ? 1 : -1)
  },
  {
    label: 'Z - A',
    sort: (videos: IVideo[]) => videos.sort((videoA, videoB) => videoA.title > videoB.title ? -1 : 1)
  }
]

const videos: IVideo[] = [
  {
    url: 'https://www.youtube.com/embed/EW6QAM4ypVE',
    srcImage: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Agências',
    theme: 'Agência',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, est non maximus pretium, arcu justo rhoncus ligula, vel tristique erat diam non quam. Aenean tristique tristique pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    url: 'https://www.youtube.com/embed/EW6QAM4ypVE',
    srcImage: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. GL 1',
    theme: 'Geração de Leads',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, est non maximus pretium, arcu justo rhoncus ligula, vel tristique erat diam non quam. Aenean tristique tristique pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    url: 'https://www.youtube.com/embed/EW6QAM4ypVE',
    srcImage: '/img/thumbnail.png',
    title: 'Como aumentar sua Geração de Leads feat. Chatbot',
    theme: 'Chatbot',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, est non maximus pretium, arcu justo rhoncus ligula, vel tristique erat diam non quam. Aenean tristique tristique pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  }
]

findByTheme.themes = Array.from(new Set(videos.map(video => video.theme)))

export function findByTheme(theme?: string) {
  if (!theme)
    return videos

  return videos.filter(video => video.theme === theme)
}