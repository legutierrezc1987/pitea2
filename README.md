# Pitea2 - Artesanía Piteada de Lujo

![Pitea2 Logo](/public/favicon.svg)

Sitio web para Pitea2, especializado en la venta de carteras y cintos piteados con hilos de plata de la más alta calidad.

## Características

- Diseño responsive para dispositivos móviles y desktop
- Carrusel de imágenes para mostrar 13 fotos de productos
- Reproductor de video integrado
- Integración con WhatsApp para contacto directo
- Categorización de productos (Cintos y Carteras)
- Diseño elegante que destaca la artesanía mexicana

## Tecnologías utilizadas

- React + TypeScript
- Tailwind CSS para estilos
- Vite como bundler
- React Slick para el carrusel
- React Icons para iconografía
- Desplegado en GitHub Pages

## Instalación y ejecución local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/Pitea2.git
cd Pitea2
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en:
```
http://localhost:5173
```

## Estructura del proyecto

```
/src
  /assets          # Archivos estáticos (imágenes, videos, etc.)
  /components
    /layout        # Componentes de diseño (Header, Footer, Layout)
    /sections      # Secciones principales de la página
    /ui            # Componentes de UI reutilizables
  /data            # Datos de la aplicación (productos, etc.)
  App.tsx          # Componente principal
  main.tsx         # Punto de entrada de la aplicación
```

## Despliegue

El sitio se despliega automáticamente a GitHub Pages cuando se realiza un push a la rama `main`.

## Personalización

Para agregar o modificar productos, edita el archivo `src/data/products.ts`.

Para reemplazar las imágenes de ejemplo, coloca tus imágenes en `src/assets/images/` y actualiza las referencias en el código.

## Contacto

Para cualquier pregunta o asistencia, contacta a través de WhatsApp: +52 395 788 1559

---

Desarrollado con ❤️ para Pitea2
