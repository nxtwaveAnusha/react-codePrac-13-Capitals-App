import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeOption: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  getCountry = activeOption => {
    const activeCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeOption,
    )
    return activeCountry.country
  }

  render() {
    const {activeOption} = this.state
    const country = this.getCountry(activeOption)
    return (
      <div className="app-container">
        <div className="country-container">
          <h1 className="headind">Countries And Capitals</h1>
          <div className="selected-capital-container">
            <select
              className="selected-capital"
              value={activeOption}
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(eachCountryDetails => (
                <option
                  key={eachCountryDetails.id}
                  value={eachCountryDetails.id}
                >
                  {eachCountryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
