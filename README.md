# Svar

Cuestionarios, una pregunta a la vez. by fuge1618

Svar convierte formularios para tildar en un cuestionario cómodo de responder desde el celular.

## Cómo funciona

- **Modo profesional** (al abrir la app sin link): una biblioteca de formularios, y un botón que arma un link con los que se elijan.
- **Modo paciente** (al abrir el link): responde una pregunta por pantalla y al final envía un resumen de pregunta y letra por mail, o comparte el PDF con el detalle.

Para que el link sea corto, los formularios en blanco que envía el profesional se guardan en un almacenamiento mínimo de fuge1618 (`api.fuge1618.com`). Las respuestas no pasan por ningún servidor: quedan en el navegador del paciente hasta que él las envía. La app no calcula puntajes ni interpreta resultados.

## Formularios

La app no incluye ningún cuestionario. Cada profesional carga los suyos y es responsable de tener los permisos de uso de cada instrumento.

## Técnica

Un solo archivo, `index.html`, sin dependencias de build. El PDF se genera en el navegador con jsPDF.
