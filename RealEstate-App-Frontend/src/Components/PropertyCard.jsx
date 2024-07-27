import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <div className="container mx-auto max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={property.images[0]} alt={property.propertyName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{property.propertyName}</div>
        <p className="text-gray-700 text-base">
          {property.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.propertyType}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.location}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${property.price}</span>
        <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ${property.PropertyStatus === 'Not Sold' ? 'bg-red-500' : 'bg-green-500'}`}>{property.PropertyStatus}</span>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    propertyName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    PropertyStatus: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;


