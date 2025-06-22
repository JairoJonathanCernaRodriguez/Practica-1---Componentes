type Props = {
  texto: string;
  color: string;
  tamaño: string;
  fuente: string;
};

export default function Parrafo({ texto, color, tamaño, fuente }: Props) {
  return (
    <p style={{ color, fontSize: tamaño, fontFamily: fuente }}>
      {texto}
    </p>
  );
}
