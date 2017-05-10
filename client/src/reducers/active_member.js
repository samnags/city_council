export default function(state = null, action) {
    switch (action.type) {
        case 'MEMBER_SELECTED': 
            console.log(action)           
            return action.payload
        default:
            return state
    }
}