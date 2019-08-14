export default {
    namespage: "main",
    state: { showTrade: false, showStory: false},
    reducers: {
        trade(state, action) {
            return { ...state, showTrade: action.playload }
        },
        story(state, action){
            return {...state, showStory: action.playload}
        }
    }

}