import { create } from "zustand";

interface DateFunctionStore {
  selectedDateFunction: string;
  setSelectedDateFunction: (fn: string) => void;
}

const useDateFunctionsStore = create<DateFunctionStore>((set) => ({
  selectedDateFunction: "Current Date",
  setSelectedDateFunction: (fn: string) => set({ selectedDateFunction: fn }),
}));

export default useDateFunctionsStore;
