import create from "zustand";

export const useDataStore = create((set)=>({
    DataInitial: null,
    setDataInitial: (DataInitial)=> set({DataInitial})
}))