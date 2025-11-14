import { Relacion } from "@/tipos/relacion";
import { create } from "zustand";

interface RelacionState {
  relaciones: Relacion[];
  setRelaciones: (relaciones: Relacion[]) => void;
}

const useRelacionStore = create<RelacionState>((set) => ({
  relaciones: [],
  setRelaciones: (relaciones: Relacion[]) => set({ relaciones }),
}));

export default useRelacionStore;
