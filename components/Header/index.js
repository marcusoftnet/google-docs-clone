import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import AvatarButton from './AvatarButton';
import MenuButton from './MenuButton';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
      <Button
        color='gray'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='hidden md:inline-flex h-20 w-20 border-0'
      >
        <Icon name='menu' size='3xl' />
      </Button>

      <Icon name='description' size='5xl' color='blue' />
      <h1 className='hidden md:inline-flex ml-2 text-gray-700 text-2xl'>
        Docs
      </h1>

      <Searchbar />

      <MenuButton />

      <AvatarButton />
    </header>
  );
};

export default Header;
