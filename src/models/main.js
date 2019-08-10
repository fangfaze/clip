export default {
    namespage: "main",
    state: { showTrade: false, },
    reducers: {
        trade(state, action) {
            console.log(state)
            return { ...state, showTrade: action.playload }
        },
    }

}