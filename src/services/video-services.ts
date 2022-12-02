import axios from "axios"
import { Video } from "types/video"

export const getVideoInfo = (link: string) => {
    return axios.get<Video>(`http://192.168.15.2:8080/api/v1/mp4?link=${link}`)
}