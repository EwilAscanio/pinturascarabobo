/** Sedes oficiales de Pinturas Carabobo. Teléfono, dirección, WhatsApp y GPS salen de micropage. */

export const BRANCH_LOCATIONS = [
  {
    id: 'el-vinedo',
    name: 'Pinturas Carabobo El Viñedo',
    badge: 'Sede Central',
    isFeatured: true,
    address: 'Ubicado entre Locatel y el restaurante Imperial Garden. El Viñedo Edo Carabobo',
    schedule: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    phoneDisplay: '+58 424-4534470',
    phoneRaw: '584244534470',
    cornerStroke: 'blue-lg',
    mapsUrl: 'https://maps.app.goo.gl/egF9ErQRty1KosFB7',
    mapsQuery: 'Locatel El Viñedo, Valencia, Edo. Carabobo, Venezuela',
    whatsappGreeting:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo El Viñedo.',
  },
  {
    id: 'san-diego',
    name: 'Pinturas Carabobo San Diego',
    isFeatured: false,
    address:
      'San Diego: C.C. Antiguo INSUMACA al lado de UPI. Av. Don Julio Centeno, sector Boulevard Castillito.',
    schedule: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    phoneDisplay: '+58 414-4070847',
    phoneRaw: '584144070847',
    cornerStroke: 'yellow',
    mapsUrl: 'https://maps.app.goo.gl/NHPSADARHPNEpKkX7',
    mapsQuery: 'Av. Don Julio Centeno, Sector Castillito, San Diego, Carabobo, Venezuela',
    whatsappGreeting:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo San Diego.',
  },
  {
    id: 'cuatricentenario',
    name: 'Pinturas Carabobo Cuatricentenario',
    isFeatured: false,
    address:
      'Sector Los Nísperos: Av. Cuatricentenario, sector Los Nísperos, C.C. Parque Napoli, al lado de Superautos Carabobo.',
    schedule: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    phoneDisplay: '+58 414-4070344',
    phoneRaw: '584144070344',
    cornerStroke: 'blue-sm',
    mapsUrl: '#',
    mapsQuery: 'Av. Cuatricentenario, Los Nísperos, Valencia, Carabobo, Venezuela',
    whatsappGreeting:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Cuatricentenario.',
  },
  {
    id: 'industrial',
    name: 'Pinturas Carabobo Industrial',
    isFeatured: false,
    address: 'Justo al lado de la sede central en El Viñedo.',
    schedule: 'Lun a Sáb: 8:00 AM - 5:00 PM',
    phoneDisplay: '+58 414-4234751',
    phoneRaw: '584144234751',
    cornerStroke: 'yellow',
    mapsUrl: 'https://maps.app.goo.gl/4tY6RKdy9iwoEvqE7',
    mapsQuery: 'El Viñedo, Valencia, Edo. Carabobo, Venezuela',
    whatsappGreeting:
      'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Industrial.',
  },
];

/** Deja solo dígitos para armar el enlace de WhatsApp. */
export function sanitizePhoneDigits(phone) {
  return phone.replace(/[^\d]/g, '');
}

/** Construye el enlace wa.me. El mensaje es opcional. */
export function buildWhatsAppUrl(phoneRaw, customMessage) {
  const digits = sanitizePhoneDigits(phoneRaw);
  if (!digits) {
    throw new Error('Phone number is required to build a WhatsApp URL');
  }
  const baseUrl = `https://wa.me/${digits}`;
  if (!customMessage || !customMessage.trim()) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(customMessage.trim())}`;
}

/**
 * Usa el pin oficial de Google Maps. Si la sede aún no tiene pin (`#`),
 * abre una búsqueda con la referencia GPS guardada.
 */
export function buildGoogleMapsUrl(branch) {
  if (branch.mapsUrl && branch.mapsUrl !== '#') {
    return branch.mapsUrl;
  }
  const query = branch.mapsQuery.trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
