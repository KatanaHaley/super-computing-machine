import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <Link to="/nasaphoto" button type="button" class="btn btn-danger">See into the stars!
            </Link>
        </div>
    )
}