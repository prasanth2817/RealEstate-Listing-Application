// import { useState } from 'react';
// import axios from 'axios';

// function PropertySearch() {
//     const [query, setQuery] = useState('');
//     const [propertyType, setPropertyType] = useState('');
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');
//     const [properties, setProperties] = useState([]);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/properties/search', {
//                 params: {
//                     query,
//                     propertyType,
//                     minPrice,
//                     maxPrice,
//                 },
//             });
//             setProperties(response.data);
//         } catch (error) {
//             console.error("Error searching properties:", error);
//         }
//     };

//     return (
//         <section className=''>
//         <div>
//             <h1>Search Properties</h1>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search by name or location"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
//                     <option value="">Select Property Type</option>
//                     <option value="Apartment">Apartment</option>
//                     <option value="House">House</option>
//                     <option value="Condo">Condo</option>
//                     {/* Add more property types as needed */}
//                 </select>
//                 <input
//                     type="number"
//                     placeholder="Min Price"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Max Price"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>
//             <div>
//                 {properties.map((property, index) => (
//                     <div key={index}>
//                         <h3>{property.propertyName}</h3>
//                         <p>Type: {property.propertyType}</p>
//                         <p>Location: {property.location}</p>
//                         <p>Price: {property.price}</p>
//                         <p>{property.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </section>
//     );
// }

// export default PropertySearch;

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
            const response = await axios.get('http://localhost:8000/property/search', {
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
        <section
            className="min-h-screen flex items-center justify-center bg-contain bg-center bg-[url('https://res.cloudinary.com/dlovthlr8/image/upload/v1721895377/library/ce5r3czzefwxikzteym9.jpg')]">
            <div className="bg-white bg-opacity-70 p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Search Properties</h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Search by name or location"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
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
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        onClick={handleSearch}
                        className="w-full p-2 bg-blue-500 text-white rounded"
                    >
                        Search
                    </button>
                </div>
                <div className="mt-8">
                    {properties.map((property, index) => (
                        <div key={index} className="p-4 bg-white mb-4 rounded shadow-md">
                            <h3 className="text-xl font-bold">{property.propertyName}</h3>
                            <p>Type: {property.propertyType}</p>
                            <p>Location: {property.location}</p>
                            <p>Price: {property.price}</p>
                            <p>{property.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PropertySearch;

