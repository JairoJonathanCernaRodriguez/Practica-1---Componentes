type Props = {
  texto: string;
  color: string;
  tamaño: string;
  fuente: string;
};

export default function Titulo({ texto, color, tamaño, fuente }: Props) {
  return (
    <h1 style={{ color, fontSize: tamaño, fontFamily: fuente }}>
      {texto}
    </h1>
  );
}
