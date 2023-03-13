import { FaMusic } from 'react-icons/fa';

export const Logo = () => {
  return (
    <div className='flex items-center gap-2 lg:gap-4 text-white absolute top-4 left-4 lg:top-5 lg:left-5'>
      <FaMusic size={18} className='lg:text-[25px]' />
      <h2 className='lg:text-2xl text-lg font-bold'>ReactMusic</h2>
    </div>
  );
};
