# Pinturas Carabobo

Micropágina de sucursales de Pinturas Carabobo, C.A. Está pensada para el enlace de la biografía de Instagram: el visitante elige su sede, escribe por WhatsApp con un mensaje ya redactado o abre la ubicación en Google Maps.

La sede de El Viñedo aparece destacada como Sede Central. San Diego, Cuatricentenario e Industrial se muestran a continuación, con el mismo horario y las mismas acciones.

## Stack

| Tecnología | Uso |
| --- | --- |
| React 19 | Interfaz |
| Vite 8 | Desarrollo y build estático |
| Tailwind CSS 4 | Estilos |
| Node.js test runner | Pruebas de enlaces y datos |

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

La aplicación queda en [http://localhost:3000](http://localhost:3000). Vite también escucha en la red local, en el puerto 3000, para revisar la página desde un teléfono.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga al guardar |
| `npm test` | Comprueba sedes, teléfonos de WhatsApp y enlaces de Maps |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve localmente el resultado de `build` |
| `npm run clean` | Borra `dist/` |

Para publicar, se despliega el contenido de `dist/`. Esa carpeta no se versiona: se regenera con `npm run build`.

## Estructura

```text
index.html              Metadatos, Open Graph y datos estructurados
public/logo.PNG         Logotipo y favicon
public/og-preview.svg   Imagen para compartir el enlace
src/main.jsx            Punto de entrada
src/App.jsx             Composición de la página
src/components/         Cabecera y tarjeta de sucursal
src/data/sucursales.js  Datos, mensajes y enlaces
src/index.css           Tipografía y animación de entrada
```

## Actualizar una sucursal

Los textos, teléfonos y mapas viven en `src/data/sucursales.js`. La interfaz solo recorre ese arreglo, así que un cambio de contenido no exige modificar componentes.

| Campo | Función |
| --- | --- |
| `nombre` | Título de la tarjeta y nombre usado en el mensaje de WhatsApp |
| `etiqueta` | Sello visible cuando `destacado` es `true`. Hoy solo lo usa El Viñedo (`Sede Central`) |
| `destacado` | Resalta la tarjeta principal |
| `direccion` | Dirección mostrada en la tarjeta |
| `horario` | Horario mostrado en la tarjeta |
| `whatsapp` | Número visible. Se limpia de espacios y guiones para armar `https://wa.me/` |
| `mensajeWhatsapp` | Texto que llega precargado al abrir WhatsApp |
| `enlaceMaps` | Pin de Google Maps. El valor `#` indica que todavía no hay pin |
| `coordenadasMapsQuery` | Búsqueda de respaldo cuando `enlaceMaps` es `#` o está vacío |

El nombre de El Viñedo en `index.html` (datos estructurados) debe coincidir con `nombre` de esa sede. La imagen `public/og-preview.svg` es independiente y conserva el sello «Sede Central».

## Mapas

El Viñedo, San Diego e Industrial abren su pin (`maps.app.goo.gl`).

Cuatricentenario todavía no tiene pin. Su `enlaceMaps` es `#`, y el botón «Cómo llegar» abre una búsqueda de Google Maps con `coordenadasMapsQuery`. Cuando exista el enlace definitivo, se reemplaza ese `#` por la URL del pin.

## Pruebas

```bash
npm test
```

Las pruebas cubren las cuatro sedes, la normalización de los teléfonos venezolanos, el mensaje de WhatsApp de El Viñedo, la conservación de los pines existentes y la búsqueda de respaldo de Cuatricentenario.
