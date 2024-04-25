import React, { useState } from 'react';
import image from '../assets/image.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../Redux/action';

function Home() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('')
    const [searched, setSearched] = useState(false)
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const recipes = useSelector((state) => state.recipes);

    const dispatch = useDispatch();



    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleRequest = (e) => {
        e.preventDefault();
        if (search.trim() === '') {
            alert('Kindly write a keyword to find recipes')
            return;
        }
        setQuery(search); //to update the query with current search value
        setSearched(true);
        dispatch(fetchRequest(search)); //dispatch updated query
        setSearch('')
    };

    return (
        <div className='main' id='home'>
            <div className='home'>
                <div className='searchbar'>
                    <h1>Unlock your culinary creativity, recipes are just a click away.</h1>
                    <p className='sub-head'>
                        "From roasted to grilled, oiled to boiled, with whatever ingredients you've got or leftovers spoiled, just jot a keyword and let the magic unfold!"
                    </p>
                    <div className='inputField' style={{ display: 'flex', gap: '5px', margin: '2rem 0' }}>
                        <input
                            required
                            type='search'
                            className='input'
                            value={search}
                            onChange={handleSearchChange}

                        />
                        <button className='btn' onClick={handleRequest}>
                            {loading ? 'Searching...' : 'Search'}
                        </button>

                    </div>
                </div>
                <div className='picture'>
                    <img alt='food' src={image} className='image'></img>
                </div>
            </div>
            <div className='not-found'>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {searched && recipes.length === 0 && !loading && !error ? (
                    <p>No recipes found.</p>
                ) : null}
            </div>
        </div>

    );
}

export default Home;
