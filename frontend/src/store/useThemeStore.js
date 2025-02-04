import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "black",
  setTheme: (theme) => {
    localStorage.getItem("chat-theme");
    set({ theme });
  },
}));
