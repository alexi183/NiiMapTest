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
      time: state.marks.count,
      deleteMark: state.marks.delete,
      count: state.marks.count
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addItem: () => dispatch(actions.addItem()),
      removeItem: (state) => dispatch(actions.removeItem(state)),
      resetItem: () => dispatch(actions.resetItem()),
      timer: () => dispatch(actions.timer())
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer);

