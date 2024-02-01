import React, { useEffect, useState } from 'react';

const RandomVideoComponent = () => {
    const [randomVideoUrl, setRandomVideoUrl] = useState(null);

    useEffect(() => {
        const getYouTubeData = async () => {
            try {
                const API_KEY = 'AIzaSyCnaGeC47S_Cr9yPNZp1famJVM7TWqkPFk';
                const base_url = 'https://www.googleapis.com/youtube/v3/search';

                const params = {
                    key: API_KEY,
                    part: 'snippet',
                    type: 'video',
                    order: 'date',
                    maxResults: 50,
                    // You can add more parameters like "q" to filter the results based on a query
                };
                console.log(`${base_url}?${new URLSearchParams(params)}`)
                const response = await fetch(`${base_url}?${new URLSearchParams(params)}`);
                const data = await response.json();

                console.log(data)


                setRandomVideoUrl(data);
            } catch (error) {
                console.error('Error fetching data from YouTube API:', error);
            }
        };

        getYouTubeData();
        console.log(randomVideoUrl)
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h2>Random YouTube Video</h2>
            {(
                <iframe
                    title="Random YouTube Video"
                    width="560"
                    height="315"
                    src={randomVideoUrl}
                    frameBorder="0"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default RandomVideoComponent;
