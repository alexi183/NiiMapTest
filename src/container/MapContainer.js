import React, { Component } from 'react';
import {connect} from "react-redux";
import Form from "../components/Form/Form";
import MapComponent from "../components/Map/Map";
import * as actions from "../actions/Map";
import './MapContainer.css';

class MapContainer extends Component {

   render() {

      return (
          <div className="wrapper d-flex">
             <div className="col">
                <Form {...this.props} />
             </div>
             <div className="col">
                <MapComponent {...this.props} />
             </div>
          </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      marks: state.marks.marks,
      messageMarkerAdded: state.marks.messageMarkerAdded,
      markerAdded: state.marks.markerAdded,
      deleteMark: state.marks.deleteMark,
      deleteConfirm: state.marks.deleteConfirm,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addItem: () => dispatch(actions.addItem()),
      removeMarkMessage: () => dispatch(actions.removeMarkMessage()),
      removeItem: (state) => dispatch(actions.removeItem(state)),
      resetItem: () => dispatch(actions.resetItem()),
      removeAlert: () => dispatch(actions.removeAlert()),
      removeConfirm: () => dispatch(actions.removeConfirm()),
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer);

