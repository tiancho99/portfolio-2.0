import MyNavbar from '../components/MyNavbar.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchDetails from '../hooks/useFetchDetails.js'


const ProjectDetail = () => {
    const slug = useParams();

    const { detail, loading, error } = useFetchDetails(slug)
    return (
        <MyNavbar/>
    );
}

export default ProjectDetail;
