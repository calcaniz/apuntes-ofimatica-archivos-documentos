---
title: Modificar la estructura de una tabla
---

# Modificar la estructura de una tabla

En la UP01 aprendimos a crear una tabla sencilla. Ahora aprenderemos a **cambiar su estructura**: añadir y quitar filas y columnas, cambiar su tamaño y unir o dividir celdas.

## Recordamos: las partes de una tabla

- Las **filas** se distribuyen en horizontal.
- Las **columnas** se distribuyen en vertical.
- Las **celdas** contienen la información.
- Los **encabezados** explican qué datos hay en cada columna.

## Pensar antes de crear la tabla

Antes de insertar una tabla decidimos:

1. qué información queremos representar;
2. cuántas columnas necesitamos y qué encabezado tendrá cada una;
3. cuántas filas de datos vamos a usar.

| Actividad { .table-main-column .table-content .table-bg-principal .table-cl-secundario } | Lugar { .table-content .table-bg-principal .table-cl-secundario } | Día { .table-content .table-bg-principal .table-cl-secundario } | Hora { .table-full-container .table-content .table-bg-principal .table-cl-secundario } |
|---|---|---|:---:|
| Presentación { .table-cl-secundario .table-text-bold } | Salón principal | Viernes | 16:00 |
| Competición { .table-cl-secundario .table-text-bold } | Pista central | Viernes | 17:00 |
| Entrega de premios { .table-cl-secundario .table-text-bold } | Escenario | Viernes | 19:00 |

Esta tabla tiene **4 columnas** y **4 filas**: una fila de encabezados y tres filas de datos.

!!! importante "La fila de encabezados también cuenta"
    Si necesitamos una fila de encabezados y cuatro de datos, crearemos una tabla de **cinco filas**.

Para insertarla: **Taula › Insereix una taula…** (`Ctrl + F12`), indicamos columnas y filas y pulsamos **Insereix**.

## Movernos por las celdas

| Tecla { .table-main-column .table-content .table-bg-principal .table-cl-secundario } | Acción { .table-full-container .table-content .table-bg-principal .table-cl-secundario } |
|---|---|
| `Tab` { .table-cl-secundario .table-text-bold } | Pasa a la celda siguiente. En la última celda, crea una fila nueva. |
| `Mayús + Tab` { .table-cl-secundario .table-text-bold } | Vuelve a la celda anterior. |
| Flechas { .table-cl-secundario .table-text-bold } | Mueven el cursor entre celdas. |

## Seleccionar partes de la tabla

Para cambiar una fila, una columna o toda la tabla, primero la seleccionamos:

- **arrastrando** el ratón sobre las celdas;
- o con el cursor en una celda y el menú **Taula › Selecciona › Taula / Fila / Columna / Cel·la**.

## Añadir y eliminar filas y columnas

Colocamos el cursor en una celda de la fila o columna de referencia y usamos el menú **Taula** o el botón derecho del ratón:

| Para… { .table-main-column .table-content .table-bg-principal .table-cl-secundario } | Opción { .table-full-container .table-content .table-bg-principal .table-cl-secundario } |
|---|---|
| Añadir una fila encima o debajo { .table-cl-secundario .table-text-bold } | **Taula › Insereix › Files damunt** / **Files davall** |
| Añadir una columna a la izquierda o a la derecha { .table-cl-secundario .table-text-bold } | **Taula › Insereix › Columnes abans** / **Columnes després** |
| Eliminar una fila { .table-cl-secundario .table-text-bold } | **Taula › Suprimeix › Files** |
| Eliminar una columna { .table-cl-secundario .table-text-bold } | **Taula › Suprimeix › Columnes** |

Después de añadir una columna, escribimos su encabezado y completamos sus datos.

!!! ejemplo "Añadimos la columna Categoría"
    | Participante { .table-main-column .table-content .table-bg-principal .table-cl-secundario } | Hora { .table-full-container .table-content .table-bg-principal .table-cl-secundario } |
    |---|:---:|
    | Ana | 17:00 |
    | David | 17:15 |

    Con el cursor en la columna **Participante**, elegimos **Columnes després** y escribimos los datos:

    | Participante { .table-main-column .table-content .table-bg-principal .table-cl-secundario } | Categoría { .table-content .table-bg-principal .table-cl-secundario } | Hora { .table-full-container .table-content .table-bg-principal .table-cl-secundario } |
    |---|---|:---:|
    | Ana | Iniciación | 17:00 |
    | David | Avanzada | 17:15 |

!!! advertencia "Borrar el texto no elimina la fila"
    Si seleccionamos una fila y pulsamos `Supr`, solo se borra su contenido: la fila sigue ahí. Para quitarla usamos **Taula › Suprimeix › Files**. Antes de eliminar, revisamos que no contenga datos necesarios. Si nos equivocamos, `Ctrl + Z`.

## Cambiar el ancho de las columnas

No todas las columnas necesitan el mismo espacio: una columna con descripciones necesita más que una columna con horas.

1. Colocamos el ratón sobre la línea que separa dos columnas.
2. Esperamos a que cambie la forma del puntero.
3. Arrastramos la línea hacia la izquierda o hacia la derecha.

Evitamos que el texto quede cortado, que las palabras ocupen demasiadas líneas o que la tabla se salga de los márgenes.

## Cambiar la altura de las filas

Writer adapta la altura de cada fila a su contenido. Si necesitamos más espacio, arrastramos el borde inferior de la fila.

!!! importante "Sin Intro para hacer espacio"
    No creamos espacio dentro de una tabla pulsando muchas veces `Intro`.

## Fusionar y dividir celdas

**Fusionar** celdas convierte varias celdas en una sola. Lo usamos, por ejemplo, para escribir un título que ocupe todo el ancho de la tabla:

1. Seleccionamos las celdas de la primera fila.
2. Elegimos **Taula › Fusiona les cel·les**.
3. Escribimos el título: **PROGRAMA DEL EVENTO**.

**Dividir** una celda la separa en varias partes: seleccionamos la celda, elegimos **Taula › Divideix les cel·les…** e indicamos cuántas partes queremos.

Solo fusionamos o dividimos celdas cuando ayuda a organizar la información.

## Comprueba que lo has entendido

1. Necesitas una fila de encabezados y seis actividades con cuatro datos cada una. ¿Cuántas filas y columnas tendrá la tabla?
2. ¿Qué ocurre si seleccionas una fila y pulsas `Supr`?
3. ¿Cómo añades una columna a la derecha de la columna **Lugar**?
4. ¿Para qué sirve fusionar celdas? Pon un ejemplo.
