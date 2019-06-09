import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps'
import './Map.css'

const MapComponent = (props) => {

   let obj = props.marks[props.marks.length-1];

   console.log((obj) && [obj.latitude, obj.longitude]);

   return (
       <YMaps>
          <Map
              state={{
                 center: [55.75, 37.57],
                 zoom: 9,
                 controls: ['zoomControl', 'fullscreenControl'],
              }}
              width={500}
              height={500}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
          >

             {props.marks.map((item, i) =>
                     /* (item.latitude, item.longitude).contains ?*/
                     <Placemark
                         key={i}
                         geometry={[item.latitude, item.longitude]}
                         options={{
                            preset: 'islands#nightDotIcon'
                         }}
                         properties={{
                            iconCaption: item.title
                         }}
                     />
                 // :
                 // <div>
                 //    Координаты выходят за рамки карты
                 // </div>
             )}

          </Map>
       </YMaps>
   )
}

export default MapComponent;

