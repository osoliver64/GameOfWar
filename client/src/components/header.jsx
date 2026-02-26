import '../App.css'
import titleIcon from '../assets/helmet.png'

function Header() {
    return (
      <>
      <header id='header'>
        <div className='logo'>
          <img src={titleIcon} className='titleIcon' />
          <h1 style={{fontFamily: 'Black Ops One'}}>
            War
          </h1>
        </div>
      </header>
      </>
    )
}

export default Header