import {create} from 'zustand';

const perPageStore = create((set) => ({
    perPage: 5, //default value
    setPerPage: (newPerPage) => set((state) => {
        return {
            ...state,
            perPage: newPerPage
        }
    })
}));

export default perPageStore;
