// The initial state
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // Remove after debug
    //token: "BQDK5LtXXuvt0lsQFPzadyDvvsDhQTOeK3RyHTcsnKPf8evcqiwSDemvZNXNZ0Tb7zq44xOjjKtdqjld6LdOkepbFVyZWWIBO56yEvr-W_ch3pcy7BsXT66kmBUSMTMPlHPcUPFaY11n1qWiIkthxzyh0Hg",
};

// state - how currently looks
// action - is like: set the user, set the items
const reducer = (state, action) => {
    console.log(action);

    // Listen to actions
    // EX: When you receive a action called "SET_USER"
    // it will return the new state
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,               // Keep what was in the state
                user: action.user,      // Update the user with the action taken
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
};

export default reducer;