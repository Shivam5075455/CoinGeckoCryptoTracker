import {create} from 'zustand';

const store = create((set) => ({
    currency: "USD",
    setCurrency: (newCurrency) => set((state) => {
        return {
            ...state,
            currency: newCurrency
        }
    })
}));

export default store;