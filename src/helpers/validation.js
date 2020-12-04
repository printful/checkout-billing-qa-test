import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

extend('required', {
    ...required,
    message: messages['required'],
});
