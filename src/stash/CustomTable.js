import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useTable } from 'react-table';
import { EXECEL_ICON } from '../commonFunctions';
import XLSX from "xlsx";

const CustomTable = ({ columns, data, fileName, sheetName, skipReset }) => {

    function getExportFileBlob({ columns, data, fileType }) {


        if (fileType === "xlsx") {
            // XLSX example

            const header = columns.filter((c) => c.Header != 'Action').map((c) => c.exportValue);
            const compatibleData = data.map((row) => {
                const obj = {};
                header.forEach((col, index) => {
                    obj[col] = row[index];
                });
                return obj;
            });

            let wb = XLSX.utils.book_new();
            let ws1 = XLSX.utils.json_to_sheet(compatibleData, { header });
            XLSX.utils.book_append_sheet(wb, ws1, sheetName);
            XLSX.writeFile(wb, `${fileName || 'Data'}.xlsx`);
        }
        return false;
    }


    const myData = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        [data]
    );

    const myColumns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1',
                style: { width: '200px' }, // Custom width for column 1
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
                style: { width: '100px' }, // Custom width for column 2
            },
        ],
        [columns]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        exportData,
        state: { globalFilter },
        // } = useTable({ columns: myColumns, data : myData });
    } = useTable({ columns: columns, data: data, autoResetGlobalFilter: !skipReset });

    return (
        <>
            <Row className="m-2">
                <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                    <input
                        type="text"
                        className="w-100 customSerachbar"
                        placeholder="Search your record by keyword......"
                        value={globalFilter || ""}
                        onChange={e => setGlobalFilter(e.target.value)}
                        style={{ backgroundColor: 'white', borderColor: 'lightblue', border: '1px solid lightblue' }}
                    />
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}>
                    <Button style={{ border: '1px solid #dee2e6', background: '#198754', color: '#fff', float: 'right' }} class="btn btn export mr-1"
                        onClick={() => {
                            exportData("xlsx", true);
                        }}
                    >
                        {'Export'} <EXECEL_ICON />
                    </Button>{' '}
                </Col>
            </Row>

            <div style={{ overflow: 'auto', maxHeight: '500px', position: "relative", transform: "translate(0px, 0px)" }}>
                <table {...getTableProps()} className={"table table-striped table-bordered table-hover"}>
                    <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{ ...column.style, }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()} style={cell.column.style}>
                                                <div style={cell.column.style}>
                                                    <div style={{ minWidth: "10rem", textAlign: "center" }}>
                                                        {cell.render('Cell')}
                                                    </div>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CustomTable;
