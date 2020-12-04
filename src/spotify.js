// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// Redirect to Spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";


// Replace with your app's client ID, redirect URI and desired scopes

// After login - redirect to home page once logged in
const redirectUri = "http://localhost:3000/";
const clientId = "5d42233ea0dc473abcf239805434de6e";

// Scopes allow to get the permissions to do things like: play a song
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Get the acces token from url (response)
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};


export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// %20 - ASCII for space
// token - string that represents your auth
// show_dialog=true - shows the full prompt