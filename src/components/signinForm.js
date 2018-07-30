import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from './formTitle';
import {FormInput, FormButton } from './formFields'
import TextLink from './textLink';


class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className ='sign-in-form__title' text='login'/>
                <Field className='sign-in-form__email' placeholder='email' component={FormInput} name='email' type='email' title="Email"/>
                <Field className='sign-in-form__password' placeholder='password' component={FormInput} name='password' type='password' title="Pasword"/>
                <Field className='sign-in-form__login' component={FormButton} name='Login' type='submit' title="Login"/>
                <div className='sign-in-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Not a member?'/>
                </div>
            </form>
        );
    }
}
SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);


export default SigninForm;