// Define a union type for categories to ensure type safety
const categories = ['Administra', 'Analiza', 'Opera', 'Vende', 'Sincroniza'] as const;
type Category = typeof categories[number];

// Define the Module type
type Module = {
  id: number;
  url: string;
  name: string;
  brief: string;
  category: Category;  // This will only allow valid categories
  image: string;
  benefits: string[];
  pdfLink: string;
};

export const modules: Module[] = [
  {
    id: 1,
    url: '/bancos',
    name: 'Bancos',
    brief: '<b>Controla</b> el flujo de tus cuentas de cheques, cajas e inversiones',
    category: 'Administra',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3d6b63dc4ce39fe6a5_Bancos.png',
    benefits: [
      'Visualiza el historial de tus cuentas bancarias con todos sus movimientos.',
      'Intégralo con el módulo de Contabilidad Electrónica y genera automáticamente las pólizas de tus depósitos y retiros.',
      'Consulta y libera los pagos creados por los módulos de <a href="/testing/sistema-erp/nomina">Nómina</a> y <a href="/testing/sistema-erp/cuentas-por-pagar">Cuentas por Pagar</a>'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66881510ecf479711e420755_ficha_tecnica_Bancos.pdf',
  },
  {
    id: 2,
    url: '/contabilidad-electronica',
    name: 'Contabilidad Electrónica',
    brief: '<b>Simplifica</b> tu contabilidad',
    category: 'Administra',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3db30e414b44c1e59d_Contabilidad.png',
    benefits: [
      'Cumple con las obligaciones fiscales correctamente.',
      'Quítale tiempo a tu contabilidad, refleja cada movimiento de toda tu operación en pólizas contables.',
      'Estructura tu catálogo de cuentas con absoluta libertad.',
      'Conoce la salud financiera de tu empresa con estados contables personalizables.',
      'Registra un número ilimitado de empresas.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66881513019ee96ab53917db_ficha_tecnica_Contabilidad_Electronica.pdf',
  },
  {
    id: 3,
    url: '/nomina',
    name: 'Nómina',
    brief: 'Genera la nómina <b>fácilmente</b>, sin errores y cumpliendo con tus obligaciones fiscales',
    category: 'Administra',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc40052fc708e26dc8b8_Nomina.png',
    benefits: [
      'Timbra y cancela recibos de nómina versión 4.0.',
      'Calcula con precisión todas tus obligaciones fiscales de nómina.',
      'Personaliza el proceso de nómina en base a frecuencias de pagos, tipo de salario, contratos y más.',
      'Permite a tus empleados consultar sus recibos de nómina y solicitar vacaciones desde una aplicación móvil.',
      'Aplica automáticamente las incidencias en registros de entradas y salidas en los recibos de nómina generados.',
      'Valida los datos fiscales de tus empleados en el SAT.',
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/669733da470a4544cbd5667e_ficha_tecnica_Nomina_VF.pdf',
  },
  {
    id: 4,
    url: '/ceo-movil',
    name: 'CEO Móvil',
    brief: 'Toma <b>decisiones</b> desde tu dispositivo móvil',
    category: 'Analiza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3fed8fad35ddc70c95_Ceo%20Movil.png',
    benefits: [
      'Consulta reportes, datos y resultados de toda tu empresa en cualquier lugar.',
      'Analiza las ventas de cualquier periodo y en cualquier momento.',
      'Monitorea tu cartera, revisa lo vencido y lo que está por vencer.',
      'Conoce el valor de tu inventario y sus existencias.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/6688150f6f5292cdfe12d485_ficha_tecnica_CEO_Movil.pdf',
  },
  {
    id: 5,
    url: '/cuentas-por-pagar',
    name: 'Cuentas por Pagar',
    brief: 'Programa <b>oportunamente</b> los pagos a tus proveedores, aprovecha descuentos y elimina cargos ocasionados por atrasos',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3dbcdf5f33d31b1694_CPP.png',
    benefits: [
      'Domina las fechas de cada pago, sus montos y gestiona las condiciones específicas de tus proveedores.',
      'Válida ante el SAT los datos fiscales de tus proveedores y sus CFDIs emitidos, almacénalos y genera comprobantes de recepción de pago.',
      'Registra cualquier concepto de cargo o crédito particular de tu empresa, además de los tradicionales.',
      'Integra los pagos a proveedores directamente al módulo de <a href="/testing/sistema-erp/bancos">Bancos</a>.',
      'Emite constancias de retenciones en la versión 2.0 de forma sencilla.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/668815121a051ce08e2c5df9_ficha_tecnica_Cuentas_por_Pagar.pdf',
  },
  {
    id: 6,
    url: '/compras',
    name: 'Compras',
    brief: 'Organiza tus compras, selecciona adecuadamente a tus proveedores e <b>incrementa tu rentabilidad</b>',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3d26dea33c918f1ae9_Compras.png',
    benefits: [
      'Automatiza el proceso de las compras; recepciones de mercancía, devoluciones y ordenes de compra.',
      'Amplía el margen de utilidad creando planes de compras inteligentes con sugerencias basadas en tus criterios.',
      'Organiza tu catálogo de proveedores, especifica sus políticas y valida sus datos fiscales y CFDIs recibidos ante el SAT.',
      'Adicional a los impuestos y retenciones más comunes, registra cualquier gravamen no contemplado.',
      'Integra el <a href="/testing/sistema-erp/administrador-de-sucursales">Administrador de Sucursales</a> y gestiona tus compras por sucursal.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/6688151067e38d85fe0fb7a2_ficha_tecnica_Compras.pdf',
  },
  {
    id: 7,
    url: '/inventarios',
    name: 'Inventarios',
    brief: '<b>Optimiza</b> tus inventarios y controla el flujo de mercancía',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3f8034bdabc471b5fb_Inventarios.png',
    benefits: [
      'Evita mermas y robos monitoreando el historial de entradas, salidas y movimientos de la mercancía entre almacenes.',
      'Maneja cualquier mercancía; define las unidades de medidas, clasifícala, agrúpala y regístrala según el tipo de artículo.',
      'Actualiza automáticamente las entradas por compras y salidas por ventas, integrando los módulos de <a href="/testing/sistema-erp/compras">Compras</a>, <a href="/testing/sistema-erp/punto-de-venta">Punto de Venta</a> y <a href="/testing/sistema-erp/ventas">Ventas</a>.',
      'Optimiza los niveles de inventario calculándolos automáticamente.',
      'Integra el <a href="/testing/sistema-erp/administrador-de-sucursales">Administrador de Sucursales</a>, mueve mercancía entre almacenes y sucursales, y rastrea cada movimiento registrado por el personal involucrado.',
      '¡Cumple al 100% con SAT! Emite el CFDI de traslado en la versión 4.0.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66881513d0263e7571cb4b45_ficha_tecnica_Inventarios.pdf',
  },
  {
    id: 8,
    url: '/cuentas-por-cobrar',
    name: 'Cuentas por Cobrar',
    brief: 'Fortalece tu empresa controlando la cartera y la cobranza',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3f9683641b33b65bff_CPC.png',
    benefits: [
      'Domina tu cartera vencida teniendo siempre presente qué, cuánto, cuándo y a quién cobrarle.',
      'Define diferentes políticas de crédito a cada uno de tus clientes.',
      'Analiza la antigüedad de saldos, montos vencidos y por vencer.',
      'Genera y aplica anticipos fiscales con CFDIs relacionados de manera automática.',
      'Cumple con el complemento de recepción de pagos 2.0, realiza cobros en parcialidades, diferidos o una sola exhibición, cómo lo establece el SAT.',
      '¡Cumple al 100% con SAT! Emite CFDI 4.0 de ingreso, egreso y pago.',
      'Valida ante el SAT los datos fiscales de tus clientes de forma rápida y confiable.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/6688151020277f8496ebe826_ficha_tecnica_Cuentas_por_Cobrar.pdf',
  },
  {
    id: 9,
    url: '/sync-e',
    name: 'Sync-E',
    brief: '<b>Conecta</b> tu empresa con el comercio electrónico',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3ed7478c2a32652afe_Sync-e.png',
    benefits: [
      'Integra tu solución Microsip con los líderes del comercio electrónico; Shopify y Mercado Libre.',
      'Gestiona en un solo sistema administrativo la operación tu de empresa y tienda electrónica.',
      'Descuenta automáticamente en tu módulo de <a href="/testing/sistema-erp/inventarios">Inventarios</a> todos los artículos vendidos en tu tienda electrónica.',
      'Sincroniza tus artículos, con sus precios y existencias en tu tienda electrónica.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/668815152ab99fa5fb35edaf_ficha_tecnica_Sync-e.pdf',
  },
  {
    id: 10,
    url: '/ventas',
    name: 'Ventas',
    brief: 'Alcanza todas tus <b>metas</b> con un proceso de ventas organizado',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3daa3851122ca3f51c_Ventas.png',
    benefits: [
      'Emite facturas y devoluciones de ventas en CFDI 4.0. Especifica los diferentes tipos de uso.',
      'Registra todo el ciclo de ventas, desde la cotización hasta la entrega.',
      'Conoce los artículos más vendidos y los márgenes de utilidad de cada uno.',
      'Obtén automáticamente las comisiones de tus vendedores y definiendo sus porcentajes, montos y criterios.',
      'Aplica anticipos fiscales al integrarlo con el módulo de <a href="/testing/sistema-erp/cuentas-por-cobrar">Cuentas por Cobrar</a>',
      'Valida ante el SAT los datos fiscales de tus clientes de forma rápida y confiable.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/668815156f5292cdfe12d59e_ficha_tecnica_Ventas.pdf',
  },
  {
    id: 11,
    url: '/punto-de-venta',
    name: 'Punto de Venta',
    brief: 'El poder de tu empresa se consolida en la caja de cobro',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc403ea3ffa471a1f91f_PDV.png',
    benefits: [
      'Elimina largas filas y el mal servicio con un sistema de cobro ágil y rápido.',
      'Despreocúpate de la rotación de personal, uso sencillo y adaptable desde el primer día.',
      'Crea un sinfín de promociones y descuentos aplicados automática al registrar cada venta.',
      'Monitorea los cortes de caja por día, por caja de cobro o por cajero.',
      'Visualiza detalladamente tu flujo de ingreso, registra cobros en cualquier divisa y forma de pago.',
      'Valida ante el SAT los datos fiscales de tus clientes de forma rápida y confiable.',
      '¡Cumple al 100% con SAT! Emite facturas y devoluciones de venta en CFDI 4.0 y CFDI de pago con complemento de recepción de pagos versión 2.0.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/668815148c6c7580c8e1f0db_ficha_tecnica_Punto_de_Venta.pdf',
  },
  {
    id: 12,
    url: '/en-ruta',
    name: 'En Ruta',
    brief: 'Vende y cobra eliminando las distancias',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3c82f8006048d53f06_Ruta.png',
    benefits: [
      'Abre nuevos canales de venta con vendedores en ruta que visiten a los clientes.',
      'Registra pedidos de venta desde cualquier dispositivo móvil.',
      'Consulta cartera y registra la cobranza en cualquier lugar.',
      'Conoce el desempeño de cada uno de tus vendedores en ruta.'
    ],
    pdfLink: 'hhttps://cdn.prod.website-files.com/627983ccef617d453b9485ad/6688151378d4e0d0ff08c18f_ficha_tecnica_En_Ruta.pdf',
  },
  {
    id: 13,
    url: '/sics',
    name: 'SICS',
    brief: 'Sucursales <b>ordenadas</b> con catálogos homologados',
    category: 'Sincroniza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3c3b9badabf4f745ee_SICS.png',
    benefits: [
      'Mantén actualizados los precios, claves y descripciones de todos los artículos en tus sucursales.',
      'Administra múltiples listas de precios, para una sucursal o para un grupo de sucursales.',
      'Consulta en tiempo real la existencia de cualquier artículo en las demás sucursales.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66881515f021dbfec9e3ad56_ficha_tecnica_SICS.pdf',
  },
  {
    id: 14,
    url: '/administrador-de-sucursales',
    name: 'Administrador de Sucursales',
    brief: 'Organiza tu empresa con un <b>manejo</b> adecuado de sucursales.',
    category: 'Sincroniza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3ef0f36272a072746e_ADS.png',
    benefits: [
      'Visualiza la información por sucursal y/o por zonas personalizadas.',
      'Consulta en tiempo real las existencias, ventas y movimientos de mercancía de cada sucursal.',
      'Mueve mercancía entre almacenes y sucursales, rastreando cada movimiento del personal involucrado.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/6688150f78d4e0d0ff08c0c9_ficha_tecnica_AS.pdf',
  },
];
