import { ConjuntoDF } from "@/tipos/df";
import { create } from "zustand";

interface ConjuntoDFState {
  conjuntosDF: ConjuntoDF[];
  setConjuntoDF: (conjuntoDF: ConjuntoDF[]) => void;
}

const useConjuntoDFStore = create<ConjuntoDFState>((set) => ({
  conjuntosDF: [],
  setConjuntoDF: (conjuntosDF: ConjuntoDF[]) => set({ conjuntosDF }),
}));

export default useConjuntoDFStore;
