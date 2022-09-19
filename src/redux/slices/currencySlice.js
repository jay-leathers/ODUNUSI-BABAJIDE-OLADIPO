import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CURRENCIES } from "../../apollo/utils/queries";

export const loadCurrencies = createAsyncThunk(
   'currencies/load-currencies',
   async () => {
      try {
         const currencies = GET_CURRENCIES();
         return currencies;
      } catch (e) {
         console.log('Sorry, something went wrong!' + e.message);
      }
   }
)

const initialState = {
   currentCurrency: localStorage.getItem("currency") ? JSON.parse(localStorage.getItem("currency")) : '$',
   currencies: [],
   currencyToggleStatus: false,
   status: 'idle',
   error: null,
}

const currenciesSlice = createSlice({
   name: 'currencies',
   initialState,
   reducers: {
      changeCurrency: (state, action) => {
         state.currentCurrency = action.payload;
         localStorage.setItem("currency", JSON.stringify(state.currentCurrency));
      },
      changeCurrencyToggleStatus: (state, action) => {
         state.currencyToggleStatus = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(loadCurrencies.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(loadCurrencies.fulfilled, (state, action) => {
            state.status = 'success';
            state.currencies = action.payload;
         })
         .addCase(loadCurrencies.rejected, (state) => {
            state.status = 'rejected';
            state.error = 'Sorry, something went wrong...';
         })
   }
});

export const { changeCurrency, changeCurrencyToggleStatus } = currenciesSlice.actions;
export const currenciesReducer = currenciesSlice.reducer;