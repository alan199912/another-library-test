export const MODAL_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/modal/overview'
  },
  {
    title: 'Api',
    route: '/components/modal/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/modal/examples'
  }
];
export const MODAL_BEST_PRACTICES = [
  '<strong>Utilizar los modales para confirmar acciones o completar tareas</strong> que requieran toda la atención.',
  '<strong>Usarlos con moderación</strong> ya que los diálogos interrumpen la acción del usuario',
  '<strong>Mostrar los modales como resultado de una acción realizada por el usuario</strong> o (menos comúnmente) por inactividad.',
  '<strong>Usar títulos simples y comunicar lo principal</strong> que la persona usuaria está a punto de hacer. Lo ideal es que los títulos usen la misma frase o una similar a la llamada a la acción que llevó a alguien al cuadro de diálogo de alerta en primer lugar.',
  '<strong>Mantener una coherencia textual entre el título del modal y las opciones para los próximos pasos.</strong> Por ejemplo, si el título de un cuadro de diálogo es "Eliminar conversación", la etiqueta del botón de acción principal sería "Eliminar".',
  '<strong>Apilar verticalmente los grupos de botones</strong> cuando el espacio horizontal es limitado. Deben aparecer en orden ascendente según la importancia, con la acción más crítica en la parte inferior.'
];

export const MODAL_BAD_PRACTICES = [
  '<strong>No sorprender al usuario,</strong> no le muestres un modal automáticamente si no realizó ninguna acción previa.',
  '<strong>Evitar hacer preguntas como</strong> "¿Estás seguro de que deseas salir?" o "¿Querés cancelar?" son redundantes en la decisión que ya tomaron al realizar una acción previa. Esta frase también establece un conjunto de acciones de sí/no, lo que puede volverse confuso. En su lugar, reformulá el mensaje para centrarlo en el resultado o efecto.',
  '<strong>Evitar el contenido largo que requiere desplazamiento.</strong> El contenido extenso puede ser problemático porque empuja los botones fuera de la vista inicial del usuario, lo que puede causar confusión.'
];

export const MODAL_EXAMPLE_CONFIRMATION_HTML = `
  <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Ver modal</button>
  <o-modal dataTarget="exampleModal" title="Titulo del Modal" description="Descripción del modal">
    <button class="btn btn-link" data-dismiss="modal">Salir</button>
    <button class="btn btn-primary">Aceptar</button>
  </o-modal>`;

export const MODAL_EXAMPLE_DANGER_HTML = `
  <button class="btn btn-primary" data-toggle="modal" data-target="#dangerModal">Ver modal</button>
  <o-modal dataTarget="dangerModal" title="Titulo del Modal" description="Descripción del modal">
    <button class="btn btn-secondary" data-dismiss="modal">Salir</button>
    <button class="btn btn-danger">Aceptar</button>
  </o-modal>`;
