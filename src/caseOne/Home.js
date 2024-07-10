import React, { useState } from 'react';
import Entity from './Entity';
import Req from './Req';
import SaveEntity from './SaveEntity';

function Home() {

    function snakeToCamel(snakeStr) {
        return snakeStr.replace(/(_\w)/g, function (match) {
            return match[1].toUpperCase();
        });
    }

    const types = [
        { value: "String", label: "String" },
        { value: "Boolean", label: "Boolean" },
        { value: "Long", label: "Long" },
        { value: "Integer", label: "Integer" },
    ];

    const [data, setData] = useState([
        { col: "", var: "", type: "Object" }
    ]);

    const addCol = () => {
        setData([
            ...data,
            { col: "", var: "", type: "Object" }
        ]);
    }

    const handleColChange = (index, value) => {
        const newData = [...data];
        newData[index].col = value;
        newData[index].var = snakeToCamel(value);
        setData(newData);
    }

    const [tableName, setTableName] = useState("");

    return (
        <>
            <button className='btn btn-primary' onClick={addCol}> Add </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Column</th>
                        <th scope="col">Variable</th>
                        <th scope="col">Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>Table Name</td>
                        <td colSpan={2}>
                            <input
                                type="text"
                                className="form-control"
                                value={tableName}
                                onChange={(e) => setTableName(e.target.value)}
                            /> </td>
                    </tr>
                    {
                        data.map((row, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.col}
                                        onChange={(e) => handleColChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={row.var}
                                        readOnly
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={row.type}
                                        onChange={(e) => {
                                            const newData = [...data];
                                            newData[index].type = e.target.value;
                                            setData(newData);
                                        }}
                                    >
                                        <option value="Object">Object</option>
                                        {types.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Entity data={data} tableName={tableName} />
            <Req data={data} tableName={tableName} />
            <SaveEntity data={data} tableName={tableName} />
        </>
    );
}

export default Home;
