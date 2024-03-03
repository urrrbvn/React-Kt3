

function Header({scrollHandler}) {

  const scrollToFooter = () => {
    scrollHandler()
  };

    return (
      <div className='Header'>
        <button onClick={scrollToFooter} >Scroll to footer</button>
      </div>
    );
  }
  
  export default Header;
  