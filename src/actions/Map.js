export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_MARK_ADDED_MESSAGE = 'REMOVE_MARK_ADDED_MESSAGE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const RESET_ITEM = 'RESET_ITEM';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const REMOVE_CONFIRM = 'REMOVE_CONFIRM';

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

export const removeMarkMessage = () => ({
   type: REMOVE_MARK_ADDED_MESSAGE,
});

export const resetItem = () => ({
   type: RESET_ITEM
});

export const removeAlert = () => ({
   type: REMOVE_ALERT
})

export const removeConfirm = () => ({
   type: REMOVE_CONFIRM
})

