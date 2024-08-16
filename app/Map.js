'use client';

import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';

const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
];

function CenterMap({ position }) {
    const map = useMap();

    useEffect(() => {
        map.setView(position, map.getZoom());
    }, [position, map]);

    return null;
}

const Map = () => {
    const [center, setCenter] = useState([20.5937, 78.9629]); // Center of India

    return (
        <MapContainer center={center} zoom={5} style={{ height: "800px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, idx) => (
                <Marker
                    key={idx}
                    position={marker.position}
                    eventHandlers={{
                        click: () => {
                            setCenter(marker.position);
                        },
                    }}
                >
                    <Popup>{marker.label}</Popup>
                </Marker>
            ))}
            <CenterMap position={center} />
        </MapContainer>
    );
};

export default Map;
