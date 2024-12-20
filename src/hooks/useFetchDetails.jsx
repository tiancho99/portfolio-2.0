import { useEffect, useState } from 'react';

const useFetchDetails = (postId) => {
    const [ detail, setDetail ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            if (!postId || !endpoint) {
                const errorMessage = "404 Web not found";
                console.error(errorMessage);
                setError(new Error(errorMessage));
                setLoading(false);
                return null;
            }

            try {
                const projectEndpoint =`${endpoint}/posts/${postId}`
                const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
                };
                console.log(projectEndpoint);
                const response = await fetch(projectEndpoint, options);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const postsData = await response.json();
                    try{
                        const mediaEndpoint = postsData._links["wp:featuredmedia"][0].href;
                        const mediaResponse = await fetch(mediaEndpoint, options);
                        console.log(mediaResponse.ok)
                        if(!mediaResponse.ok) {
                            throw new Error("Network response was not ok");
                        }
                        const media = await mediaResponse.json()
                        postsData.mediaDetails = media.media_details;
                    } catch (mediaError) {
                        console.error("Error fetching media:", mediaError);
                        postsData.frontpage=""; // Fallback if media fails
                    }
                setDetail(postsData);
                console.log(postsData)
                setLoading(false);

                
            } catch (error) {
                setError("Error 1")
            }
        };
        fetchDetails()
    }, [])
    return { detail, loading, error }
}

export default useFetchDetails;
