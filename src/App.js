import React from 'react';
import { Col, Row } from 'antd';
import products from './data.json';
import CompareCard from './Components/CompareCard';
import CompareTable from './Components/CompareTable';


class App extends React.Component {

  state = {
    arr: [],
  };


  handleClick = (product) => {
    this.state.arr.indexOf(product) > -1
      ? this.setState({ arr: [...this.state.arr.filter(prod => prod !== product)] })
      : this.setState({
        arr: [...this.state.arr, product]
      })
  }

  render() {
    return (
      <Row type='flex' justify='center'>
        <Col id='container' type='flex' span={21}>
          <Row style={{ height: '20vh', paddingTop: 43, fontSize: 32 }}>Compare Products</Row>
          <div>
            <Row type="flex" gutter='50'>
              {products.map((product) => (<Col span='6' key={product.key}><CompareCard data={product} key={product.key}
                handleClick={this.handleClick} /></Col>))}
            </Row>
          </div>
          {
            this.state.arr.length > 1
              ? <div style={{ marginTop: 50 }}>
                <CompareTable arr={this.state.arr} />
              </div>
              : <></>
          }
        </Col>
      </Row>
    );
  }
}

export default App;
