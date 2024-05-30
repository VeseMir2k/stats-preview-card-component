interface CardTitleProps {
  text: string;
}

export const CardTitle = ({ text }: CardTitleProps) => (
  <h1
    className='text-[28px] font-bold leading-[32px] xl:text-[36px] xl:leading-[44px]'
    dangerouslySetInnerHTML={{ __html: text }}
  ></h1>
);
