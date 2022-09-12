/**
 * 
 * Complete the function getLatLng such that it destructures the userLocation object into 2 variables: lat and lng.
   After destructuring successfully, the function will automatically return a string that describes the location.
   
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 */
const getLatLng = (userLocation) => {
  const { lat, lng } = userLocation;

  return `The latitude is ${lat} and the longitude is ${lng}`;
};

// Sample usage - do not modify
const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};
console.log(getLatLng(userLocation));
