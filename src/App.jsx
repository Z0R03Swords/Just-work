import FullScreenHamburgerMenu from './components/Hamburger1/Hamburger1';
import HamburgerMenu from './components/Hamburger/Hamburger';
import HorizontalMenu from './components/Horzontal-Menu/Horizontal';
import GridView from './components/GridAndTile/GridAndTile';



function App() {

  return (
    <div className="App">
      <header>
        <FullScreenHamburgerMenu />
        <HamburgerMenu />
        <HorizontalMenu />
      </header>
      <main>
        <GridView />
      </main>
    </div>
  );
}

export default App;