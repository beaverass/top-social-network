import React from 'react';
import {useForm} from 'react-hook-form';
import classes from './Login.module.css';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: "onBlur"
    });


    const onSubmit = (data) => {

        props.onSubmit(data);
        reset();
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <input className={errors?.email && classes.errorInput} {...register('email', {
                            required: "Поле обязательно к заполнению"
                        })}
                               placeholder={'email'}/>
                    </div>

                    <div>
                        {errors?.email && <p>{errors?.email?.message || "Some Error"}</p>}
                    </div>

                    <div>
                        <input type={'password'}
                               className={errors?.password && classes.errorInput} {...register('password', {
                            required: "Поле обязательно к заполнению"
                        })}
                               placeholder={"Password"}/>
                    </div>

                    <div>
                        {errors?.password && <p>{errors?.password?.message || "Some Error"}</p>}
                    </div>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <div>
                            <input type={"checkbox"} className={classes.rememberMe} {...register('rememberMe')}/>
                        </div>
                        <div>
                            remember me
                        </div>
                    </div>

                    <div>
                        {props.loginErrorMessage && <p>{props.loginErrorMessage}</p> }
                    </div>

                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate replace to={'/profile'}/>
    }
    return (
        <div>
            <LoginForm loginErrorMessage={props.loginErrorMessage} onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginErrorMessage: state.auth.loginErrorMessage
})


export default connect(mapStateToProps, {
    login
})(Login);