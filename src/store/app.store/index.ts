import { create } from "zustand";
import { IAppStore } from "./interface";

const useAppStore = create<IAppStore>((set) => ({
  isProtected: false,
  setIsProtected: (isProtected: boolean) => set({ isProtected }),
}));

export default useAppStore;
