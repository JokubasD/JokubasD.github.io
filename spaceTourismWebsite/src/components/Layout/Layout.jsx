import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className='background'>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;
