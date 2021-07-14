import Icon from '@material-tailwind/react/Icon';
const MyDocumentsHeader = () => {
  return (
    <div className='max-w-3xl mx-auto py-8 text-sm text-gray-700'>
      <div className='flex items-center justify-between pb-5'>
        <h2 className='font-medium flex-grow'>My documents</h2>
        <p className='mr-12'>Date created</p>
        <Icon name='folder' size='3xl' color='gray' />
      </div>
    </div>
  );
};

export default MyDocumentsHeader;
