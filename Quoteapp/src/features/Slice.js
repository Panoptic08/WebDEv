import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    quotesarray: []
}

export const  quote = createSlice(
    {
        name: "quotes",
        initialState,
        reducers: {
            getquote: (state, action)=>{
                const Quote = fetch("https://api.quotable.io/quotes/random?tags=science%7Cinventions");
                const result = Quote.json();
                state.quotesarray.push(Quote);

                return result.content;
            }
        }
    }
)


export const {getquote} = quote.actions;
export default quote.reducer