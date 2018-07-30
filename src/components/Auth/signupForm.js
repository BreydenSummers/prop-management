import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import {FormInput, FormButton } from '../formFields'
import TextLink from '../textLink';


class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>

                <FormTitle className ='sign-up-form__title' text='New User'/>
                <Field className='sign-up-form__fullname' placeholder='Full Name' component={FormInput} name='fullname' type='text' title="Full Name "/>
                <Field className='sign-up-form__unit' placeholder='Enter Unit Number' component={FormInput} name='Unit' type='text' title="Unit #"/>
                <Field className='sign-up-form__email' placeholder='email' component={FormInput} name='email' type='email' title="Email"/>
                <Field className='sign-up-form__password' placeholder='password' component={FormInput} name='password' type='password' title="Pasword"/>
                <Field className='sign-up-form__create-account' component={FormButton} name='createaccount' type='submit' title="Create Account"/>
                <div className='sign-up-form__text-links'>
                    <TextLink to='/signin' text='Already Regestered? Login'/>
                </div>
            </form>
        );
    }
}
SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);


export default SignupForm;