interface CardTitleProps {
  text: string;
}

export const CardTitle = ({ text }: CardTitleProps) => (
  <h1
    className='text-center text-[28px] font-bold leading-[32px] text-white'
    dangerouslySetInnerHTML={{ __html: text }}
  ></h1>
);
