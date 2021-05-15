/* eslint-disable no-unused-vars */
import {Autocomplete, GoogleMap, LoadScript, Marker, MarkerClusterer, StandaloneSearchBox} from '@react-google-maps/api';
import { useState } from 'react';
import './App.css';
import { FaMapMarkerAlt } from "react-icons/fa";



const mapStyles = {
  height: '100vh',
  width: '100vw',
};

const library = ['places'];
const defaultCenter = {
  lat: 43.7181552, lng: -79.5184853,
};
function App() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState({
    lat: null,
    lng: null
  })
  const [markers, setMarkers] = useState([])
  const onLoad = ref => setSearch(ref)
  const onPlacesChanged = () => {
    // console.log(search.getPlaces())
    const places = search.getPlaces()
    const bounds = new window.google.maps.LatLngBounds()
    console.log(bounds)
    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else{
        bounds.extend(place.geometry.viewport)
      }
    })
    const marker = places.map(place => ({
      position: place.geometry.location,
    }))
    setMarkers(marker)
  }
  console.log(markers)
  return (
    <>
    <LoadScript
      libraries={library}
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input 
          type='text'
          placeholder='start searching...'
          style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-120px"
        }}
        />
      </StandaloneSearchBox>
      {markers.map((marker, index) => 
      <Marker
        key={1}
        position={marker}
        icon={{url: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'}}
      />

      )}
      </GoogleMap>
    </LoadScript>
    </>
  );
};


export default App;
