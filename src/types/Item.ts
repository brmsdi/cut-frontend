export type Item = {
    key: string,
    extension: string,
    resolution: string,
    url: string,
    bitrate: string,
    rawbitrate: number,
    filesize: number,
    mediatype: string
}

export const ItemEmpty : Item = {
    key: '',
    extension: '',
    resolution: '',
    url: '',
    bitrate: '',
    rawbitrate: 0,
    filesize: 0,
    mediatype: ''
}