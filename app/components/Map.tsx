"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { companyInfo } from "@/app/data/content";

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const { lat, lng } = companyInfo.coordinates;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 14,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker
    const marker = L.marker([lat, lng]).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div style="text-align: center; padding: 8px;">
        <strong style="font-size: 14px; color: #1a1a1a;">${companyInfo.name}</strong>
        <br/>
        <span style="font-size: 12px; color: #666;">
          ${companyInfo.address.street}<br/>
          ${companyInfo.address.postalCode} ${companyInfo.address.city}
        </span>
      </div>
    `).openPopup();

    // Add service area circle
    L.circle([lat, lng], {
      color: "#042FFF",
      fillColor: "#042FFF",
      fillOpacity: 0.1,
      radius: 15000, // 15km radius
      weight: 2,
    }).addTo(map);

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={`w-full h-full min-h-[300px] rounded-xl ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}

