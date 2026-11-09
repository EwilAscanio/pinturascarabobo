import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BRANCH_LOCATIONS,
  sanitizePhoneDigits,
  buildWhatsAppUrl,
  buildGoogleMapsUrl,
} from './branches.js';

test('BRANCH_LOCATIONS contiene las 4 sedes oficiales con teléfono, dirección y WhatsApp de micropage', () => {
  assert.equal(BRANCH_LOCATIONS.length, 4);

  const [vinedo, sanDiego, cuatricentenario, industrial] = BRANCH_LOCATIONS;

  assert.equal(vinedo.name, 'Pinturas Carabobo El Viñedo');
  assert.equal(vinedo.badge, 'Sede Central');
  assert.equal(vinedo.isFeatured, true);
  assert.equal(
    vinedo.address,
    'Ubicado entre Locatel y el restaurante Imperial Garden. El Viñedo Edo Carabobo'
  );
  assert.equal(vinedo.phoneDisplay, '+58 424-4534470');
  assert.equal(vinedo.schedule, 'Lun a Sáb: 8:00 AM - 5:00 PM');
  assert.equal(
    vinedo.whatsappGreeting,
    'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo El Viñedo.'
  );

  assert.equal(sanDiego.name, 'Pinturas Carabobo San Diego');
  assert.equal(sanDiego.isFeatured, false);
  assert.equal(sanDiego.phoneDisplay, '+58 414-4070847');
  assert.ok(sanDiego.address.includes('C.C. Antiguo INSUMACA'));
  assert.equal(
    sanDiego.whatsappGreeting,
    'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo San Diego.'
  );

  assert.equal(cuatricentenario.name, 'Pinturas Carabobo Cuatricentenario');
  assert.equal(cuatricentenario.phoneDisplay, '+58 414-4070344');
  assert.ok(cuatricentenario.address.includes('C.C. Parque Napoli'));
  assert.equal(
    cuatricentenario.whatsappGreeting,
    'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Cuatricentenario.'
  );

  assert.equal(industrial.name, 'Pinturas Carabobo Industrial');
  assert.equal(industrial.phoneDisplay, '+58 414-4234751');
  assert.equal(industrial.address, 'Justo al lado de la sede central en El Viñedo.');
  assert.equal(
    industrial.whatsappGreeting,
    'Hola Pinturas Carabobo, me comunico desde Instagram. Quisiera información sobre Pinturas Carabobo Industrial.'
  );
});

test('sanitizePhoneDigits quita formato de los teléfonos venezolanos', () => {
  assert.equal(sanitizePhoneDigits('+58 424-4534470'), '584244534470');
  assert.equal(sanitizePhoneDigits('+58 414-4070847'), '584144070847');
  assert.equal(sanitizePhoneDigits('+58 414-4070344'), '584144070344');
  assert.equal(sanitizePhoneDigits('+58 414-4234751'), '584144234751');
});

test('buildWhatsAppUrl arma wa.me con el mensaje oficial codificado', () => {
  const urlPlain = buildWhatsAppUrl('+58 424-4534470');
  assert.equal(urlPlain, 'https://wa.me/584244534470');

  const vinedo = BRANCH_LOCATIONS[0];
  const urlWithMessage = buildWhatsAppUrl(vinedo.phoneRaw, vinedo.whatsappGreeting);
  const expectedEncoded = encodeURIComponent(vinedo.whatsappGreeting);
  assert.equal(urlWithMessage, `https://wa.me/584244534470?text=${expectedEncoded}`);
});

test('buildGoogleMapsUrl conserva el pin oficial y busca Cuatricentenario', () => {
  assert.equal(buildGoogleMapsUrl(BRANCH_LOCATIONS[0]), 'https://maps.app.goo.gl/egF9ErQRty1KosFB7');
  assert.equal(buildGoogleMapsUrl(BRANCH_LOCATIONS[1]), 'https://maps.app.goo.gl/NHPSADARHPNEpKkX7');
  assert.equal(buildGoogleMapsUrl(BRANCH_LOCATIONS[3]), 'https://maps.app.goo.gl/4tY6RKdy9iwoEvqE7');

  const cuatricentenario = buildGoogleMapsUrl(BRANCH_LOCATIONS[2]);
  assert.ok(cuatricentenario.startsWith('https://www.google.com/maps/search/?api=1&query='));
  assert.ok(decodeURIComponent(cuatricentenario).includes('Av. Cuatricentenario'));
});
