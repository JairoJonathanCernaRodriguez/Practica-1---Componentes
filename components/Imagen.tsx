type Props = {
  src: string;
  alt: string;
  ancho: number;
  alto: number;
};

export default function Imagen({ src, alt, ancho, alto }: Props) {
  return <img src={src} alt={alt} width={ancho} height={alto} />;
}
