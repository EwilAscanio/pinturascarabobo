# Pinturas Carabobo

Micropágina de ubicaciones y contacto de Pinturas Carabobo, C.A. El visitante elige una sede, copia el teléfono, abre WhatsApp con el mensaje oficial o entra directo al pin de Google Maps.

El Viñedo aparece como Sede Central. Después van San Diego, Cuatricentenario e Industrial, con el mismo horario. Los botones no abren ventanas intermedias: WhatsApp y «Cómo llegar» salen en una pestaña nueva. Al cargar, las tarjetas entran en cascada y se elevan al pasar el cursor.

Teléfono, dirección, mensaje de WhatsApp y GPS coinciden con la carpeta `micropage`, que es la fuente de esos datos.

## Stack

| Tecnología | Uso |
| --- | --- |
| React 19 | Interfaz, en JavaScript y JSX |
| Vite 8 | Desarrollo y build estático |
| Tailwind CSS 4 | Estilos |
| Node.js test runner | Pruebas de sedes y enlaces |

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

La aplicación queda en [http://localhost:3000](http://localhost:3000). Vite también escucha en la red local, en el puerto 3000, para abrirla desde un teléfono. Si ese puerto está ocupado, Vite usa el siguiente libre.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga al guardar |
| `npm test` | Comprueba sedes, teléfonos, WhatsApp y enlaces de Maps |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve localmente el resultado de `build` |
| `npm run clean` | Borra `dist/` |

Para publicar, se despliega el contenido de `dist/`. Esa carpeta se regenera con `npm run build`.

## Estructura

```text
index.html                         Título y metadatos de la página
public/assets/brand/               Logo, trazos y arte de la composición
src/main.jsx                       Punto de entrada
src/App.jsx                        Composición de la página
src/components/BranchCard.jsx      Tarjeta de sede, teléfono y enlaces
src/components/BrandIcons.jsx      Íconos de la tarjeta
src/data/branches.js               Sedes, mensajes y enlaces
src/data/branches.test.js          Pruebas de esos datos
src/index.css                      Tipografía, entrada y hover
```

## Actualizar una sucursal

Los textos, teléfonos y mapas viven en `src/data/branches.js`. La interfaz recorre `BRANCH_LOCATIONS`, así que un cambio de contenido no exige modificar el diseño de la tarjeta.

| Campo | Función |
| --- | --- |
| `name` | Título de la tarjeta |
| `badge` | Sello visible. Hoy solo lo usa El Viñedo (`Sede Central`) |
| `isFeatured` | Resalta la tarjeta principal |
| `address` | Dirección mostrada |
| `schedule` | Horario mostrado |
| `phoneDisplay` | Número visible. Al tocarlo se copia |
| `phoneRaw` | Dígitos del mismo número, usados en `https://wa.me/` |
| `whatsappGreeting` | Texto que llega precargado al abrir WhatsApp |
| `mapsUrl` | Pin de Google Maps. El valor `#` indica que todavía no hay pin |
| `mapsQuery` | Búsqueda de respaldo cuando `mapsUrl` es `#` |
| `cornerStroke` | Trazo decorativo de la tarjeta: `blue-lg`, `blue-sm` o `yellow` |

## Mapas

El Viñedo, San Diego e Industrial abren su pin (`maps.app.goo.gl`).

Cuatricentenario todavía no tiene pin. Su `mapsUrl` es `#`, y «Cómo llegar» abre una búsqueda de Google Maps con `mapsQuery`. Cuando exista el enlace definitivo, se reemplaza ese `#` por la URL del pin.

## Pruebas

```bash
npm test
```

Las pruebas cubren las cuatro sedes, la limpieza de los teléfonos venezolanos, el mensaje de WhatsApp de El Viñedo, la conservación de los pines existentes y la búsqueda de respaldo de Cuatricentenario.
