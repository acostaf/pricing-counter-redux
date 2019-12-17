import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions';

class Pricing extends PureComponent {
  items = [
    { code: 'ASM20' },
    { code: 'H8X24' },
    { code: 'ASZ19' },
    { code: 'AUH20' },
    { code: 'MIH20' },
    { code: 'H8X23' },
    { code: 'MIZ20' },
    { code: 'MIM20' },
    { code: 'H8Z20' },
    { code: 'AUZ19' },
    { code: 'MIU20' },
    { code: 'MIZ19' },
    { code: 'AUM20' },
    { code: 'AUU20' },
    { code: 'H8X22' },
    { code: 'H8Z19' },
    { code: 'H8Z21' },
    { code: 'ASU20' },
    { code: 'H8Z22' },
    { code: 'H8Z23' }
  ];

  getIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getPrice = () => {
    return Number((Math.random() * (0.12 - 0.2999) + 0.2).toFixed(4));
  };

  processData = () => {
    const newData = [this.items[this.getIndex(this.items.length)]].map(({ code }) => ({ code, price: this.getPrice() }));
    this.props.addItem(newData[0]);
  };

  componentDidMount(prevProps) {
    setInterval(() => this.processData(), 250);
    setInterval(() => this.processData(), 850);
    setInterval(() => this.processData(), 550);
  }

  render() {
    return (
      <div style={{ marginLeft: 30 }}>
        <h1> items </h1>
        <table>
          <tbody>
            <tr>
              <th align="left">Ticker</th>
              <th>Price</th>
              {/* <th>old</th> */}
            </tr>
            {this.props.items
              .sort((a, b) => (a.code > b.code ? 1 : -1))
              .map(x => (
                <tr key={x.code}>
                  <td width="80px">{x.code}</td>
                  <td align="right">
                    <span style={{ color: !x.old || x.old === x.price ? 'black' : x.old > x.price ? 'green' : 'red' }}>{x.price}</span>
                  </td>
                  {/* <td>{x.old}</td> */}
                  <td>
                    <button style={{ color: 'blue' }}>Buy</button>
                  </td>
                  <td>
                    <button style={{ color: 'red' }}>Sell</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => ({ items: state.items }),
  dispatch => bindActionCreators({ addItem }, dispatch)
)(Pricing);
