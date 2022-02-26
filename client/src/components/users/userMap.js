import GoogleMapReact from 'google-map-react';
import React, {Component} from 'react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.9526,
      lng: -75.1652
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '75%', }} className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD1u9M5VZ_Q-YEOX0diyi8yKbGLbFzp2Wc'

          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.730610}
            lng={-73.935242}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;