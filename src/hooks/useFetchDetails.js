import { useEffect, useState } from 'react';

const useFetchDetails = (slug) => {
    const [ detail, setDetail ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const endpoint = process.env.REACT_APP_BASE_ENDPOINT;
            console.log(slug)
            if (!slug || !endpoint) {
                const errorMessage = "404 Web not found";
                console.error(errorMessage);
                setError(new Error(errorMessage));
                setLoading(false);
                return null;
            }

            try {
                const projectEndpoint =`${endpoint}/${slug.postName}`
                    const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const response = await fetch(projectEndpoint, options);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const postsData = await response.json();
                console.log(postsData)

                
            } catch (error) {
                setError("")
            }
        };
        fetchDetails()
    }, [])
    return { detail, loading, error }
}

export default useFetchDetails;
