import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8000/property/');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Property Listings</h1>
      <div className="flex flex-wrap justify-center">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} properties={properties} />
          ))
        ) : (
          <p className="text-center">No properties found</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
