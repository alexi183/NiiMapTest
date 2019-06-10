export const required = value => (!value && 'Поле обязательно для заполнения');

export const checkLength = (min, max) => value =>
    value && (value.length > max || value.length < min) && `Количество символов не должно превышать ${max} и не быть менее ${min}`;

export const coorValidate = value =>
    value && !/^(0|[1-9][0-9]{0,2})+\.(0|[1-9][0-9]{0,8})$/i.test(value) && 'Неверный формат данных, введите число с точкой';

export const number = value =>
    value && isNaN(Number(value)) && 'Введите число c точкой';

export const checkLength1 = checkLength(3, 75);
