import React, {Component} from 'react';

import Header from './components/Header/Header'
import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})

    // console.log(data);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    console.log(fetchedData);

    //set to state
    this.setState({ data: fetchedData, country: country})

  }

  render() { 
    const {data, country} = this.state;

    return ( 
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange = {this.handleCountryChange} />
        <Charts data={data} country={country} />
    </div>
     );
  }
}
 
export default App;