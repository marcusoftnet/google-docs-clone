import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

const StartDocumentHeader = () => {
  return (
    <div className='flex items-center justify-between py-6'>
      <h2 className='text-gray-700 text-lg'>Start a new document</h2>
      <Button
        color='gray'
        buttonType='outline'
        iconOnly={true}
        ripple='dark'
        className='border-0'
      >
        <Icon name='more_vert' size='3xl' />
      </Button>
    </div>
  );
};

export default StartDocumentHeader;
