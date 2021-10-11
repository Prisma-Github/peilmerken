ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28992").setExtent([115178.373883, 388611.812149, 160489.545953, 406094.561245]);
var wms_layers = [];


    var projection_brtachtergrondkaartgrijs_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_brtachtergrondkaartgrijs_0 = projection_brtachtergrondkaartgrijs_0.getExtent();
    var size_brtachtergrondkaartgrijs_0 = ol.extent.getWidth(projectionExtent_brtachtergrondkaartgrijs_0) / 256;
    var resolutions_brtachtergrondkaartgrijs_0 = new Array(14);
    var matrixIds_brtachtergrondkaartgrijs_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_brtachtergrondkaartgrijs_0[z] = size_brtachtergrondkaartgrijs_0 / Math.pow(2, z);
        matrixIds_brtachtergrondkaartgrijs_0[z] = z;
    }
    var lyr_brtachtergrondkaartgrijs_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://geodata.nationaalgeoregister.nl/wmts",
    attributions: ' ',
                                "layer": "brtachtergrondkaartgrijs",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_brtachtergrondkaartgrijs_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_brtachtergrondkaartgrijs_0),
                resolutions: resolutions_brtachtergrondkaartgrijs_0,
                matrixIds: matrixIds_brtachtergrondkaartgrijs_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "brtachtergrondkaartgrijs",
                            opacity: 1.0,
                            
                            
                          });
var format_tilburg_nap_1 = new ol.format.GeoJSON();
var features_tilburg_nap_1 = format_tilburg_nap_1.readFeatures(json_tilburg_nap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_tilburg_nap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tilburg_nap_1.addFeatures(features_tilburg_nap_1);
var lyr_tilburg_nap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tilburg_nap_1, 
                style: style_tilburg_nap_1,
                interactive: true,
                title: '<img src="styles/legend/tilburg_nap_1.png" /> tilburg_nap'
            });
var format_rws_nap_2 = new ol.format.GeoJSON();
var features_rws_nap_2 = format_rws_nap_2.readFeatures(json_rws_nap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_rws_nap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rws_nap_2.addFeatures(features_rws_nap_2);
var lyr_rws_nap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rws_nap_2, 
                style: style_rws_nap_2,
                interactive: true,
                title: '<img src="styles/legend/rws_nap_2.png" /> rws_nap'
            });

lyr_brtachtergrondkaartgrijs_0.setVisible(true);lyr_tilburg_nap_1.setVisible(true);lyr_rws_nap_2.setVisible(true);
var layersList = [lyr_brtachtergrondkaartgrijs_0,lyr_tilburg_nap_1,lyr_rws_nap_2];
lyr_tilburg_nap_1.set('fieldAliases', {'fid': 'fid', 'peilmerk': 'peilmerk', 'nap-hoogte': 'nap-hoogte', 'beschrijving_locatie': 'beschrijving_locatie', 'adres': 'adres', 'status': 'status', 'x-rd-km': 'x-rd-km', 'y-rd-km': 'y-rd-km', 'muurvlak': 'muurvlak', 'x-muur-cm': 'x-muur-cm', 'y-muur-cm': 'y-muur-cm', 'soort_bout': 'soort_bout', 'plaatsingsjaar': 'plaatsingsjaar', 'laatst_gecontroleerd_visueel': 'laatst_gecontroleerd_visueel', 'laatst_gecontroleerd_gemeten': 'laatst_gecontroleerd_gemeten', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_rws_nap_2.set('fieldAliases', {'fid': 'fid', 'peilmerk': 'peilmerk', 'x_rd': 'x_rd', 'y_rd': 'y_rd', 'nap_hoogte': 'nap_hoogte', 'pub_tekst': 'pub_tekst', 'muurvlak': 'muurvlak', 'x_muur_cm': 'x_muur_cm', 'y_muur_cm': 'y_muur_cm', 'type': 'type', 'meetdatum': 'meetdatum', 'orde': 'orde', 'peilmerkfoto': 'peilmerkfoto', });
lyr_tilburg_nap_1.set('fieldImages', {'fid': 'TextEdit', 'peilmerk': 'TextEdit', 'nap-hoogte': 'TextEdit', 'beschrijving_locatie': 'TextEdit', 'adres': 'TextEdit', 'status': 'TextEdit', 'x-rd-km': 'TextEdit', 'y-rd-km': 'TextEdit', 'muurvlak': 'TextEdit', 'x-muur-cm': 'TextEdit', 'y-muur-cm': 'TextEdit', 'soort_bout': 'TextEdit', 'plaatsingsjaar': 'TextEdit', 'laatst_gecontroleerd_visueel': 'TextEdit', 'laatst_gecontroleerd_gemeten': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_rws_nap_2.set('fieldImages', {'fid': 'TextEdit', 'peilmerk': 'TextEdit', 'x_rd': 'TextEdit', 'y_rd': 'TextEdit', 'nap_hoogte': 'TextEdit', 'pub_tekst': 'TextEdit', 'muurvlak': 'TextEdit', 'x_muur_cm': 'TextEdit', 'y_muur_cm': 'TextEdit', 'type': 'TextEdit', 'meetdatum': 'TextEdit', 'orde': 'TextEdit', 'peilmerkfoto': 'TextEdit', });
lyr_tilburg_nap_1.set('fieldLabels', {'fid': 'inline label', 'peilmerk': 'inline label', 'nap-hoogte': 'inline label', 'beschrijving_locatie': 'inline label', 'adres': 'inline label', 'status': 'inline label', 'x-rd-km': 'inline label', 'y-rd-km': 'inline label', 'muurvlak': 'inline label', 'x-muur-cm': 'inline label', 'y-muur-cm': 'inline label', 'soort_bout': 'inline label', 'plaatsingsjaar': 'inline label', 'laatst_gecontroleerd_visueel': 'inline label', 'laatst_gecontroleerd_gemeten': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', });
lyr_rws_nap_2.set('fieldLabels', {'fid': 'inline label', 'peilmerk': 'inline label', 'x_rd': 'inline label', 'y_rd': 'inline label', 'nap_hoogte': 'inline label', 'pub_tekst': 'inline label', 'muurvlak': 'inline label', 'x_muur_cm': 'inline label', 'y_muur_cm': 'inline label', 'type': 'inline label', 'meetdatum': 'inline label', 'orde': 'inline label', 'peilmerkfoto': 'inline label', });
lyr_rws_nap_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});