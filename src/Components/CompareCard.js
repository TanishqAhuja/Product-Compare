import React from 'react';
import { Card, Button } from 'antd';

export default class CompareCard extends React.Component {

    state = {
        status: '',
    }


    render() {
        var tintClass = this.state.status === 'selected' ? 'permatint' : 'tint';
        var btnClass = this.state.status === 'selected' ? 'btn rm-btn' : 'btn';
        var btnText = this.state.status === 'selected' ? 'REMOVE' : 'COMPARE';
        return (
            <Card
                hoverable
                cover={
                    <div className='holder'>
                        <img alt={this.props.data.Product} src={this.props.data.src} width='100%' />
                        <div className={tintClass} >
                            <Button className={btnClass} size='large' onClick={() => {
                                this.props.handleClick(this.props.data);
                                this.setState({
                                    status: this.state.status === 'selected' ? '' : 'selected',
                                })
                            }}>{btnText}</Button>
                        </div>
                    </div>
                }
            >
                <div>
                    <div className='Details' style={{ fontSize: 20 }}>
                        <span>{this.props.data.Product}</span>
                        <span style={{ color: '#48cfad', fontWeight: 'bold' }}>{this.props.data.Price}</span>
                    </div>
                    <div className='Desc' style={{ fontSize: 17, color: '#b1b1b3' }}>
                        <p style={{ margin: 0 }}>{this.props.data.Description}</p>
                    </div>
                </div>
            </Card>
        );
    }

}