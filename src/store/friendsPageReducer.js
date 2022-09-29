let initialState = {
    friendsData: [
        { id: '1', name: 'Pele', age: "23" },
        { id: '2', name: 'Neuer', age: "24" },
        { id: '3', name: 'Linkoln', age: "202" },
        { id: '4', name: 'Ronaldo', age: "33" },
        { id: '5', name: 'Spider-man', age: "35" },
        { id: '6', name: 'Maximus', age: "122" },
        { id: '7', name: 'Thanos', age: "50" },
        { id: '8', name: 'Humanoid', age: "000" },
        { id: '9', name: 'Alien', age: "1000" }
    ]
}

const friendsPageReducer = (state = initialState, action) => {
    return state;
}

export default friendsPageReducer;