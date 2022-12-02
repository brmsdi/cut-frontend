import { Item } from "types/Item";
import { AudioText, FileType, VideoText } from "types/video";

export const fileTypeToView  = (item: Item) => {
    if (item.extension === "mp4" && item.mediatype === "normal") {
        return fileTypeVideo(1, VideoText, item, true)
    } else if (item.extension === "mp4" && item.mediatype === "video") {
        return fileTypeVideo(2, VideoText, item, false)
    } else if (item.extension === "webm" && item.mediatype === "video") {
        return fileTypeVideo(3, VideoText, item, false)
    } else if (item.extension === "webm" && item.mediatype === "audio") {
        return fileTypeVideo(4, AudioText, item, true)
    } else if (item.extension === "m4a") {
        return fileTypeVideo(5, AudioText, item, true)
    } else {
        return fileTypeVideo(6, VideoText, item, true)
    }
}

function fileTypeVideo(code: number, type: string, item: Item, audio: boolean)
{
    let videoType : FileType = {
        code: code,
        text: type.concat(" ").concat(item.extension),
        audio: audio
    }
    return videoType
} 