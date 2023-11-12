import React from "react";
import classes from "./ProfileDescriptionForm.module.css";
import {useForm} from "react-hook-form";

const ProfileDescriptionForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.lookingForAJob
        }
    });


    return (
        <div className={classes.descriptionForm}>
            <form className={classes.descriptionForm} onSubmit={handleSubmit(props.onSubmit)}>

                <div className={classes.name}><b>FullName:</b>
                    <input className={errors?.email && classes.errorInput} {...register('fullName', {
                        required: "Поле обязательно к заполнению"
                    })}
                           placeholder={'fullName'}/>
                </div>


                <div className={classes.descriptionItem}><b>About me:</b> <input
                    className={errors?.email && classes.errorInput} {...register('aboutMe', {
                    required: "Поле обязательно к заполнению"
                })}
                    placeholder={'About me'}/></div>

                <div className={classes.descriptionItemFlex}>
                    <div><b>Looking for a job:</b></div>

                    <div>
                        <input type={"checkbox"}
                               className={errors?.email && classes.errorInput} {...register('lookingForAJob', {
                            required: "Поле обязательно к заполнению"
                        })}/>

                    </div>
                </div>

                <div className={classes.descriptionItem}><b>My professional skills:</b>
                    <input
                        className={errors?.email && classes.errorInput} {...register('lookingForAJobDescription', {
                        required: "Поле обязательно к заполнению"
                    })}
                        placeholder={'My professional skills'}/>
                </div>

                <div className={classes.descriptionItem}>
                    <div><b>Contacts:</b></div>
                    {Object.keys(props.profile.contacts).map(key => {

                        return (
                            <div key={key}>
                                {key}: <input {...register(`contacts.${key}`)} placeholder={`${key}`}/>
                                {props.errorMessages && props.errorMessages.filter(e => e.toLowerCase().includes(key)).map(em => <p>{em}</p>) }
                            </div>
                        )
                    })}
                </div>
                {/*{props.errorMessages && props.errorMessages.map(em => <p>{em}</p>) }*/}

                <div style={{textAlign: "right"}}>
                    <button className={classes.editBtn}>Save</button>
                </div>

            </form>
        </div>
    )
}
export default ProfileDescriptionForm;