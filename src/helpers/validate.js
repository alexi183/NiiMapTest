export const required = value => (!value && 'Поле обязательно для заполнения');

export const checkLength = (min, max) => value =>
    value && (value.length > max || value.length < min) && `Количество символов не должно превышать ${max} и не быть менее ${min}`;

export const checkLength1 = checkLength(3, 75);
