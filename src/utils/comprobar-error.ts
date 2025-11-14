export function comporbarError(
  data: { nombre: string; atributos: string[] },
  setErrror: React.Dispatch<React.SetStateAction<string>>
) {
  if (data.nombre === "") {
    setErrror("El nombre de la relación no puede estar vacío");
    return true;
  }
  if (data.atributos.length === 0) {
    setErrror("Debe agregar al menos un atributo");
    return true;
  }
  setErrror("");
  return false;
}
