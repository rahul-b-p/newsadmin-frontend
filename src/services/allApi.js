import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// Add News
export const addNewsApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/news`, reqBody)
}

// display news
export const displayNewsApi = async () => {
    return await commonApi('GET', `${serverUrl}/news`, "")
}