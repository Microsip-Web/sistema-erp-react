// Define a union type for categories to ensure type safety
const categories = ['Administra', 'Analiza', 'Opera', 'Vende', 'Sincroniza'] as const;
type Category = typeof categories[number];

// Define the Module type
type Module = {
  id: number;
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
    name: 'Bancos',
    brief: '<b>Controla</b> el flujo de tus cuentas de cheques, cajas e inversiones',
    category: 'Administra',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3d6b63dc4ce39fe6a5_Bancos.png',
    benefits: [
      'Visualiza el historial de tus cuentas bancarias con todos sus movimientos.',
      'Intégralo con el módulo de <a href="/contabilidad" class="text-blue-500 hover:underline">Contabilidad Electrónica</a> y genera automáticamente las pólizas de tus depósitos y retiros.',
      'Consulta y libera los pagos creados por los módulos de <a href="/nomina" class="text-blue-500 hover:underline">Nómina</a> y <a href="/cuentas-por-pagar" class="text-blue-500 hover:underline">Cuentas por Pagar</a>.'
    ],
    pdfLink: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66881510ecf479711e420755_ficha_tecnica_Bancos.pdf',
  },
  {
    id: 2,
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
    name: 'CEO Móvil',
    brief: 'Toma <b>decisiones</b> desde tu dispositivo móvil',
    category: 'Analiza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3fed8fad35ddc70c95_Ceo%20Movil.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module4.pdf',
  },
  {
    id: 5,
    name: 'Cuentas por Pagar',
    brief: 'Programa <b>oportunamente</b> los pagos a tus proveedores, aprovecha descuentos y elimina cargos ocasionados por atrasos',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3dbcdf5f33d31b1694_CPP.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module5.pdf',
  },
  {
    id: 6,
    name: 'Compras',
    brief: 'Organiza tus compras, selecciona adecuadamente a tus proveedores e <b>incrementa tu rentabilidad</b>',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3d26dea33c918f1ae9_Compras.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module6.pdf',
  },
  {
    id: 7,
    name: 'Inventarios',
    brief: '<b>Optimiza</b> tus inventarios y controla el flujo de mercancía',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3f8034bdabc471b5fb_Inventarios.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module7.pdf',
  },
  {
    id: 8,
    name: 'Cuentas por Cobrar',
    brief: 'Fortalece tu empresa controlando la cartera y la cobranza',
    category: 'Opera',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3f9683641b33b65bff_CPC.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module8.pdf',
  },
  {
    id: 9,
    name: 'Sync-E',
    brief: '<b>Conecta</b> tu empresa con el comercio electrónico',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3ed7478c2a32652afe_Sync-e.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module9.pdf',
  },
  {
    id: 10,
    name: 'Ventas',
    brief: 'Alcanza todas tus <b>metas</b> con un proceso de ventas organizado',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3daa3851122ca3f51c_Ventas.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module10.pdf',
  },
  {
    id: 11,
    name: 'Punto de Venta',
    brief: 'El poder de tu empresa se consolida en la caja de cobro',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc403ea3ffa471a1f91f_PDV.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module11.pdf',
  },
  {
    id: 12,
    name: 'En Ruta',
    brief: 'Vende y cobra eliminando las distancias',
    category: 'Vende',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3c82f8006048d53f06_Ruta.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module12.pdf',
  },
  {
    id: 13,
    name: 'SICS',
    brief: 'Sucursales <b>ordenadas</b> con catálogos homologados',
    category: 'Sincroniza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3c3b9badabf4f745ee_SICS.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module13.pdf',
  },
  {
    id: 14,
    name: 'Administración de Sucursales',
    brief: 'Organiza tu empresa con un <b>manejo</b> adecuado de sucursales.',
    category: 'Sincroniza',
    image: 'https://cdn.prod.website-files.com/627983ccef617d453b9485ad/671bdc3ef0f36272a072746e_ADS.png',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    pdfLink: 'path/to/module14.pdf',
  },
];
