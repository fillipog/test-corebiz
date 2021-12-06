import React from 'react';
import '../src/App.css';
import Header from './components/header'
import Banner from './components/banner-home'
/* import Shelf from './components/carousel' */
import Newsletter from './components/newsletter';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Banner />
      {/* <Shelf /> */}
      <Newsletter />
      <Footer />
    </div>
    )
  }
}

export default App;