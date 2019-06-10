import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps'
import './Map.css'

const MapComponent = (props) => {

   return (
       <YMaps>
          <Map
              state={{
                 center: [55.75, 37.57],
                 zoom: 7,
                 controls: ['zoomControl', 'fullscreenControl'],
              }}
              width={500}
              height={500}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
          >

             {props.marks.map((item, i) =>
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
             )}
          </Map>
       </YMaps>
   )
}

export default MapComponent;

