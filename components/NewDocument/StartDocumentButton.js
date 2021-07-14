import Image from 'next/image';

const StartDocumentButton = () => {
  return (
    <div className=''>
      <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700'>
        <Image src='https://links.papareact.com/pju' layout='fill' />
      </div>
      <p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>Blank</p>
    </div>
  );
};

export default StartDocumentButton;
