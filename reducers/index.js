//state 뒤에 있는 부분이 초기값 집어넣는 부분. 
const reducer = (state = { image: '' }, action) => {
    //console.warn("Changes are not persisted to disk");
    //setState는 바뀐 값들만 덮어쓰는 거라면 reducer는 전체 값이 덮어씌워짐!
    switch (action.type) {
        case 'PROFILE_IMAGE':
            return {
                image: action.image
            }
        case "ADD_PlannerInfo":
            return {
                ...state,
                PlannerInfo: action.PlannerInfo.map(item => item.Record)
            };
    }
    return state;
};

export default reducer;
