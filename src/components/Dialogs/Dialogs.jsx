import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/> );

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} key={message.id}/>);

    let textareaRef = React.createRef();

    let onChangeMessageText = () => {
        let value = textareaRef.current.value;
        props.changeMessageText(value);
    }

    let addMessage = () => {
        props.addMessage();
    }



    return (

        <div className={classes.dialogs}>


            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                <div>{messagesElements}</div>

                <div>
                    <div>
                            <textarea placeholder='Enter your message' onChange={onChangeMessageText} ref={textareaRef}
                                      value={props.dialogsPage.newMessageText}/>
                    </div>

                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;