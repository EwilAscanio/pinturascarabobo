/** Datos y enlaces de las sucursales de Pinturas Carabobo. */

export const SUCURSALES = [
  {
    id: 'sede-central-el-vinedo',
    nombre: 'Pinturas Carabobo El Viñedo',
    etiqueta: 'Sede Central',
    destacado: true,
    direccion: 'Ubicado entre Locatel y el restaurante Imperial Garden. El Viñedo Edo Carabobo',
    horario: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    whatsapp: '+58 424-4534470',
    mensajeWhatsapp:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo El Viñedo.',
    enlaceMaps: 'https://maps.app.goo.gl/egF9ErQRty1KosFB7',
    coordenadasMapsQuery: 'Locatel El Viñedo, Valencia, Edo. Carabobo, Venezuela',
  },
  {
    id: 'sede-san-diego',
    nombre: 'Pinturas Carabobo San Diego',
    destacado: false,
    direccion:
      'San Diego: C.C. Antiguo INSUMACA al lado de UPI. Av. Don Julio Centeno, sector Boulevard Castillito.',
    horario: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    whatsapp: '+58 414-4070847',
    mensajeWhatsapp:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo San Diego.',
    enlaceMaps: 'https://maps.app.goo.gl/NHPSADARHPNEpKkX7',
    coordenadasMapsQuery: 'Av. Don Julio Centeno, Sector Castillito, San Diego, Carabobo, Venezuela',
  },
  {
    id: 'sede-cuatricentenario',
    nombre: 'Pinturas Carabobo Cuatricentenario',
    destacado: false,
    direccion:
      'Sector Los Nísperos: Av. Cuatricentenario, sector Los Nísperos, C.C. Parque Napoli, al lado de Superautos Carabobo.',
    horario: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    whatsapp: '+58 414-4070344',
    mensajeWhatsapp:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Cuatricentenario.',
    enlaceMaps: '#',
    coordenadasMapsQuery: 'Av. Cuatricentenario, Los Nísperos, Valencia, Carabobo, Venezuela',
  },
  {
    id: 'sede-industrial',
    nombre: 'Pinturas Carabobo Industrial',
    destacado: false,
    direccion: 'Justo al lado de la sede central en El Viñedo.',
    horario: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    whatsapp: '+58 414-4234751',
    mensajeWhatsapp:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Industrial.',
    enlaceMaps: 'https://maps.app.goo.gl/4tY6RKdy9iwoEvqE7',
    coordenadasMapsQuery: 'El Viñedo, Valencia, Edo. Carabobo, Venezuela',
  },
];

/**
 * Normaliza un número telefónico venezolano o internacional eliminando símbolos
 * para construir enlaces oficiales de WhatsApp (`https://wa.me/`).
 */
export function normalizePhoneForWhatsApp(phone) {
  return phone.replace(/[^\d]/g, '');
}

/**
 * Construye el enlace directo de WhatsApp con `encodeURIComponent`.
 */
export function buildWhatsAppUrl(whatsapp, baseMessage) {
  const cleanPhone = normalizePhoneForWhatsApp(whatsapp);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(baseMessage.trim())}`;
}

/**
 * Resuelve el enlace de Google Maps. Si la sucursal tiene `#` como marcador,
 * genera una búsqueda hacia la referencia guardada. Los pines exactos se
 * reemplazan después, cuando existan los enlaces definitivos.
 */
export function resolveGoogleMapsUrl(sucursal) {
  if (sucursal.enlaceMaps && sucursal.enlaceMaps !== '#') {
    return sucursal.enlaceMaps;
  }
  const query = sucursal.coordenadasMapsQuery || `${sucursal.direccion}, Carabobo, Venezuela`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
