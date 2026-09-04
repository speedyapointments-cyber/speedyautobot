export const SHOP_GEO = {
  lat: 35.26531,
  lng: -80.75947,
  label: "6016 McDaniel Lane Suite D, Charlotte NC 28213",
  radiusMiles: 25,
} as const;

export function milesBetween(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

export function mapsPin(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export function mapsDirections(from: { lat: number; lng: number }) {
  return `https://www.google.com/maps/dir/?api=1&origin=${from.lat},${from.lng}&destination=${SHOP_GEO.lat},${SHOP_GEO.lng}`;
}

export function osmEmbed(lat: number, lng: number) {
  const d = 0.02;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;
}
