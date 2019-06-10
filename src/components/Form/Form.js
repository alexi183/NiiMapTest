import React, {Component} from 'react';
import {Field, reduxForm, reset} from 'redux-form'
import * as val from "../../helpers/validate";
import 'react-datepicker/dist/react-datepicker.css';
import "./Form.css";

const renderField = (
    { input, type, name, placeholder, className,  meta: { touched, error }}) => (

    <div className="form-row-input">
       <input {...input}
              className={`${touched && error ? "form-control is-invalid" :
                  className}`}
              placeholder={placeholder}
              type={type}
              name={name}
       />
       {touched && error && <span className="error">{error}</span>}
    </div>
);

class Form extends Component {
   render() {

      const {
         addItem,
         handleSubmit,
         reset,
         deleteMark,
         messageMarkerAdded,
         removeMarkMessage,
         removeItem,
         deleteConfirm,
         marks,
         resetItem,
         removeAlert,
         removeConfirm,
         pristine,
         submitting
      } = this.props;

      const lastMarkId = marks.length-1;

      const handleClick = () => {
         setTimeout(removeItem, 3000, lastMarkId)
         removeAlert()
      }

      return (
          <form className="form" onSubmit={handleSubmit(addItem)}>
             <div className="form-group">
                <label>Заголовок</label>
                <Field type="text"
                       placeholder="Введите заголовок"
                       className="form-control"
                       component={renderField}
                       validate={[val.required, val.checkLength1]}
                       name="title"
                />
             </div>

             <div className="form-group">
                <label>Широта</label>
                <Field type="text"
                       className="form-control"
                       placeholder="__ . __"
                       name="latitude"
                       validate={[val.required, val.number, val.coorValidate]}
                       component={renderField}
                />
             </div>

             <div className="form-group">
                <label>Долгота</label>
                <Field type="text"
                       className="form-control"
                       placeholder="__ . __"
                       name="longitude"
                       validate={[val.required,val.number, val.coorValidate]}
                       component={renderField}
                />
             </div>

             <button type="submit" disabled={pristine || submitting}  className="btn btn-primary mr-3">
                Добавить маркер
             </button>
             <button type="button" className="btn btn-primary" onClick={reset}>
                Очистить
             </button>

             {
                messageMarkerAdded && setTimeout(removeMarkMessage, 3000) &&
                <div className="mt-5 message">
                   <div> Маркер успешно добавлен </div>
                </div>
             }

             {
                deleteMark &&
                <div className="mt-5 message">
                   <div> Маркер с данным именем уже существует. Удалить его ? </div>
                   <div>
                      <button type="button" className="btn btn-primary mr-3"
                              onClick={() => handleClick()}>Да
                      </button>
                      <button type="button" className="btn btn-primary "
                              onClick={() => resetItem()}>Нет
                      </button>
                   </div>
                </div>
             }

             {
                deleteConfirm && setTimeout(removeConfirm, 3000) &&
                <div className="mt-5 message">
                   Маркер будет удалён через 3 с.
                </div>
             }
          </form>
      )
   }
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('marks'));


export default reduxForm({
   form: 'marks',
   onSubmitSuccess: afterSubmit
})(Form);

