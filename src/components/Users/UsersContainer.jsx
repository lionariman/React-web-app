import { connect } from "react-redux";
import { onFollowClickActionCreator } from "../../store/actions";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFollowClick: (userId) => {
            dispatch(onFollowClickActionCreator(userId));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;