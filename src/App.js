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
      to: 'ALL'
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
    console.log(this.props.getExchangeRate(query))
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
    const amount =  parseInt(this.state.amount, 10)
   const result = this.state.exchangeRate && this.state.exchangeRate * amount
    return(
      <div className='title'>
        <h1>Currency Converter</h1>
      <div className='converterContainer'>
        <form onSubmit={this.convert}>
          <input onChange={this.inputChange} className='amount' placeholder='Enter amount'/>
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
        <button className='convert-btn'>Convert</button>
        <span className='result'>{result || 0}</span>
        </form>
      </div>
      </div>
    )
  
  }
}
const mapStateToProps = ({currency}) => ({currency})
export default connect(mapStateToProps, {fetchCurrencies, getExchangeRate})(App)
