import logo from '../imagenes/logo.png';


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='container-fluid'>
        <span className='navbar-brand' href='#'>
          <img src={logo} alt='' width='110' height='50' className='d-inline-block align-text-top' />
        </span>
        <h3 className='mx-auto'>Predicción Meteorológica</h3>
      </div>
    </div>
  );
};



export default NavBar;


