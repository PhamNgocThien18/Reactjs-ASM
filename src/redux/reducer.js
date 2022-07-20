import { DISHES } from '../shared/dishes';
import { GAMES } from '../shared/game';

export const initialState = {
    dishes: DISHES,
    games:GAMES
};

export const Reducer = (state = initialState, action) => {
    return state;
};