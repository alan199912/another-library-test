export const ALERT_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/alert/overview'
  },
  {
    title: 'Api',
    route: '/components/alert/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/alert/examples'
  }
];

export const ALERT_DATA_SOURCE = [
  {
    name: '@Input() <br/> color: Colors',
    description: 'Se utiliza para establecer el color del alerta, Por defecto es danger.'
  }
];

export const ALERT_BEST_PRACTICES = [
  '<strong>Se amable,</strong> hacele saber de forma clara y con lenguaje conciso lo que debe hacer para que la tarea sea lo más fácil posible.',
  '<strong>Comprender el contexto del usuario.</strong> No incluir notificaciones que no estén relacionadas con el objetivo actual del usuario.',
  '<strong>Las alertas son una oportunidad.</strong> Los usuarios leerán un mensaje que les ayudará a resolver un error incluso si por lo general no leen la documentación; incluya contenido que ayude al usuario a resolver inconvenientes.'
];

export const ALERT_BAD_PRACTICES = [
  '<strong>Excederse en la cantidad de alertas.</strong> Este tipo de alertas influyen en la navegación del usuario, demasiadas notificaciones lo podrían abrumar o molestar.'
];

export const ALERT_EXAMPLE_TEXT = `
  <div oAlert>
    <p>Un texto simple para una alerta simple, incluso <a [routerLink]="['/']">con hipervínculos</a></p>
  </div>
`;

export const ALERT_EXAMPLE_HIGHLIGHT = `
  <div oAlert>
    <p>
      <strong>Este es un destacado de una alerta (opcional).</strong>
      Un texto simple para una alerta simple, incluso <a [routerLink]="['/']">con hipervínculos</a>
    </p>
  </div>
`;

export const ALERT_EXAMPLE_COLORS = `
  <div oAlert color="primary">
    <p>Un texto simple para una alerta simple</p>
  </div>

  <div oAlert color="success">
    <p>Un texto simple para una alerta simple</p>
  </div>

  <div oAlert color="info">
    <p>Un texto simple para una alerta simple</p>
  </div>

  <div oAlert>
    <p>Un texto simple para una alerta simple</p>
  </div>
`;

export const ALERT_EXAMPLE_LISTS = `
  <div oAlert>
    <strong>Este es un destacado de una alerta (opcional).</strong>
    <ol class="list-links">
      <li><a href="#">Ancla al error 1</a></li>
      <li><a href="#">Ancla al error 2</a></li>
      <li><a href="#">Ancla al error 3</a></li>
    </ol>
  </div>

  <div oAlert>
    <strong>Este es un destacado de una alerta (opcional).</strong>
    <ol>
      <li>Ancla al error 1</li>
      <li>Ancla al error 2</li>
      <li>Ancla al error 3</li>
    </ol>
  </div>
`;
