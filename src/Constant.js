const GOOGLE_API = 'AIzaSyCnaGeC47S_Cr9yPNZp1famJVM7TWqkPFk'
// const GOOGLE_API1 = 'AIzaSyDjW4kqDk3vH9BXsIU_VCPnrlXPPd0ja_A'

export const YOUTUBE_SEARCH_API = `&key=${GOOGLE_API}`

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API}`

// export const YOUTUBE_SEARCH_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${Search_TYPE}&key=AIzaSyCnaGeC47S_Cr9yPNZp1famJVM7TWqkPFk`

export const SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=`

export const RANDOM_VIDEO_API = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API}&part=snippet&type=video&order=date&maxResults=`
