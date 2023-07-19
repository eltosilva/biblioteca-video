import { IProps } from '@/types/props'
import { DownloadIcon, DownloadSVG, DownloadText, RoundIcon } from './styles'

interface IPropsLink extends IProps {
  url: string
}

export function Linkedin({ url }: IPropsLink) {
  return (
    <RoundIcon href={url} target='_blank'>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
      </svg>
    </RoundIcon>
  )
}

export function Facebook({ url }: IPropsLink) {
  return (
    <RoundIcon href={url} target='_blank'>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
    </RoundIcon>
  )
}

export function Instagran({ url }: IPropsLink) {
  return (
    <RoundIcon href={url} target='_blank'>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg>
    </RoundIcon>
  )
}

export enum FileType {
  SPREADSHEET,
  DOCUMENT,
  PRESENTATION,
  FOLDER
}

interface IPropsDownload extends IPropsLink {
  fileType: FileType
}

export function Dowload({ children, url, fileType }: IPropsDownload) {
  return (
    <DownloadIcon href={url} $fileType={fileType}>
      <DownloadSVG
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="-909 226 100 100"
      >
        <path d="M-821.9,251.4c-1.4-0.9-2.7-1.6-4-2.1c-0.2-1.4-0.5-3.1-0.9-4.1c-3.2-10.3-13.1-17.5-24.1-17.5c-12.8,0-23.2,9.1-25.1,21.3
          c-7.1-2.3-14.7-1.1-21.1,3.3c-7.1,4.8-11.4,12.6-11.4,20.9c0,9.6,5.2,18.2,13.8,22.7c3.7,1.8,7.7,2.8,11.5,2.8l21.6,0v16.6l-7.6-7.7
          c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5l13,12.9c0.4,0.4,1,0.4,1.4,0l13-12.9c1-1,1-2.6,0-3.5c-1-1-2.6-1-3.5,0l-7.6,7.7v-16.7l21.5,0
          c4.8,0,9.5-1.4,13.8-4c7.2-4.6,11.6-12.8,11.6-21.4C-809.4,264.3-814,256.1-821.9,251.4z M-823.7,290.3c-3.4,2.1-7.3,3.2-11.1,3.2
          l-21.6,0v-32.8c0-1.4-1.1-2.5-2.5-2.5c-1.6,0-2.7,1.1-2.7,2.5v32.9l-21.5,0c-3.1,0-6.3-0.7-9.3-2.2c-6.9-3.5-11.1-10.5-11.1-18.2
          c0-6.6,3.4-12.9,9.2-16.8c3.4-2.4,7.2-3.6,11.1-3.6c2.4,0,4.8,0.5,7.1,1.5l4.7,1.8l0.1-3.5c0.3-10.9,9.4-19.8,20.4-19.8
          c8.8,0,16.8,5.7,19.3,14v0.1c0.4,1,0.7,3.7,0.8,4.4v1.7l1.9,0.5c1.3,0.3,2.7,0.9,4.3,2c6.4,3.9,10.2,10.4,10.1,17.6
          C-814.5,280.1-818,286.7-823.7,290.3z"
        />
      </DownloadSVG>
      <DownloadText>{children}</DownloadText>
    </DownloadIcon>
  )
}