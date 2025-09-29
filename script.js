document.addEventListener('DOMContentLoaded', () => {

    // --- Dados do Catálogo ---
    // Em uma aplicação real, isso viria de um banco de dados/API
    const catalogData = [
        {
            id: 'grampo', name: 'Grampo', category: 'Papelaria',
            variations: [
                { title: 'GRAMPO 26/6 ACC C/ 5000 COBREADO', brand: 'ACC', size: '26/6', price: 12.50 },
                { title: 'GRAMPO 26/6 TN C/ 5000 GALVANIZADO', brand: 'TN', size: '26/6', price: 11.90 },
                { title: 'GRAMPO 26/6 JOCAR/ MAXPRINT C/ 5000', brand: 'Jocar/Maxprint', size: '26/6', price: 11.50 },
                { title: 'GRAMPO 26/6 ACC C/ 5000 GALVANIZADO', brand: 'ACC', size: '26/6', price: 11.90 },
                { title: 'GRAMPO 26/6 EAGLE C/ 5000', brand: 'Eagle', size: '26/6', price: 13.00 },
                { title: 'GRAMPO 26/6 BACCHI C/ 1000 COBREADO', brand: 'Bacchi', size: '26/6', price: 4.50 },
                { title: 'GRAMPO 26/6 FRAMA C/ 5000 COBREADO', brand: 'Frama', size: '26/6', price: 12.80 },
                { title: 'GRAMPO 26/6 BACCHI C/ 5000', brand: 'Bacchi', size: '26/6', price: 12.00 },
                { title: 'GRAMPO 26/6 GOLDEN KRAFT C/ 5000', brand: 'Golden Kraft', size: '26/6', price: 11.00 },
                { title: 'GRAMPO 106/6-8 INDUSTRIAL G-1006', brand: 'Industrial', size: '106/6-8', price: 25.00 },
                { title: 'GRAMPO TOT BACCHI C/ 1000', brand: 'Bacchi', size: 'TOT', price: 5.00 },
                { title: 'GRAMPO EM "U" DELLO C/ 50 UN.', brand: 'Dello', size: 'U', price: 7.50 },
            ]
        },
        {
            id: 'clips', name: 'Clips', category: 'Papelaria',
            variations: [
                { title: 'CLIPS 2/0 COM 720 UN.', brand: 'Genérico', size: '2/0', price: 15.00 },
                { title: 'CLIPS 8/0 COM 170 UN.', brand: 'Genérico', size: '8/0', price: 18.00 },
                { title: 'CLIPS 3/0 COM 445 UN.', brand: 'Genérico', size: '3/0', price: 16.50 },
                { title: 'CLIPS 6/0 COM 215 UN.', brand: 'Genérico', size: '6/0', price: 17.00 },
                { title: 'CLIPS 4/0 COM 420 UN.', brand: 'Genérico', size: '4/0', price: 16.00 },
                { title: 'CLIPS 8/0 BACCHI C/ 25 UN.', brand: 'Bacchi', size: '8/0', price: 4.50 },
                { title: 'CLIPS 2/0 COLORIDO BACCHI C/ 100 UN.', brand: 'Bacchi', size: '2/0', price: 6.00 },
                { title: 'CLIPS DOURADO/PRATA 5 BACCHI C/ 200 UN.', brand: 'Bacchi', size: 'N/A', price: 8.50 },
                { title: 'CLIPS PRATA BACCHI C/ 100 UN.', brand: 'Bacchi', size: 'N/A', price: 5.50 },
                { title: 'CLIPS BACCHI 2/0 C/ 100 UN.', brand: 'Bacchi', size: '2/0', price: 5.00 },
                 { title: 'CLIP ADESIVO MULTIUSO', brand: 'Genérico', size: 'N/A', price: 9.90 },
            ]
        },
        {
            id: 'grampeador', name: 'Grampeador', category: 'Escritório',
            variations: [
                { title: 'GRAMPEADOR BAZZE', brand: 'Bazze', size: 'N/A', price: 22.00 },
                { title: 'GRAMPEADOR MAXPRINT METALICO MXG20C', brand: 'Maxprint', size: 'Médio', price: 28.50 },
                { title: 'GRAMPEADOR FRAMA ALICATE', brand: 'Frama', size: 'Alicate', price: 35.00 },
                { title: 'GRAMPEADOR CIS C-10', brand: 'CIS', size: 'Pequeno', price: 15.00 },
                { title: 'GRAMPEADOR MAXPRINT PLÁSTICO MX-G20A', brand: 'Maxprint', size: 'Médio', price: 19.90 },
                { title: 'GRAMPEADOR VIVASOL KR3160L-50', brand: 'Vivasol', size: 'N/A', price: 24.00 },
                { title: 'GRAMPEADOR TN 510', brand: 'TN', size: 'N/A', price: 21.00 },
                { title: 'GRAMPEADOR CIS C-17', brand: 'CIS', size: 'Médio', price: 26.00 },
                { title: 'GRAMPEADOR BRW 13,5 CM', brand: 'BRW', size: '13,5 cm', price: 23.00 },
                { title: 'GRAMPEADOR JOCAR METAL 13 CM', brand: 'Jocar', size: '13 cm', price: 25.50 },
                { title: 'GRAMPEADOR TN 545', brand: 'TN', size: 'N/A', price: 29.00 },
                { title: 'GRAMPEADOR CIS EM-7', brand: 'CIS', size: 'N/A', price: 31.00 },
                { title: 'GRAMPEADOR EAGLE 208P', brand: 'Eagle', size: 'N/A', price: 27.00 },
                { title: 'GRAMPEADOR JOCAR METAL 20 CM', brand: 'Jocar', size: '20 cm', price: 45.00 },
                { title: 'GRAMPEADOR 106/6-8 INDUSTRIAL G-1006', brand: 'G-1006', size: 'Industrial', price: 150.00 },
            ]
        },
        {
            id: 'perfurador', name: 'Perfurador de Papel', category: 'Escritório',
            variations: [
                { title: 'PERFURADOR DE PAPEIS ADECK FR 201', brand: 'Adeck', size: 'N/A', price: 18.00 },
                { title: 'PERFURADOR DE PAPEIS JOCAR 20 FOLHAS', brand: 'Jocar', size: '20 Folhas', price: 25.00 },
                { title: 'PERFURADOR DE PAPEIS CAVIA P/ 30 FLS CA105', brand: 'Cavia', size: '30 Folhas', price: 35.00 },
                { title: 'PERFURADOR DE PAPEIS MAPED 401213', brand: 'Maped', size: 'N/A', price: 28.00 },
                { title: 'PERFURADOR DE PAPEIS CIS 101', brand: 'CIS', size: 'N/A', price: 22.00 },
            ]
        },
         {
            id: 'suporte_fita', name: 'Suporte para Fita Adesiva', category: 'Escritório',
            variations: [
                { title: 'SUPORTE PARA FITA ADESIVA GRANDE CAVIA', brand: 'Cavia', size: 'Grande', price: 30.00 },
                { title: 'SUPORTE PARA FITA ADESIVA PEQUENO CAVIA', brand: 'Cavia', size: 'Pequeno', price: 18.00 },
                { title: 'SUPORTE PARA FITA ADESIVA JOCAR', brand: 'Jocar', size: 'N/A', price: 25.00 },
            ]
        },
         {
            id: 'estilete', name: 'Estilete e Lâminas', category: 'Utilidades',
            variations: [
                 { title: 'LAMINAS PARA ESTILETE CIS LA-L10', brand: 'CIS', size: 'Larga', price: 8.00 },
                 { title: 'ESTILETE CIS LARGO 168BC', brand: 'CIS', size: 'Largo', price: 12.00 },
                 { title: 'ESTILETE TN LARGO 572', brand: 'TN', size: 'Largo', price: 10.50 },
                 { title: 'LAMINAS PARA ESTILETE CIS LA-E10', brand: 'CIS', size: 'Estreita', price: 6.50 },
                 { title: 'ESTILETE FERTAK LARGO', brand: 'Fertak', size: 'Largo', price: 11.00 },
            ]
        },
         {
            id: 'fichario', name: 'Fichário e Índices', category: 'Organização',
            variations: [
                { title: 'FICHÁRIO P/ FICHAS PADRON. MAXCRIL 4" X 6"', brand: 'Maxcril', size: '4x6', price: 22.00 },
                { title: 'FICHÁRIO P/ FICHAS PADRON. ACRIMET 3" X 5"', brand: 'Acrimet', size: '3x5', price: 19.00 },
                { title: 'FICHÁRIO P/ FICHAS PADRON. ACRIMET 4" X 6"', brand: 'Acrimet', size: '4x6', price: 23.00 },
                { title: 'FICHÁRIO P/ FICHAS PADRON. WALEU 6" X 9"', brand: 'Waleu', size: '6x9', price: 28.00 },
                { title: 'ÍNDICE P/ FICHARIO 3 X 5 ACRIMET', brand: 'Acrimet', size: '3x5', price: 7.00 },
                { title: 'ÍNDICE P/ FICHARIO 4 X 6 ACRIMET', brand: 'Acrimet', size: '4x6', price: 8.00 },
                { title: 'ÍNDICE P/ FICHARIO 5 X 8 ACRIMET', brand: 'Acrimet', size: '5x8', price: 9.50 },
            ]
        },
        {
            id: 'organizador', name: 'Organizadores de Mesa', category: 'Organização',
            variations: [
                { title: 'PORTA LAPIS DELLO 3030.H', brand: 'Dello', size: 'N/A', price: 12.00 },
                { title: 'PORTA LAPIS ARAMADO TN 505/506', brand: 'TN', size: 'N/A', price: 15.00 },
                { title: 'ORGANIZADOR DE GAVETA DELLO', brand: 'Dello', size: 'N/A', price: 25.00 },
                { title: 'PORTA CARIMBO ACRÍLICO ACRIMET', brand: 'Acrimet', size: 'N/A', price: 18.00 },
                { title: 'PORTA LAPIS DELLO 3031.H', brand: 'Dello', size: 'N/A', price: 13.00 },
                { title: 'PORTA LAPIS DELLO 3022', brand: 'Dello', size: 'N/A', price: 11.00 },
                { title: 'PORTA CARIMBOS MAPED METAL CROMADO', brand: 'Maped', size: 'N/A', price: 30.00 },
                { title: 'PORTA LAPIS WALEU TRIO PLUS', brand: 'Waleu', size: 'Trio', price: 17.00 },
                { title: 'PORTA OBJETOS ARAMADO TN 507', brand: 'TN', size: 'N/A', price: 16.00 },
                { title: 'EXPOSITOR VERTICAL 3054-H DELLO', brand: 'Dello', size: 'N/A', price: 28.00 },
            ]
        },
        {
            id: 'etiqueta', name: 'Etiquetas', category: 'Informática',
            variations: [
                { title: 'ETIQUETA INK JET/LASER P/ CD C/ 25 FLS PIMACO', brand: 'Pimaco', size: 'CD', price: 15.00 },
                { title: 'ETIQUETA INK JET/LASER C/ 10 FLS PIMACO 6080', brand: 'Pimaco', size: '6080', price: 9.00 },
                { title: 'ETIQUETA MULTIUSO A5 Q 50100 PIMACO C/36 UN.', brand: 'Pimaco', size: 'A5', price: 5.00 },
                { title: 'ETIQUETA MULTIUSO A5 Q 3465 PIMACO C/120 UN.', brand: 'Pimaco', size: 'A5', price: 6.50 },
                { title: 'ETIQUETA MULTIUSO A5 Q 2232 PIMACO C/360 UN.', brand: 'Pimaco', size: 'A5', price: 8.00 },
                { title: 'ETIQUETA INK JET/LASER A4 267 C/ 25 FLS PIMACO', brand: 'Pimaco', size: 'A4 267', price: 22.00 },
                { title: 'ETIQUETA INK JET/LASER A4 361 C/ 100 FLS PIMACO', brand: 'Pimaco', size: 'A4 361', price: 75.00 },
                { title: 'ETIQUETA INK JET/LASER C/ 100 FLS PIMACO 6183', brand: 'Pimaco', size: '6183', price: 70.00 },
                { title: 'ETIQUETA INK JET/LASER A4 368 C/ 100 FLS PIMACO', brand: 'Pimaco', size: 'A4 368', price: 78.00 },
                { title: 'ETIQUETA INK JET/LASER CC182 COLACRIL', brand: 'Colacril', size: 'CC182', price: 65.00 },
                { title: 'ETIQUETA INK JET/LASER C/ 100 FLS PIMACO 6181', brand: 'Pimaco', size: '6181', price: 72.00 },
                { title: 'ETIQUETA INK JET/LASER A4 356 100 FLS PIMACO', brand: 'Pimaco', size: 'A4 356', price: 76.00 },
                { title: 'ETIQUETA INK JET/LASER A4 248 C/ 25 FLS PIMACO', brand: 'Pimaco', size: 'A4 248', price: 24.00 },
                { title: 'ETIQUETA INK JET/LASER A4 349 C/ 100 FLS PIMACO', brand: 'Pimaco', size: 'A4 349', price: 79.00 },
                { title: 'ETIQUETA REDONDA 15MM', brand: 'Genérico', size: '15mm', price: 4.00 },
                { title: 'ETIQUETA REDONDA 19MM', brand: 'Genérico', size: '19mm', price: 4.50 },
            ]
        },
        {
            id: 'binder', name: 'Prendedor Binder', category: 'Papelaria',
             variations: [
                { title: 'PRENDEDOR BINDER 51MM', brand: 'Genérico', size: '51mm', price: 8.00 },
                { title: 'PRENDEDOR BINDER 41MM', brand: 'Genérico', size: '41mm', price: 6.50 },
                { title: 'PRENDEDOR BINDER 32MM', brand: 'Genérico', size: '32mm', price: 5.00 },
                { title: 'PRENDEDOR BINDER 25MM', brand: 'Genérico', size: '25mm', price: 4.00 },
                { title: 'PRENDEDOR BINDER 19MM', brand: 'Genérico', size: '19mm', price: 3.50 },
                { title: 'PRENDEDOR BINDER COLORIDO 25MM', brand: 'Genérico', size: '25mm', price: 5.50 },
             ]
        },
        {
            id: 'prancheta', name: 'Prancheta', category: 'Escritório',
            variations: [
                { title: 'PRANCHETA DE EUCATEX C/ PRENDEDOR DE METAL', brand: 'Genérico', size: 'Ofício', price: 15.00 },
                { title: 'PRANCHETA DE ACRÍLICO MAXCRIL', brand: 'Maxcril', size: 'Ofício', price: 25.00 },
            ]
        },
        {
            id: 'papel', name: 'Papéis Especiais', category: 'Papelaria',
            variations: [
                { title: 'PAP. FOT. 180 GRS A4 C/ 20 FL MASTERPRINT', brand: 'Masterprint', size: 'A4 180g', price: 18.00 },
                { title: 'PAP. FOT. D. FACE 180 GRS A4 C/ 20 FL MASTERPRINT', brand: 'Masterprint', size: 'A4 180g DF', price: 25.00 },
                { title: 'PAP. FOT. 135 GRS A4 C/ 20 FLS MAXPRINT', brand: 'Maxprint', size: 'A4 135g', price: 15.00 },
                { title: 'PAPEL VERGE 180 GRS C/ 50 FLS USAPEL', brand: 'Usapel', size: 'A4 180g', price: 22.00 },
                { title: 'PAPEL FILICOLOR A4 180 GRS C/ 20 FLS FILIPAPER', brand: 'Filipaper', size: 'A4 180g', price: 16.00 },
                { title: 'PAPEL SULFITE A4 120 GRS C/ 50 FLS CHAMEQUINHO', brand: 'Chamequinho', size: 'A4 120g', price: 12.00 },
                { title: 'PAPEL CRIATIVO DOBRAD. 5 CORES C/ 50 FLS VMP', brand: 'VMP', size: 'A4', price: 10.00 },
                { title: 'PAPEL SULFITE A4 120 GRS C/ 50 FLS JANDAIA', brand: 'Jandaia', size: 'A4 120g', price: 11.50 },
                { title: 'PAPEL PÉROLA 180 GRS C/ 15 FLS FILIPAPER', brand: 'Filipaper', size: 'A4 180g', price: 28.00 },
                { title: 'PAPEL VERGE 180 GRS C/ 50 FLS FILIPAPER', brand: 'Filipaper', size: 'A4 180g', price: 23.00 },
                { title: 'PAPEL KRAFT A4 180 GRS C/ 50 FLS', brand: 'Genérico', size: 'A4 180g', price: 20.00 },
            ]
        },
        {
            id: 'corretivo', name: 'Corretivo', category: 'Escolar',
            variations: [
                { title: 'CANETA CORRETIVA CIS', brand: 'CIS', size: 'N/A', price: 8.50 },
                { title: 'CORRETIVO LÍQUIDO RADEX', brand: 'Radex', size: 'N/A', price: 5.00 },
                { title: 'FITA CORRETIVA 12M MERCUR', brand: 'Mercur', size: '12m', price: 12.00 },
                { title: 'CANETA CORRETIVA MAXI', brand: 'Maxi', size: 'N/A', price: 7.00 },
                { title: 'CANETA CORRETIVA JOCAR', brand: 'Jocar', size: 'N/A', price: 7.50 },
                { title: 'FITA CORRETIVA 5,5M CIS', brand: 'CIS', size: '5,5m', price: 9.00 },
                { title: 'CORRETIVO LÍQUIDO BIC', brand: 'BIC', size: 'N/A', price: 6.00 },
                { title: 'CANETA CORRETIVA BIC', brand: 'BIC', size: 'N/A', price: 9.00 },
                { title: 'CORRETIVO LÍQUIDO MERCUR', brand: 'Mercur', size: 'N/A', price: 5.50 },
            ]
        },
         {
            id: 'cola', name: 'Cola', category: 'Escolar',
            variations: [
                { title: 'BASTÃO DE COLA QUENTE GROSSO UN.', brand: 'Genérico', size: 'Grosso UN', price: 1.50 },
                { title: 'BASTÃO DE COLA QUENTE GROSSO KG', brand: 'Genérico', size: 'Grosso KG', price: 45.00 },
                { title: 'COLA EM BASTÃO 10G PRITT', brand: 'Pritt', size: '10g', price: 6.00 },
                { title: 'COLA EM BASTÃO 36G BIC', brand: 'BIC', size: '36g', price: 12.50 },
                { title: 'COLA EM BASTÃO 40G PRITT', brand: 'Pritt', size: '40g', price: 15.00 },
                { title: 'COLA EM BASTÃO 21G BIC', brand: 'BIC', size: '21g', price: 9.00 },
                { title: 'COLA EM BASTÃO 20G PRITT', brand: 'Pritt', size: '20g', price: 8.50 },
                { title: 'COLA EM BASTÃO 8G BIC', brand: 'BIC', size: '8g', price: 5.00 },
                { title: 'COLA EM BASTÃO 20G SCOTCH', brand: 'Scotch', size: '20g', price: 9.50 },
                { title: 'COLA EM BASTÃO 8G SCOTCH', brand: 'Scotch', size: '8g', price: 5.50 },
            ]
        },
        {
            id: 'borracha', name: 'Borracha', category: 'Escolar',
            variations: [
                { title: 'BORRACHA PLÁSTICA MERCUR', brand: 'Mercur', size: 'N/A', price: 2.50 },
                { title: 'BORRACHA BRANCA RECORD 40 MERCUR', brand: 'Mercur', size: '40', price: 2.00 },
                { title: 'BORRACHA PONTEIRA MERCUR', brand: 'Mercur', size: 'Ponteira', price: 3.00 },
                { title: 'BORRACHA PLÁSTICA LEO&LEO', brand: 'Leo&Leo', size: 'N/A', price: 2.00 },
                { title: 'BORRACHA BRANCA RECORD 60 MERCUR', brand: 'Mercur', size: '60', price: 3.00 },
                { title: 'REFIL DE BORRACHA CANETA PENTEL', brand: 'Pentel', size: 'Refil', price: 7.00 },
                { title: 'BORRACHA TK PRETA FABER', brand: 'Faber-Castell', size: 'TK', price: 4.00 },
                { title: 'BORRACHA BICOLOR PRIMA 40 MERCUR', brand: 'Mercur', size: '40 Bicolor', price: 3.50 },
                { title: 'REFIL DE BORRACHA CANETA CIS', brand: 'CIS', size: 'Refil', price: 6.00 },
                { title: 'LAPIS BORRACHA 7000 FABER', brand: 'Faber-Castell', size: 'N/A', price: 5.00 },
                { title: 'BORRACHA BRANCA RECORD 20 MERCUR', brand: 'Mercur', size: '20', price: 1.50 },
                { title: 'BORRACHA VERDE', brand: 'Genérico', size: 'N/A', price: 1.00 },
                { title: 'BORRACHA CANETA MERCUR', brand: 'Mercur', size: 'Caneta', price: 8.00 },
            ]
        },
        {
            id: 'lapis_arte', name: 'Lápis e Arte', category: 'Arte',
             variations: [
                { title: 'MASSA DE MODELAR SOFT 12 CORES ACRILEX', brand: 'Acrilex', size: '12 Cores', price: 10.00 },
                { title: 'LÁPIS ESTACA CORES C/ 12 ACRILEX', brand: 'Acrilex', size: '12 Cores', price: 15.00 },
                { title: 'GIZ DE CERA CURTO 15 CORES PIRATININGA', brand: 'Piratininga', size: '15 Cores', price: 8.00 },
                { title: 'LÁPIS DE COR BIG 12 CORES LEO&LEO', brand: 'Leo&Leo', size: '12 Cores Big', price: 18.00 },
                { title: 'CANETA HIDROGRÁFICA 12 CORES COMPACTOR', brand: 'Compactor', size: '12 Cores', price: 12.00 },
                { title: 'MASSA DE MODELAR 12 CORES MAKE+', brand: 'Make+', size: '12 Cores', price: 9.00 },
                { title: 'GIZ DE CERA 12 CORES KOALA', brand: 'Koala', size: '12 Cores', price: 7.00 },
                { title: 'GIZÃO DE CERA 12 CORES KOALA', brand: 'Koala', size: '12 Cores Gizão', price: 11.00 },
                { title: 'LÁPIS DE COR ECO 12 CORES MULTICOLOR', brand: 'Multicolor', size: '12 Cores', price: 14.00 },
                { title: 'GIZÃO DE CERA 12 CORES MARIPEL', brand: 'Maripel', size: '12 Cores Gizão', price: 10.00 },
                { title: 'GIZ DE CERA CURTO 15 CORES KOALA', brand: 'Koala', size: '15 Cores', price: 8.50 },
                { title: 'LÁPIS DE COR RECICLADO 12 CORES ONDA', brand: 'Onda', size: '12 Cores', price: 13.00 },
                { title: 'MASSA DE MODELAR 12 CORES KOALA', brand: 'Koala', size: '12 Cores', price: 9.50 },
                { title: 'GIZAO DE CERA 12 CORES FAMIX', brand: 'Famix', size: '12 Cores Gizão', price: 10.50 },
                { title: 'GIZ DE CERA CURTO 15 CORES ACRILEX', brand: 'Acrilex', size: '15 Cores', price: 9.00 },
                { title: 'LÁPIS DE COR 12 CORES CROMUS', brand: 'Cromus', size: '12 Cores', price: 16.00 },
                { title: 'CANETA HIDROGRÁFICA 12 CORES LEO&LEO', brand: 'Leo&Leo', size: '12 Cores', price: 11.00 },
                { title: 'GIZ LÍQUIDO JOCAR', brand: 'Jocar', size: 'N/A', price: 15.00 },
             ]
        },
        {
            id: 'envelope', name: 'Envelope', category: 'Expediente',
             variations: [
                { title: 'ENVELOPE SACO BRANCO 12 X 17', brand: 'Genérico', size: '12x17', price: 0.30 },
                { title: 'ENVELOPE SACO BRANCO 16 X 22', brand: 'Genérico', size: '16x22', price: 0.40 },
                { title: 'ENVELOPE SACO BRANCO 17 X 25', brand: 'Genérico', size: '17x25', price: 0.45 },
                { title: 'ENVELOPE SACO BRANCO 20 X 28', brand: 'Genérico', size: '20x28', price: 0.50 },
                { title: 'ENVELOPE SACO BRANCO 24 X 34', brand: 'Genérico', size: '24x34', price: 0.60 },
                { title: 'ENVELOPE SACO BRANCO 26 X 36', brand: 'Genérico', size: '26x36', price: 0.70 },
                { title: 'ENVELOPE SACO OURO 12 X 17', brand: 'Genérico', size: '12x17', price: 0.35 },
                { title: 'ENVELOPE SACO OURO 16 X 22', brand: 'Genérico', size: '16x22', price: 0.45 },
                { title: 'ENVELOPE SACO OURO 17 X 25', brand: 'Genérico', size: '17x25', price: 0.50 },
                { title: 'ENVELOPE SACO OURO 20 X 28', brand: 'Genérico', size: '20x28', price: 0.55 },
                { title: 'ENVELOPE SACO OURO 24 X 34', brand: 'Genérico', size: '24x34', price: 0.65 },
                { title: 'ENVELOPE SACO OURO 26 X 36', brand: 'Genérico', size: '26x36', price: 0.75 },
                { title: 'ENVELOPE SACO KRAFT 12 X 17', brand: 'Genérico', size: '12x17', price: 0.40 },
                { title: 'ENVELOPE SACO KRAFT 16 X 22', brand: 'Genérico', size: '16x22', price: 0.50 },
                { title: 'ENVELOPE SACO KRAFT 17 X 25', brand: 'Genérico', size: '17x25', price: 0.55 },
                { title: 'ENVELOPE SACO KRAFT 20 X 28', brand: 'Genérico', size: '20x28', price: 0.60 },
                { title: 'ENVELOPE SACO KRAFT 24 X 34', brand: 'Genérico', size: '24x34', price: 0.70 },
                { title: 'ENVELOPE SACO KRAFT 26 X 36', brand: 'Genérico', size: '26x36', price: 0.80 },
                { title: 'ENVELOPE OFÍCIO COLORIDO', brand: 'Genérico', size: 'Ofício', price: 0.50 },
                { title: 'ENVELOPE CARTA COLORIDO', brand: 'Genérico', size: 'Carta', price: 0.40 },
             ]
        },
        {
            id: 'tinta', name: 'Tinta', category: 'Arte',
            variations: [
                { title: 'TINTA GUACHE 6 CORES ACRILEX', brand: 'Acrilex', size: '6 Cores', price: 9.00 },
                { title: 'TINTA GUACHE 250 ML MARIPEL', brand: 'Maripel', size: '250ml', price: 7.50 },
                { title: 'TINTA PARA TECIDO 37 ML ACRILEX', brand: 'Acrilex', size: '37ml', price: 4.50 },
            ]
        },
         {
            id: 'utilidades_gerais', name: 'Utilidades Gerais', category: 'Utilidades',
            variations: [
                 { title: 'LACRADOR DE CAIXA MAXCRIL', brand: 'Maxcril', size: 'N/A', price: 25.00 },
                 { title: 'LACRADOR DE CAIXA BAZZE', brand: 'Bazze', size: 'N/A', price: 22.00 },
                 { title: 'PERCEVEJO COLORIDO C/ 100 PAYON', brand: 'Payon', size: '100 un', price: 5.00 },
                 { title: 'PERCEVEJO LATONADO C/ 100', brand: 'Genérico', size: '100 un', price: 4.50 },
                 { title: 'CHAVEIROS COM ETIQUETA MAXCRIL', brand: 'Maxcril', size: 'N/A', price: 3.00 },
                 { title: 'QUADRO MULTIUSO A4 MAXCRIL', brand: 'Maxcril', size: 'A4', price: 18.00 },
                 { title: 'SENHA COM 2.000 NÚMEROS', brand: 'Genérico', size: '2000 un', price: 30.00 },
                 { title: 'FITILHO 50 METROS', brand: 'Genérico', size: '50m', price: 3.50 },
                 { title: 'RÉGUA 30 CM MAXCRIL', brand: 'Maxcril', size: '30cm', price: 2.50 },
                 { title: 'RÉGUA 20 CM MAXCRIL', brand: 'Maxcril', size: '20cm', price: 2.00 },
            ]
        },
    ];

    // --- Seletores de Elementos do DOM ---
    const catalogContainer = document.getElementById('product-catalog');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const sortAZButton = document.getElementById('sortAZ');
    const sortZAButton = document.getElementById('sortZA');
    const clearFiltersButton = document.getElementById('clearFilters');
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGrid = document.getElementById('modal-grid');
    const closeModalButton = document.querySelector('.close-button');

    let currentSort = '';

    // --- Funções ---

    // Renderiza os produtos na tela
    function renderProducts(products) {
        catalogContainer.innerHTML = '';
        if (products.length === 0) {
            catalogContainer.innerHTML = '<p>Nenhum produto encontrado com os filtros selecionados.</p>';
            return;
        }

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.id = product.id;

            card.innerHTML = `
                <div class="product-image-placeholder">
                    <span>Imagem</span>
                </div>
                <div class="product-details">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-info">
                        <span class="product-count">${product.variations.length} variações</span>
                    </div>
                </div>
            `;
            catalogContainer.appendChild(card);
        });
    }
    
    // Popula o dropdown de categorias
    function populateCategories() {
        const categories = [...new Set(catalogData.map(p => p.category))];
        categories.sort();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // Aplica todos os filtros e re-renderiza a lista
    function applyFilters() {
        let filteredProducts = [...catalogData];

        // Filtro de Pesquisa
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.variations.some(v => v.title.toLowerCase().includes(searchTerm))
            );
        }

        // Filtro de Categoria
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
        }

        // Filtro de Preço
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        filteredProducts = filteredProducts.filter(p => {
           return p.variations.some(v => v.price >= minPrice && v.price <= maxPrice);
        });

        // Ordenação
        if (currentSort === 'az') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (currentSort === 'za') {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        
        renderProducts(filteredProducts);
    }
    
    function clearAllFilters() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        currentSort = '';
        sortAZButton.classList.remove('active');
        sortZAButton.classList.remove('active');
        applyFilters();
    }

    // Abre o modal com as variações do produto
    function openModal(productId) {
        const product = catalogData.find(p => p.id === productId);
        if (!product) return;

        modalTitle.textContent = `Variações de ${product.name}`;
        modalGrid.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'variation-card';
        header.innerHTML = `
            <p><strong>Imagem</strong></p>
            <p><strong>Título</strong></p>
            <p><strong>Marca</strong></p>
            <p><strong>Tamanho</strong></p>
            <p style="text-align: right;"><strong>Preço</strong></p>
        `;
        modalGrid.appendChild(header);

        product.variations.forEach(v => {
            const variationCard = document.createElement('div');
            variationCard.className = 'variation-card';
            variationCard.innerHTML = `
                <img src="https://placehold.co/80x80/4f46e5/ffffff?text=${encodeURIComponent(product.name)}" 
                     alt="${v.title}" 
                     class="variation-image">
                <p>${v.title}</p>
                <p>${v.brand}</p>
                <p>${v.size}</p>
                <p class="variation-price">R$ ${v.price.toFixed(2).replace('.', ',')}</p>
            `;
            modalGrid.appendChild(variationCard);
        });

        modal.style.display = 'block';
    }

    // Fecha o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    minPriceInput.addEventListener('input', applyFilters);
    maxPriceInput.addEventListener('input', applyFilters);
    clearFiltersButton.addEventListener('click', clearAllFilters);

    sortAZButton.addEventListener('click', () => {
        currentSort = 'az';
        sortAZButton.classList.add('active');
        sortZAButton.classList.remove('active');
        applyFilters();
    });

    sortZAButton.addEventListener('click', () => {
        currentSort = 'za';
        sortZAButton.classList.add('active');
        sortAZButton.classList.remove('active');
        applyFilters();
    });
    
    catalogContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            openModal(card.dataset.id);
        }
    });

    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Inicialização ---
    populateCategories();
    applyFilters();
});