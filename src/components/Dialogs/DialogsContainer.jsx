import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
    addMessageActionCreator,
    onMessageChangeActionCreator
} from "../../store/actions";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (e) => {
            dispatch(onMessageChangeActionCreator(e.target.value));
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;