import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

const MenuButton = () => {
  return (
    <Button
      color='gray'
      buttonType='outline'
      rounded={true}
      iconOnly={true}
      ripple='dark'
      className='ml-5 md:ml-20 h-20 w-20 border-0'
    >
      <Icon name='apps' size='3xl' color='gray' />
    </Button>
  );
};

export default MenuButton;
