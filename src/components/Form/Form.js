import React from 'react';
import { reduxForm, Field } from 'redux-form'
import * as val from "../../helpers/validate";
import MaskedInput from 'react-text-mask';
import 'react-datepicker/dist/react-datepicker.css';
import "./Form.css";

const renderField = (
    { input, type, name, placeholder, className, meta: { touched, error }}) => (

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

const renderInputMask = ({ input, placeholder, name, className }) =>
    <div className="form-row-input">
       <MaskedInput
           mask={[/\d/,/\d/, '.', /\d/, /\d/]}
           name={name}
           {...input}
           keepCharPositions={true}
           placeholder={placeholder}
           className={className}
       />
    </div>

const Form = ({
                 addItem,
                 changeData,
                 handleSubmit,
                 time, deleteMark,
                 removeItem,
                 marks,
                 count,
                 timer,
                 resetItem}) => {

   let lastMarkId = marks.length-1;

   console.log(lastMarkId);

   console.log('deleteMark-', deleteMark)

   console.log('reset-', resetItem);

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
                    validate={val.required}
                    component={renderInputMask}
             />
          </div>

          <div className="form-group">
             <label>Долгота</label>
             <Field type="text"
                    className="form-control"
                    placeholder="__ . __"
                    name="longitude"
                    validate={val.required}
                    component={renderInputMask}
             />
          </div>

          <button type="submit" className="btn btn-primary mb-5">
             Добавить маркер
          </button>

          <button type="button" onClick={() => setInterval(timer(), 1000)} className="btn btn-primary mb-5">
             Таймер
          </button>

          <div>
             {count}
          </div>

          {
             deleteMark &&
             <div>
                <div> Маркер с данным именем уже существует. Удалить его ? </div>
                <div>
                   <button type="button" className="btn btn-primary mb-5 mr-3"
                           onClick={() => setTimeout(removeItem, 3000,lastMarkId)}>Да
                   </button>
                   <button type="button" className="btn btn-primary mb-5"
                           onClick={() => resetItem()}>Нет
                   </button>
                </div>

                {/*{time}*/}
             </div>
          }
       </form>
   )
}

export default reduxForm({
   form: 'marks'
})(Form);