import { create } from "zustand";
import { IAppStore } from "./interface";

const useAppStore = create<IAppStore>((set) => ({
  isProtected: true,
  setIsProtected: (isProtected: boolean) => set({ isProtected }),
}));

export default useAppStore;
