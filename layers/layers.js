var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonasdeRiesgo_1 = new ol.format.GeoJSON();
var features_ZonasdeRiesgo_1 = format_ZonasdeRiesgo_1.readFeatures(json_ZonasdeRiesgo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeRiesgo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeRiesgo_1.addFeatures(features_ZonasdeRiesgo_1);
var lyr_ZonasdeRiesgo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasdeRiesgo_1, 
                style: style_ZonasdeRiesgo_1,
                popuplayertitle: 'Zonas de Riesgo',
                interactive: true,
    title: 'Zonas de Riesgo<br />\
    <img src="styles/legend/ZonasdeRiesgo_1_0.png" /> Alto<br />\
    <img src="styles/legend/ZonasdeRiesgo_1_1.png" /> Bajo<br />\
    <img src="styles/legend/ZonasdeRiesgo_1_2.png" /> Medio<br />' });
var format_Vias_riesgo_2 = new ol.format.GeoJSON();
var features_Vias_riesgo_2 = format_Vias_riesgo_2.readFeatures(json_Vias_riesgo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_riesgo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_riesgo_2.addFeatures(features_Vias_riesgo_2);
var lyr_Vias_riesgo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_riesgo_2, 
                style: style_Vias_riesgo_2,
                popuplayertitle: 'Vias_riesgo',
                interactive: true,
    title: 'Vias_riesgo<br />\
    <img src="styles/legend/Vias_riesgo_2_0.png" /> Alto<br />\
    <img src="styles/legend/Vias_riesgo_2_1.png" /> Medio<br />\
    <img src="styles/legend/Vias_riesgo_2_2.png" /> Bajo<br />' });
var format_RiesgoBajoSocavon_3 = new ol.format.GeoJSON();
var features_RiesgoBajoSocavon_3 = format_RiesgoBajoSocavon_3.readFeatures(json_RiesgoBajoSocavon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoSocavon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoSocavon_3.addFeatures(features_RiesgoBajoSocavon_3);
var lyr_RiesgoBajoSocavon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoSocavon_3, 
                style: style_RiesgoBajoSocavon_3,
                popuplayertitle: 'Riesgo Bajo Socavon',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoSocavon_3.png" /> Riesgo Bajo Socavon'
            });
var format_RiesgoMedioSocavon_4 = new ol.format.GeoJSON();
var features_RiesgoMedioSocavon_4 = format_RiesgoMedioSocavon_4.readFeatures(json_RiesgoMedioSocavon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioSocavon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioSocavon_4.addFeatures(features_RiesgoMedioSocavon_4);
var lyr_RiesgoMedioSocavon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioSocavon_4, 
                style: style_RiesgoMedioSocavon_4,
                popuplayertitle: 'Riesgo Medio Socavon',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioSocavon_4.png" /> Riesgo Medio Socavon'
            });
var format_RiesgoAltoSocavon_5 = new ol.format.GeoJSON();
var features_RiesgoAltoSocavon_5 = format_RiesgoAltoSocavon_5.readFeatures(json_RiesgoAltoSocavon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoSocavon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoSocavon_5.addFeatures(features_RiesgoAltoSocavon_5);
var lyr_RiesgoAltoSocavon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoSocavon_5, 
                style: style_RiesgoAltoSocavon_5,
                popuplayertitle: 'Riesgo Alto Socavon',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoSocavon_5.png" /> Riesgo Alto Socavon'
            });
var format_Infraestructuras_riesgo_6 = new ol.format.GeoJSON();
var features_Infraestructuras_riesgo_6 = format_Infraestructuras_riesgo_6.readFeatures(json_Infraestructuras_riesgo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuras_riesgo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructuras_riesgo_6.addFeatures(features_Infraestructuras_riesgo_6);
var lyr_Infraestructuras_riesgo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraestructuras_riesgo_6, 
                style: style_Infraestructuras_riesgo_6,
                popuplayertitle: 'Infraestructuras_riesgo',
                interactive: true,
    title: 'Infraestructuras_riesgo<br />\
    <img src="styles/legend/Infraestructuras_riesgo_6_0.png" /> Bajo<br />\
    <img src="styles/legend/Infraestructuras_riesgo_6_1.png" /> Alto<br />\
    <img src="styles/legend/Infraestructuras_riesgo_6_2.png" /> Medio<br />' });
var format_Focodesocavones_7 = new ol.format.GeoJSON();
var features_Focodesocavones_7 = format_Focodesocavones_7.readFeatures(json_Focodesocavones_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focodesocavones_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focodesocavones_7.addFeatures(features_Focodesocavones_7);
var lyr_Focodesocavones_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focodesocavones_7, 
                style: style_Focodesocavones_7,
                popuplayertitle: 'Foco de socavones',
                interactive: true,
                title: '<img src="styles/legend/Focodesocavones_7.png" /> Foco de socavones'
            });
var format_Limitedeestudio_8 = new ol.format.GeoJSON();
var features_Limitedeestudio_8 = format_Limitedeestudio_8.readFeatures(json_Limitedeestudio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitedeestudio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedeestudio_8.addFeatures(features_Limitedeestudio_8);
var lyr_Limitedeestudio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitedeestudio_8, 
                style: style_Limitedeestudio_8,
                popuplayertitle: 'Limite de estudio',
                interactive: false,
                title: '<img src="styles/legend/Limitedeestudio_8.png" /> Limite de estudio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZonasdeRiesgo_1.setVisible(true);lyr_Vias_riesgo_2.setVisible(true);lyr_RiesgoBajoSocavon_3.setVisible(true);lyr_RiesgoMedioSocavon_4.setVisible(true);lyr_RiesgoAltoSocavon_5.setVisible(true);lyr_Infraestructuras_riesgo_6.setVisible(true);lyr_Focodesocavones_7.setVisible(true);lyr_Limitedeestudio_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZonasdeRiesgo_1,lyr_Vias_riesgo_2,lyr_RiesgoBajoSocavon_3,lyr_RiesgoMedioSocavon_4,lyr_RiesgoAltoSocavon_5,lyr_Infraestructuras_riesgo_6,lyr_Focodesocavones_7,lyr_Limitedeestudio_8];
lyr_ZonasdeRiesgo_1.set('fieldAliases', {'fid': 'fid', 'tipo_riesg': 'tipo_riesg', 'nivel_ries': 'nivel_ries', 'area_m2': 'area_m2', });
lyr_Vias_riesgo_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nivel_riesgo': 'nivel_riesgo', 'long': 'long', });
lyr_RiesgoBajoSocavon_3.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_RiesgoMedioSocavon_4.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_RiesgoAltoSocavon_5.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_Infraestructuras_riesgo_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nivel_riesgo': 'nivel_riesgo', });
lyr_Focodesocavones_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'Norte': 'Norte', 'Este': 'Este', });
lyr_Limitedeestudio_8.set('fieldAliases', {'fid': 'fid', });
lyr_ZonasdeRiesgo_1.set('fieldImages', {'fid': 'TextEdit', 'tipo_riesg': 'TextEdit', 'nivel_ries': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_Vias_riesgo_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'long': 'TextEdit', });
lyr_RiesgoBajoSocavon_3.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_RiesgoMedioSocavon_4.set('fieldImages', {'fid': 'TextEdit', 'area_m2': '', });
lyr_RiesgoAltoSocavon_5.set('fieldImages', {'fid': 'TextEdit', 'area_m2': '', });
lyr_Infraestructuras_riesgo_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', });
lyr_Focodesocavones_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'Range', });
lyr_Limitedeestudio_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZonasdeRiesgo_1.set('fieldLabels', {'fid': 'hidden field', 'tipo_riesg': 'inline label - visible with data', 'nivel_ries': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_Vias_riesgo_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'nivel_riesgo': 'inline label - visible with data', 'long': 'inline label - visible with data', });
lyr_RiesgoBajoSocavon_3.set('fieldLabels', {'fid': 'hidden field', 'area_m2': 'inline label - visible with data', });
lyr_RiesgoMedioSocavon_4.set('fieldLabels', {'fid': 'hidden field', 'area_m2': 'inline label - visible with data', });
lyr_RiesgoAltoSocavon_5.set('fieldLabels', {'fid': 'hidden field', 'area_m2': 'inline label - visible with data', });
lyr_Infraestructuras_riesgo_6.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'nivel_riesgo': 'inline label - visible with data', });
lyr_Focodesocavones_7.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'Norte': 'inline label - visible with data', 'Este': 'inline label - visible with data', });
lyr_Limitedeestudio_8.set('fieldLabels', {'fid': 'no label', });
lyr_Limitedeestudio_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});