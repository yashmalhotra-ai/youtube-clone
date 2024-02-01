
const useFormatViewCount = (viewCount) => {
    if (viewCount === null) return null;
    const million = 1000000;
    const thousand = 1000;
    if (viewCount >= million) {
        return (viewCount / million).toFixed(1) + 'M';
    } else if (viewCount >= thousand) {
        return (viewCount / thousand).toFixed(1) + 'K';
    } else {
        return viewCount.toString();
    }
}

export default useFormatViewCount;
