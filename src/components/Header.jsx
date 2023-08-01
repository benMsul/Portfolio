import Logo from '../assets/logo.png';

const Header = () => {
  const redirectToLinkedIn = () => {
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/ruben-ribeiro-ramos/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return <header className="py-8">
  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
      <a href='#'>
        <img className='photo rounded-full' src={Logo} alt='' />
      </a>
      <button onClick={redirectToLinkedIn} className='btn btn-sm text-black font-bold'>Travaillez avec moi</button>
    </div>
  </div>
  </header>
};

export default Header;