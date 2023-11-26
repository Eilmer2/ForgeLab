const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');


const flowSecundario = addKeyword(['ok','eso es todo gracias', 'chau','hasta luego', 'adios']).addAnswer(['¡Gracias por visitarnos!', '¿Puedo ayudarte en algo más?']);

const flowHerramientas = addKeyword(['herramientas', 'herra'])
    .addAnswer('🔧 Tenemos una amplia selección de herramientas. ¿Buscas algo en particular?')
    .addAnswer('Destornilladores (Precio: S/30)')
    .addAnswer('Martillos (Precio: S/45)')
    .addAnswer('Sierras (Precio: S/60)')
    .addAnswer('Llaves Inglesas (Precio: S/36)')
    .addAnswer('Pinzas (Precio: S/24)')
    .addAnswer('Taladros (Precio: S/90)')
    .addAnswer('Alicates (Precio: S/30)')
    .addAnswer('Cinta métrica (Precio: S/15)')
    .addAnswer('Niveles (Precio: S/54)')
    .addAnswer('Destornilladores de precisión (Precio: S/36)')
    .addAnswer('Brocas (Paquete de 10) (Precio: S/75)')
    .addAnswer('Cautines (Precio: S/66)')
    .addAnswer('Lijadoras (Precio: S/84)')
    .addAnswer('Gafas de seguridad (Precio: S/21)')
    .addAnswer('Guantes de trabajo (Precio: S/18)')
    .addAnswer('Escaleras (Precio: S/120)')
    .addAnswer('Llaves de tubo (Precio: S/42)')
    .addAnswer('Cepillos para pintura (Juego de 3) (Precio: S/45)')
    .addAnswer('Sierras de calar (Precio: S/75)')
    .addAnswer('Cinceles (Paquete de 5) (Precio: S/54)')
    // Agrega más herramientas aquí con sus respectivos precios en soles
    .addAnswer(null, null, null, [flowSecundario]);


const flowMateriales = addKeyword(['materiales', 'mate'])
    .addAnswer('🏗️ Contamos con diversos materiales de construcción. ¿Necesitas algo en específico?')
    .addAnswer('Cemento (Precio: S/40 por bolsa)')
    .addAnswer('Ladrillos (Precio: S/0.50 por unidad)')
    .addAnswer('Madera (Precio: S/60 por metro cúbico)')
    .addAnswer('Varillas de construcción (Precio: S/4 por unidad)')
    .addAnswer('Arena (Precio: S/30 por metro cúbico)')
    .addAnswer('Grava (Precio: S/25 por metro cúbico)')
    .addAnswer('Hormigón premezclado (Precio: S/120 por metro cúbico)')
    .addAnswer('Tejas de cerámica (Precio: S/8 por unidad)')
    .addAnswer('Tableros de yeso (Precio: S/15 por placa)')
    .addAnswer('Hierro corrugado (Precio: S/5 por metro)')
    .addAnswer('Adhesivo para cerámica (Precio: S/18 por kilogramo)')
    .addAnswer('Aislante térmico (Precio: S/12 por metro cuadrado)')
    .addAnswer('Pintura impermeabilizante (Precio: S/25 por galón)')
    .addAnswer('Piedra para construcción (Precio: S/60 por metro cúbico)')
    .addAnswer('Tuberías de PVC (Precio: S/8 por metro)')
    .addAnswer('Cerámica para pisos (Precio: S/35 por metro cuadrado)')
    .addAnswer('Granos de construcción (Precio: S/2 por kilogramo)')
    .addAnswer('Cal (Precio: S/10 por saco)')
    .addAnswer('Chapas metálicas (Precio: S/20 por unidad)')
    .addAnswer('Mortero para construcción (Precio: S/15 por bolsa)')
    // Agrega más materiales aquí con sus respectivos precios en soles
    .addAnswer(null, null, null, [flowSecundario]
);

  
const flowPinturas = addKeyword(['pinturas', 'pintu'])
    .addAnswer('🎨 Descubre nuestra gama de pinturas. ¿Qué color estás buscando?')
    .addAnswer('Pintura para interiores (Precio: S/25 por galón)')
    .addAnswer('Pintura para exteriores (Precio: S/30 por galón)')
    .addAnswer('Esmaltes (Precio: S/15 por galón)')
    .addAnswer('Barnices (Precio: S/18 por galón)')
    .addAnswer('Pintura en aerosol (Precio: S/12 por lata)')
    .addAnswer('Pintura para pizarras (Precio: S/20 por litro)')
    .addAnswer('Imprimadores (Precio: S/10 por litro)')
    .addAnswer('Pigmentos para mezclar pintura (Precio: S/5 por unidad)')
    .addAnswer('Removedor de pintura (Precio: S/8 por litro)')
    .addAnswer('Selladores para pintura (Precio: S/15 por galón)')
    .addAnswer('Pintura para azulejos (Precio: S/22 por litro)')
    .addAnswer('Estucos decorativos (Precio: S/28 por galón)')
    .addAnswer('Pinceles para pintura (Precio: S/6 por unidad)')
    .addAnswer('Rodillos para pintura (Precio: S/10 por unidad)')
    .addAnswer('Cinta de pintor (Precio: S/3 por rollo)')
    .addAnswer('Paletas para mezclar pintura (Precio: S/4 por unidad)')
    .addAnswer('Bandejas para pintura (Precio: S/8 por unidad)')
    .addAnswer('Láminas de plástico para protección (Precio: S/5 por metro)')
    .addAnswer('Lijas para preparar superficies (Precio: S/2 por unidad)')
    .addAnswer('Mascarillas de pintor (Precio: S/2 por unidad)')
    .addAnswer(null, null, null, [flowSecundario]
);
  
const flowOtros = addKeyword(['otros', 'otro'])
    .addAnswer('🔩 Además de herramientas y materiales, tenemos otros productos. ¿Alguno te interesa?')
    .addAnswer('Iluminación LED (Precio: S/50 por unidad)')
    .addAnswer('Bombillas (Precio: S/5 por unidad)')
    .addAnswer('Cable eléctrico (Precio: S/2 por metro)')
    .addAnswer('Enchufes (Precio: S/8 por unidad)')
    .addAnswer('Interruptores de luz (Precio: S/10 por unidad)')
    .addAnswer('Tomas de corriente (Precio: S/12 por unidad)')
    .addAnswer('Tubos de PVC para fontanería (Precio: S/6 por metro)')
    .addAnswer('Llaves de paso (Precio: S/15 por unidad)')
    .addAnswer('Grifos (Precio: S/20 por unidad)')
    .addAnswer('Tuberías de cobre (Precio: S/8 por metro)')
    .addAnswer('Teflón para fontanería (Precio: S/3 por rollo)')
    .addAnswer('Cajas de conexiones eléctricas (Precio: S/10 por unidad)')
    .addAnswer('Interruptores de seguridad (Precio: S/18 por unidad)')
    .addAnswer('Focos LED (Precio: S/12 por unidad)')
    .addAnswer('Cajas de herramientas (Precio: S/40 por unidad)')
    .addAnswer('Candados (Precio: S/15 por unidad)')
    .addAnswer('Cuerdas y cadenas (Precio: S/5 por metro)')
    .addAnswer('Baterías (Precio: S/8 por unidad)')
    .addAnswer('Cargadores USB (Precio: S/15 por unidad)')
    .addAnswer('Timbres para puerta (Precio: S/25 por unidad)')
    .addAnswer(null, null, null, [flowSecundario]
); 

const flowTipoProducto = addKeyword(['buscar producto', 'producto'])
    .addAnswer('🔍 ¿Qué tipo de producto estás buscando?')
    .addAnswer(
      ['Herramientas', 'Materiales de construcción', 'Pinturas', 'Otros'],
      null,
      null,
      [
        flowHerramientas,
        flowMateriales,
        flowPinturas,
        flowOtros
      ]
);


const flowAyuda = addKeyword(['ayuda', 'ayu'])
  .addAnswer('🤔 ¿Necesitas ayuda o información adicional?')
  .addAnswer(
    [
      'Horario de atención',
      'Ubicación de la tienda',
      'Contacto'
    ],
    null,
    null,
    [
      addKeyword(['horario de atención', 'horario','hor']).addAnswer('⌚ Nuestro horario de atención es de 8 am a 10 pm todos los días.'),
      
      addKeyword(['ubicación de la tienda', 'ubicación','ubi']).addAnswer('📍 Nos encontramos en Av. Cajamarca Sur, Nueva Cajamarca 22846.'),
      
      addKeyword(['contacto','con']).addAnswer('✉️ Correo electrónico: 2019200521@ucss.pe\n📞 Número de contacto: +51957447114')
    ]
);


const flowRealizarPedido = addKeyword(['realizar pedido', 'pedido']).addAnswer('📝 ¿Qué productos te gustaría agregar al pedido? Puedes mencionar los nombres y las cantidades, escribe "eso es todo" para finalizar.')
    
    
const flowFinPedido = addKeyword(['es todo','eso es todo', 'nada mas']).addAnswer('✅ Pedido recibido').addAnswer(null, null, null, [flowRealizarPedido]);
 
const flowPrincipal = addKeyword(['hola', 'bienvenido', 'ferretería'])
  .addAnswer('🛠️ ¡Bienvenido a Ferretería ForgeLab! ¿En qué puedo ayudarte hoy?¿Buscas algun producto? 🛠️')
  .addAnswer(
	[ 'Buscar producto', 'Realizar pedido', 'Ayuda'], 
	null, 
	null, 
	[flowTipoProducto, flowRealizarPedido, flowAyuda]
);

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowFinPedido, flowRealizarPedido, flowSecundario, flowTipoProducto, flowAyuda, flowOtros, flowPinturas, flowMateriales, flowHerramientas]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};
main();
