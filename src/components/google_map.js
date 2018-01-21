import React, { Component } from 'react';

class GoogleMap extends Component {
    // This method will be called automatically after the page is rendered.
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    // ref reference to the already rendered html element to the page.
    render () {
        // this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;