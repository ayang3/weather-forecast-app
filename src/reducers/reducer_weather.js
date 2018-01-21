import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    //console.log('Action received', action);
    switch (action.type) {
    case FETCH_WEATHER:
        // Avoid to mutate state in Redux here as well as for React,
        // return a new piece of state instead.
        // return state.push(action.payload.data); // NO!
        // return state.concat([action.payload.data]); // YES.
        // This (ES6 syntax) is nearly the same as the one line above,
        // ...state flatten out the array and added to the new array.
        return [ action.payload.data, ...state ]; // [city, city, city], NOT [city, [city, city]].
    }

    return state;
}