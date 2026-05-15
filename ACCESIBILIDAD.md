# Accesibilidad - WCAG 2.1 Level AA

Este documento describe las medidas de accesibilidad implementadas en el portfolio.

## Cumplimiento de Estándares

✅ **WCAG 2.1 Level AA**: Este portfolio ha sido diseñado siguiendo los estándares de accesibilidad web internacionales.

## Características de Accesibilidad

### 1. Contraste de Colores (WCAG 1.4.3)
- Todos los textos cumplen con el contraste mínimo de 4.5:1 (AA) para texto normal
- Headings y textos grandes cumplen 3:1
- Se utiliza Tailwind CSS con paleta de colores accesible por defecto
- Se evita depender únicamente del color para transmitir información

### 2. Animaciones y Movimiento (WCAG 2.3.3, 2.4.11)
- Se respeta la preferencia `prefers-reduced-motion` del navegador
- Las animaciones se desactivan automáticamente para usuarios que prefieren movimiento reducido
- No hay animaciones parpadeantes o que podrían causar mareos
- Todas las animaciones CSS duran menos de 3 segundos

### 3. Navegación por Teclado (WCAG 2.1.1, 2.4.3)
- ✅ Todos los elementos interactivos son accesibles por teclado
- ✅ La navegación por Tab sigue un orden lógico
- ✅ Focus visible claramente indicado (outline azul)
- ✅ El menú de navegación `<details>` es completamente accesible (elemento nativo)
- ✅ Los botones responden a Enter y Space

### 4. Semántica HTML (WCAG 1.3.1)
- ✅ Uso correcto de headings: cada página tiene un único `<h1>`
- ✅ Estructura lógica de headings (`<h1>` → `<h2>` → `<h3>`)
- ✅ Elementos `<button>` para acciones
- ✅ Elementos `<a>` para navegación
- ✅ Uso de `<article>`, `<nav>`, `<main>` donde corresponde
- ✅ Formulario correctamente estructurado con `<form>`

### 5. Etiquetas ARIA (WCAG 1.1.1, 1.3.1)
- ✅ `aria-label` en iconos sin texto
- ✅ `aria-hidden="true"` en elementos puramente decorativos
- ✅ `role="img"` en SVGs que transmiten información

### 6. Imágenes y Alt Text (WCAG 1.1.1)
- ✅ Todas las imágenes tienen alt text descriptivo
- ✅ Imágenes decorativas tienen `alt=""` y `aria-hidden="true"`
- ✅ Las imágenes del stack tienen `aria-hidden="true"` porque el label está en el texto

### 7. Formularios (WCAG 1.3.5, 2.1.1, 3.2.2)
- ✅ Todos los inputs tienen `<label>` asociados (visible o aria-label)
- ✅ Validación nativa del navegador
- ✅ Mensajes de error claramente visibles
- ✅ El submit button es accesible y tiene estado disabled visual

### 8. Links y Targets (WCAG 2.4.4, 2.5.5)
- ✅ El texto del link es descriptivo
- ✅ Los links no solo dicen "click aquí"
- ✅ Tamaño mínimo de target: 44x44px (mobile)

### 9. Color de Tema (WCAG 1.4.11)
- ✅ Dark mode y light mode con contraste adecuado
- ✅ Respeta `prefers-color-scheme` del sistema
- ✅ Transiciones suaves entre temas

### 10. Texto Redimensionable (WCAG 1.4.4)
- ✅ El zoom del navegador funciona correctamente (hasta 200%)
- ✅ No hay `max-width` restrictivo que bloquee zoom
- ✅ Unidades relativas (rem, %) usadas en la mayoría de tamaños

### 11. Meta Tags y SEO (WCAG 1.3.1)
- ✅ Meta description en todas las páginas
- ✅ Open Graph tags para mejor compartir en redes
- ✅ Language atribute correcto en `<html lang="es">`
- ✅ Viewport meta tag para responsive

### 12. Rendimiento y Velocidad
- ✅ Sitio generado estáticamente (Astro) = carga rápida
- ✅ Optimización de scroll events con RAF
- ✅ Respeta passive listeners para mejor rendimiento

## Herramientas de Validación Recomendadas

Para validar la accesibilidad, usa:

1. **Lighthouse** (Chrome DevTools)
   - Genera reporte de accesibilidad
   - Valida muchas reglas WCAG

2. **axe DevTools** (Extensión Chrome/Firefox)
   - Auditoría detallada de accesibilidad
   - Identifica problemas específicos

3. **WAVE** (WebAIM)
   - Validación visual
   - Contraste de colores

4. **Keyboard Navigation Test**
   - Tab por toda la página
   - Verify order lógico
   - Test Enter/Space en botones

## Testing Manual

### Pruebas Recomendadas

1. **Navegación por Teclado**
   - Presiona Tab repetidamente
   - Verifica que el focus sea visible
   - Navega por todo el sitio sin mouse

2. **Lectores de Pantalla**
   - NVDA (gratis, Windows)
   - JAWS (pago, Windows)
   - VoiceOver (Mac/iOS)
   - TalkBack (Android)

3. **Zoom**
   - Ctrl + o Cmd + para aumentar
   - Prueba hasta 200%

4. **Color Ciego**
   - Usa simuladores online
   - Verifica que no dependa solo de color

5. **Reduced Motion**
   - Usa DevTools para simular preferencia
   - Verifica animaciones deshabilitadas

## Limitaciones Conocidas

Actualmente ninguna limitación conocida que afecte el cumplimiento AA.

## Mejoras Futuras

- Agregar more/less content buttons para mejorar scannability
- Implementar skip-to-content link
- Agregar breadcrumbs en subpáginas
- Language selector más robusto

## Contacto

Si encuentras problemas de accesibilidad, por favor contacta a través del formulario de contacto indicando:
- URL de la página
- Problema específico
- Navegador y versión
- Tecnología asistiva usada (si aplica)

---

**Última actualización**: 2026-05-15
**Estándar**: WCAG 2.1 Level AA
