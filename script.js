require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90.24621716407823,38.592397205540784],
        zoom: 12
      });

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

      var template = { // autocasts as new PopupTemplate()
        title: "Neighborhood: {NHD_NAME}",
        content: [{
          // It is also possible to set the fieldInfos outside of the content
          // directly in the popupTemplate. If no fieldInfos is specifically set
          // in the content, it defaults to whatever may be set within the popupTemplate.
          type: "fields",
          fieldInfos: [{
            fieldName: "NHD_NAME",
            label: "Neighborhood: ",
            visible: true
          }, {
            fieldName: "NHD_NUM",
            label: "Neighborhood #: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "Shape__Area",
            label: "Area: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "Shape__Length ",
            label: "Length",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "FID",
            label: "FID",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }
                      ]
        }]
      };

     var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABQ0lEQVRYhe2WTU7CQBSAP3/ikjUuZeEdNIEYjsLGHWGBHsHqEbyHxHiPbjwAJEbcI5bUha9xCJ03M+lMCEm/5AX63pfX15m2AC0HQkcila9yAeTAO3CZwFe5Bj6AUmIJ3ET0VUbAtzR6kSglN4rgWzkBHvm/imfgNGJepQPMIl+p6c9w3Jy5iJ/AQPH64pSG31f8geHn2gBVw54mCdXdnst3Fz2jv3MAX0Kf9+gDhLLT/zjhybzwHeAMeAIWwBzIJOdb98a2BebzXMVDQN3V3ynMJX/F3+u2lJxv3drfdwt+5PNIAmAdUPfGtgIZu0ucBdRd/VVhAhQ1JyiAWwlbfdx0gCGwAVbAFDiXuJNcIWGrb9j+OQ4e4E2OpzXuveFr9dcmA3zJcbfG7Rq+Vl82GSA2h/sqTobtL1LKbdhi7yvQ0vILxke3QeN8NqgAAAAASUVORK5CYII=",
      width: "20px",
      height: "20px"
};
  var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
      });
  
      map.add(featureLayer);
  

   /*
      featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 6,
        color: "red",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };*/
    });
