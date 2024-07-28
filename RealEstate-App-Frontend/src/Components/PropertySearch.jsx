import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function PropertySearch() {
    const [query, setQuery] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8000/property/search', {
                params: {
                    query,
                    propertyType,
                    minPrice,
                    maxPrice,
                },
            });
           navigate('/results', { state: { properties: response.data } })
        } catch (error) {
            console.error("Error searching properties:", error);
        }
    };

    return (
            <div className="container mx-auto my-40 bg-slate-900 bg-opacity-70 p-8 rounded shadow-md">
                <h1 className='text-center text-2xl font-bold p-6 text-gray-200'> Search Properties </h1>
                <div className="flex flex-col justify-center gap-8">
                    <div className="field relative">
                    <input
                        type="text"
                        placeholder="Search by Property Name or Location"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className=" w-full p-4 pl-10 border rounded-lg bg-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <i className="fas fa-search absolute left-3 top-5 text-gray-400"></i>
                    </div>
                    <div className='flex gap-4'>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full p-2 border rounded text-gray-700 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Condo">Condo</option>
                        <option value="villa">Villa</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full p-2 border bg-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full p-2 border bg-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    </div>
                    <div className='flex items-center justify-center'>
                    <button
                        onClick={handleSearch}
                        className="w-3/12 p-2 text-center hover:divide-teal-500 bg-blue-500 text-white rounded"
                    >
                        Search
                    </button>
                    </div>
                </div>
            </div>
    );
}

export default PropertySearch;

