export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RESET_ITEM = 'RESET_ITEM';
export const TIMER = 'TIMER';

export function addItem() {
   return (dispatch, getState) => {
      const form = getState().form.marks;
      const form2 = getState();
      console.log(form2);
      const bookId = getState().marks.marks.length;
      const marks = {
         id: +bookId+1,
         title: form.values.title,
         latitude: +form.values.latitude,
         longitude: +form.values.longitude
      };
      dispatch({
         type: ADD_ITEM,
         marks
      });
   }
}

export const removeItem = (id) => ({
   type: REMOVE_ITEM,
   payload: id
});

export const resetItem = () => ({
   type: RESET_ITEM
});

export const timer = () => ({
   type: TIMER
})