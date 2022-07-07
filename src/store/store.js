import React from "react";
import create from 'zustand'

const useStore = create((set) => ({
    number : 0,
    count : 0,
    setNumber: () => set ((state) => ({number: state.number+1}))
}))
export default useStore;