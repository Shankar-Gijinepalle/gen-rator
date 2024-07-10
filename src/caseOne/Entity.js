import React, { useEffect, useState } from 'react';

function Entity({ data, tableName }) {

    function snakeToPascal(snakeStr) {
        return snakeStr.replace(/(^\w|_\w)/g, function(match) {
            return match.replace('_', '').toUpperCase();
        });
    }

    return (
        <>
            <p> {`class ${snakeToPascal(tableName)} {`}</p>
            {
                data.map(x => <>
                    <br />@Column("{x.col}")
                    <br />{x.type} {x.var};<br />
                </>)
            }
            <p> <br />{`}`}</p>
        </>
    );
}


export default Entity;