import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playerAdd: {
            reducer(state, action) {
                console.log(2,action.payload)
                state.push(action.payload);
            },
            prepare(id, player) {
                return {
                    payload: {
                        id: 1,
                        player
                    }
                }
            }
        }
    }
})

export const { playerAdd } = PlayerSlice.actions;
export const selectAllPlayers = (state) => state.player;
export default PlayerSlice.reducer;
