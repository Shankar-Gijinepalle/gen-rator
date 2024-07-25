import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import RTableCustom from '../Components/utils/RTableCustom';
import ReactTable from "react-table";

function Test() {

    const data = [{
        name: 'Ayaan',
        age: 26
    }, {
        name: 'Ahana',
        age: 22
    }, {
        name: 'Peter',
        age: 40
    }, {
        name: 'Virat',
        age: 30
    }, {
        name: 'Rohit',
        age: 32
    }, {
        name: 'Dhoni',
        age: 37
    }]
    const columns = [{
        Header: 'Name',
        accessor: 'name'
    }, {
        Header: 'Age',
        accessor: 'age'
    }]
    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <h1>Hello</h1>
                    
                </Col>
            </Row>
        </>
    );
}


export default Test;


// return ({
//     Header: map[x].name,
//     accessor: row => row[x],
// })
// return ({
//     Header: map[x].name,
//     accessor: row => {return { value: row[x], flag: row.flag}},
//     Cell: ({ cell: { value, flag } }) => <> {flag ? "True" : "False" } <b> {value} </b> </>,
// })
