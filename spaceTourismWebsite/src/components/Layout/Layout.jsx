import MainNavigation from './MainNavigation';

function Layout(props) {
  const sourceMobile = `${props.imageSource}-mobile.jpg`;
  const sourceTablet = `${props.imageSource}-tablet.jpg`;
  const sourceDesktop = `${props.imageSource}-desktop.jpg`;
  let fullClass = 'background';
  if (props.imageSource === '/technology/background-technology') {
    fullClass = 'background customBackground';
  }
  return (
    <div>
      <picture>
        <source media='(min-width: 1440px)' srcSet={sourceDesktop} />
        <source media='(min-width: 768px)' srcSet={sourceTablet} />
        <img src={sourceMobile} alt={props.alt} className={fullClass} />
      </picture>
      <div className='main'>
        <MainNavigation currentTab={props.currentTab} />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
export default Layout;
