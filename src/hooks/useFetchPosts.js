import { useEffect, useState } from 'react';

const useFetchPosts = (endpoint) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
        const fetchPosts = async () => {
            if (!endpoint) {
                const errorMessage = "API endpoint is not defined";
                console.error(errorMessage);
                setError(new Error(errorMessage));
                setLoading(false);
                return null;
            }

            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const response = await fetch(endpoint, options);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const postsData = await response.json();
                console.log(postsData)

                const postsAndMedia = await Promise.all(
                    postsData.map(async (project) => {
                        const mediaEndpoint = project._links?.["wp:attachment"]?.[0]?.href;
                        if (mediaEndpoint) {
                            try {
                                const mediaResponse = await fetch(mediaEndpoint);
                                if (!mediaResponse.ok) {
                                    throw new Error("Media response was not ok");
                                }
                                const mediaData = await mediaResponse.json();
                                if (mediaData.length > 0) {
                                    project.project_thumbnail = mediaData[0].media_details.sizes.medium.source_url;
                                }
                            } catch (mediaError) {
                                console.error("Error fetching media:", mediaError);
                                project.project_thumbnail = ""; // Fallback if media fails
                            }
                        }
                        return project;
                    })
                );
                console.log(posts)
                setPosts(postsAndMedia);
                console.log(posts)
            } catch (error) {
                console.error("Fetch error", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};

export default useFetchPosts;

