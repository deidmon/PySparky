
# PySparky

Documentación interactiva y moderna para aprender PySpark desde cero hasta nivel avanzado.

## 🚀 ¿Qué es PySparky?

PySparky es un sitio web de documentación construido con Astro + Starlight, pensado para guiarte en el aprendizaje de PySpark, el framework de procesamiento distribuido en Python.

Incluye:
- Guías paso a paso (instalación, fundamentos, transformaciones, SQL, optimización, etc.)
- Ejemplos prácticos y código listo para usar
- Buenas prácticas y casos de uso avanzados
- Navegación rápida y búsqueda integrada

## 📁 Estructura del Proyecto

```
.
├── public/                  # Archivos estáticos (favicon, etc.)
├── src/
│   ├── assets/              # Imágenes y recursos
│   ├── content/
│   │   └── docs/            # Documentación en .mdx
│   └── content.config.ts    # Configuración de contenido
├── astro.config.mjs         # Configuración principal de Astro/Starlight
├── package.json             # Dependencias y scripts
└── tsconfig.json            # Configuración TypeScript
```

## �‍💻 Comandos útiles

| Comando           | Acción                                         |
|-------------------|-----------------------------------------------|
| `npm install`     | Instala las dependencias                      |
| `npm run dev`     | Inicia el servidor local en `localhost:4321`  |
| `npm run build`   | Genera el sitio para producción en `./dist/`  |
| `npm run preview` | Previsualiza el sitio generado                |

## 🌐 ¿Cómo contribuir?

Puedes proponer mejoras, agregar ejemplos o corregir errores abriendo un issue o PR en el repositorio.

## � Recursos útiles

- [Documentación oficial de PySpark](https://spark.apache.org/docs/latest/api/python/)
- [Starlight Docs](https://starlight.astro.build/)
- [Astro Docs](https://docs.astro.build)
