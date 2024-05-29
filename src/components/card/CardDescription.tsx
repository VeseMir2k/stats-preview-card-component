interface CardDescriptionProps {
  children: string;
}

export const CardDescription = ({ children }: CardDescriptionProps) => (
  <p className='mb-[40px] mt-[16px] text-center text-[15px] leading-[25px] text-white opacity-75'>
    {children}
  </p>
);
