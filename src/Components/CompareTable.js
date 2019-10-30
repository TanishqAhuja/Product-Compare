import React from 'react';
import { Table } from 'antd';

export default function CompareTable(props) {

    const data = props.arr;

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'Product',
            key: 'Product',
            render: text => <div className='dataEntry'><p className='data'>{text}</p></div>
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
            render: text => <div className='dataEntry'><p className='data'>{text}</p></div>
        },
        {
            title: 'Condition',
            dataIndex: 'Condition',
            key: 'Condition',
            render: text => <div className='dataEntry'><p className='data'>{text}</p></div>
        },
    ];

    return (
        <Table columns={columns} dataSource={data} pagination={false} />
    );
}