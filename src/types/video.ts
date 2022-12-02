import { Item } from "./Item"
export type Video = {
    videoid: string,
    author: string,
    title: string,
    duration: string,
    thumb: string,
    items: Item[]
}

export const VideoEmpty : Video= {
    videoid: '',
    author: '',
    title: '',
    duration: '',
    thumb: '',
    items: []
}

export type FileType = {
    code: number,
    text: string,
    audio: boolean
}

export const VideoText = "Vídeo"
export const AudioText = "Áudio"