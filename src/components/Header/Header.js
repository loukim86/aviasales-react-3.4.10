import logo from '../../assets/logo.svg';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={logo}>
      <img src={logo} className={style.logo} alt="plane logo" />
    </div>
  );
}
export default Header;