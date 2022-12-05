import axios from "axios"
import { Video } from "types/video"

export const getVideoInfo = (link: string) => {
    return axios.get<Video>(`https://down-yt.onrender.com/api/v2/video?link=${link}`)
}