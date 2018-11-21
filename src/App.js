import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { fetchCurrencies, getExchangeRate } from './actions/curencyApiActionCreators'
// import SelectCurrencyFrom from './components/SelectCurrencyFrom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {},
      amount: 0,
      from: 'ALL',
      to: 'ALL',
      exchangeRate: null,
      result: 0
    }

    this.convert = this.convert.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.curOneChange = this.curOneChange.bind(this)
    this.curtwoChange = this.curtwoChange.bind(this)
  }
  
  convert(e) {
    e.preventDefault()
    const query = `${this.state.from}_${this.state.to}`
    this.props.getExchangeRate(query)
    this.setState({ result: this.state.amount })
  }

  curtwoChange(e) {
    e.preventDefault()
    this.setState({to: e.target.value})
  }
  curOneChange(e) {
    e.preventDefault()
    this.setState({from: e.target.value})
  }
  inputChange(e) {
    e.preventDefault()
    this.setState({amount: e.target.value})
  }

  componentWillMount() { this.props.fetchCurrencies() }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currencies: nextProps.currency.currencies,
      exchangeRate: nextProps.currency.exchangeRate
    })
  }

  render() {
    return(
      <div className='curConvert'>
        <div className='header'>
          <h1>Currency Converter</h1>
        </div>
        <div className='exchange-rte'>
          <p className='rate'>Exchange Rate: {this.state.exchangeRate}</p>
        </div>
          <form onSubmit={this.convert}>
              <input onChange={this.inputChange} className='amount' type='number' placeholder='Enter amount'/>
              <select className='currencyFrom' onChange={this.curOneChange}>
                {Object.keys(this.state.currencies).map((currency)=> {
                  const currencyList = this.state.currencies[currency]
                  return <option key={currencyList.id} value={currencyList.id}>{currencyList.id}</option>
                })}
              </select>
              <span className='to'> to </span>
              <select className='currencyTo' onChange={this.curtwoChange}>
                {Object.keys(this.state.currencies).map((currency)=> {
                  const currencyList = this.state.currencies[currency]
                  return <option key={currencyList.id} value={currencyList.id}>{currencyList.id}</option>
                })}
              </select>
            <button className='convert-btn' type='submit'>Convert</button>
            <span className='result'>{this.state.result * this.state.exchangeRate}</span>
          </form>
      </div>
    )
  
  }
}
const mapStateToProps = ({currency}) => ({currency})
export default connect(mapStateToProps, {fetchCurrencies, getExchangeRate})(App)



