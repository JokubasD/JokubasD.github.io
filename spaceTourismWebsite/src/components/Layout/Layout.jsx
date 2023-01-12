import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <img src={props.imageSource} alt={props.alt} className='background' />
      <div className='main'>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
export default Layout;
