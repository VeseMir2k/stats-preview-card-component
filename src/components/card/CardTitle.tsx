interface CardTitleProps {
  text: string;
}

export const CardTitle = ({ text }: CardTitleProps) => (
  <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>
);
