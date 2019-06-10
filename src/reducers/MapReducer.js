import * as actions from '../actions/Map';

const INITIAL_STATE = {
   marks: [],
   messageMarkerAdded: false,
   deleteMark: false,
   deleteConfirm: false,
}

const MapReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case actions.ADD_ITEM:

         if ([...state.marks].find((item) =>
             item.title.toLowerCase() === action.marks.title.toLowerCase())
         ) {
            return {...state, marks: [...state.marks, action.marks], deleteMark: true}

         } else {
            return {...state, marks: [...state.marks, action.marks], messageMarkerAdded: true}
         }

      case actions.REMOVE_MARK_ADDED_MESSAGE:
         return {...state, messageMarkerAdded: false}

      case actions.REMOVE_ITEM:
         let updatedList = [...state.marks];
         updatedList.splice(action.payload, 1)

         return {...state, marks: updatedList}

      case actions.REMOVE_ALERT:
         return {...state, deleteMark: false, deleteConfirm: true}

      case actions.RESET_ITEM:
         return {...state, deleteMark: false, deleteConfirm: false}

      case actions.REMOVE_CONFIRM:
         return {...state, deleteConfirm: false}

      default: {
         return state;
      }
   }
};

export default MapReducer;
