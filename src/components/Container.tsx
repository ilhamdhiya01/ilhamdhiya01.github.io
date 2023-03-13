export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='min-h-screen w-full flex flex-col'>{children}</div>;
};
