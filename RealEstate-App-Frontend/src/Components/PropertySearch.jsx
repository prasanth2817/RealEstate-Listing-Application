import { useState } from 'react';
import axios from 'axios';

function PropertySearch() {
    const [query, setQuery] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [properties, setProperties] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8000/properties/search', {
                params: {
                    query,
                    propertyType,
                    minPrice,
                    maxPrice,
                },
            });
            setProperties(response.data);
        } catch (error) {
            console.error("Error searching properties:", error);
        }
    };

    return (
        <div>
            <h1>Search Properties</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by name or location"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                    <option value="">Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    {/* Add more property types as needed */}
                </select>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {properties.map((property, index) => (
                    <div key={index}>
                        <h3>{property.propertyName}</h3>
                        <p>Type: {property.propertyType}</p>
                        <p>Location: {property.location}</p>
                        <p>Price: {property.price}</p>
                        <p>{property.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PropertySearch;
