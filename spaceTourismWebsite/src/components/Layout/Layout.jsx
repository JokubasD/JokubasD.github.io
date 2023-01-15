import MainNavigation from './MainNavigation';

function Layout(props) {
  const sourceMobile = `${props.imageSource}-mobile.jpg`;
  const sourceTablet = `${props.imageSource}-tablet.jpg`;
  const sourceDesktop = `${props.imageSource}-desktop.jpg`;
  return (
    <div>
      <picture>
        <source media='(min-width: 1440px)' srcSet={sourceDesktop} />
        <source media='(min-width: 768px)' srcSet={sourceTablet} />
        <img src={sourceMobile} alt={props.alt} className='background' />
      </picture>
      <div className='main'>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
export default Layout;
