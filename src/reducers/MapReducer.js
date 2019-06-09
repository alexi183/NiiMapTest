import * as actions from '../actions/Map';

const INITIAL_STATE = {
   marks: [],
   count: 3,
   delete: false
}

const MapReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case actions.ADD_ITEM:

         if ([...state.marks].find((item) =>
             item.title.toLowerCase() === action.marks.title.toLowerCase())
         ) {
            return {...state, marks: [...state.marks, action.marks], delete: true}

         } else {
            return {...state, marks: [...state.marks, action.marks], delete: false}
         }


      case actions.REMOVE_ITEM:

         let updatedList = [...state.marks];
         updatedList.splice(action.payload, 1)

         return {...state, marks: updatedList, delete: false}


      case actions.RESET_ITEM:
         return {...state, delete: false}


      case actions.TIMER:

         if(state.count > 0) {
            state.count--
         } else if (state.count === 0) {
            state.count = 3
         }

         return {...state, count: state.count}

      default: {
         return state;
      }
   }
};

export default MapReducer;
