import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SUCURSALES,
  normalizePhoneForWhatsApp,
  buildWhatsAppUrl,
  resolveGoogleMapsUrl,
} from './sucursales.js';

test('SUCURSALES contiene las 4 locaciones actualizadas con Sede Central destacada', () => {
  assert.equal(SUCURSALES.length, 4);

  const central = SUCURSALES[0];
  assert.equal(central.nombre, 'Pinturas Carabobo El Viñedo');
  assert.equal(central.etiqueta, 'Sede Central');
  assert.equal(central.destacado, true);
  assert.equal(
    central.direccion,
    'Ubicado entre Locatel y el restaurante Imperial Garden. El Viñedo Edo Carabobo'
  );
  assert.equal(central.whatsapp, '+58 424-4534470');

  const sanDiego = SUCURSALES[1];
  assert.equal(sanDiego.nombre, 'Pinturas Carabobo San Diego');
  assert.equal(sanDiego.whatsapp, '+58 414-4070847');
  assert.ok(sanDiego.direccion.includes('C.C. Antiguo INSUMACA'));

  const cuatricentenario = SUCURSALES[2];
  assert.equal(cuatricentenario.nombre, 'Pinturas Carabobo Cuatricentenario');
  assert.equal(cuatricentenario.whatsapp, '+58 414-4070344');
  assert.ok(cuatricentenario.direccion.includes('C.C. Parque Napoli'));
  assert.ok(cuatricentenario.coordenadasMapsQuery.includes('Av. Cuatricentenario'));

  const industrial = SUCURSALES[3];
  assert.equal(industrial.nombre, 'Pinturas Carabobo Industrial');
  assert.equal(industrial.whatsapp, '+58 414-4234751');
  assert.equal(industrial.direccion, 'Justo al lado de la sede central en El Viñedo.');
});

test('buildWhatsAppUrl codifica correctamente con encodeURIComponent y limpia espacios y guiones', () => {
  const central = SUCURSALES[0];
  const url = buildWhatsAppUrl(central.whatsapp, central.mensajeWhatsapp);

  assert.ok(url.startsWith('https://wa.me/584244534470?text='));
  const expectedEncoded = encodeURIComponent(
    'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo El Viñedo.'
  );
  assert.equal(url, `https://wa.me/584244534470?text=${expectedEncoded}`);
});

test('normalizePhoneForWhatsApp elimina espacios, signo + y guiones de los números venezolanos', () => {
  assert.equal(normalizePhoneForWhatsApp('+58 424-4534470'), '584244534470');
  assert.equal(normalizePhoneForWhatsApp('+58 414-4070847'), '584144070847');
  assert.equal(normalizePhoneForWhatsApp('+58 414-4070344'), '584144070344');
  assert.equal(normalizePhoneForWhatsApp('+58 414-4234751'), '584144234751');
});

test('resolveGoogleMapsUrl conserva el pin cuando enlaceMaps ya es definitivo', () => {
  assert.equal(resolveGoogleMapsUrl(SUCURSALES[0]), 'https://maps.app.goo.gl/egF9ErQRty1KosFB7');
  assert.equal(resolveGoogleMapsUrl(SUCURSALES[1]), 'https://maps.app.goo.gl/NHPSADARHPNEpKkX7');
  assert.equal(resolveGoogleMapsUrl(SUCURSALES[3]), 'https://maps.app.goo.gl/4tY6RKdy9iwoEvqE7');
});

test('resolveGoogleMapsUrl transforma el marcador # de Cuatricentenario en una búsqueda de Google Maps', () => {
  const url = resolveGoogleMapsUrl(SUCURSALES[2]);
  assert.ok(url.startsWith('https://www.google.com/maps/search/?api=1&query='));
  assert.ok(decodeURIComponent(url).includes('Av. Cuatricentenario'));
});
