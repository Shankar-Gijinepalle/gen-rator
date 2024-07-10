import React, { useEffect, useState } from 'react';

function Req({ data, tableName }) {
    
    function snakeToPascal(snakeStr) {
        return snakeStr.replace(/(^\w|_\w)/g, function(match) {
            return match.replace('_', '').toUpperCase();
        });
    }

    return (
        <>
            <p> {`class ${snakeToPascal(tableName)}Req {`}</p>
            {
                data.map(x => <>
                    <br />{x.type} get{snakeToPascal(x.col)}();
                </>)
            }
            <p> <br />{`}`}</p>
        </>
    );
}


export default Req;