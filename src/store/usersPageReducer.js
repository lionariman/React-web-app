import { ON_FOLLOW_CLICK } from "./actionConstants";

let initialState = {
    usersData: [
        { id: 1, followed: false, fullname: 'aaa', status: 'status a', location: { country: 'country a', city: 'city a' } },
        { id: 2, followed: false, fullname: 'bbb', status: 'status b', location: { country: 'country b', city: 'city b' } },
        { id: 3, followed: false, fullname: 'ccc', status: 'status c', location: { country: 'country c', city: 'city c' } }
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_FOLLOW_CLICK:
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: (item.followed ? false : true)
                        };
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}

export default usersPageReducer;