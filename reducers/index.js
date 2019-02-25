const reducer = (state = { image: ' ', PlannerInfo:[], UserInsuranceInfo:[], ClientInfo:[], hyperServer : "192.168.56.1", }, action) => {

    switch (action.type) {
        case 'PROFILE_IMAGE':
            return {
                ...state,
                image: action.image
            }
        case "ADD_PlannerInfo":
            return {
                ...state,
                PlannerInfo: action.PlannerInfo.map(item => item.Record)
            };
        case "ADD_UserInsuranceInfo":
            return {
              ...state,
              UserInsuranceInfo: state.UserInsuranceInfo.concat(action.UserInsuranceInfo.map(item => item.Record))
            };
        case "ADD_ClientInfo":
            return {
                ...state,
                ClientInfo: action.ClientInfo.map(item => item.Record)
            };
    }
    return state;
};

export default reducer;
