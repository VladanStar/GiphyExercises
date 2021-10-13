import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GifList from './components/Main/GifList/GifList';
import Search from './components/Main/Search/Search';

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    }
  }

  onSearch = (newValue) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=HOZl59F3Vw0FJs7IpKPlOc0vvfUPU5eC&q=${newValue}`)
      .then(res => res.json())
      .then(info => {
        this.setState({ gifs: info.data })
      })
  }
  render(){
  return (
    <div className="App">
     <Header/>
     <Search onSearch={this.onSearch} />
     <GifList  gifs= {this.state.gifs} />
     <Footer/>
    </div>
  );
}
}

export default App;
