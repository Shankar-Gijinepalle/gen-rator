import React, { useEffect, useState } from 'react';

function SaveEntity({ data, tableName }) {
    
    function snakeToPascal(snakeStr) {
        return snakeStr.replace(/(^\w|_\w)/g, function(match) {
            return match.replace('_', '').toUpperCase();
        });
    }
    function snakeToCamel(snakeStr) {
        return snakeStr.replace(/(_\w)/g, function (match) {
            return match[1].toUpperCase();
        });
    }

    const reqVar = `${snakeToCamel(tableName)}Req`;
    const dataVar = `${snakeToCamel(tableName)}`;
    const reqClass = `${snakeToPascal(tableName)}Req`;
    const dataClass = `${snakeToPascal(tableName)}`;

    return (
        <>
            <p> {`public ${dataClass} save${dataClass}(${reqClass} ${reqVar}) {`}</p>
            {`${dataClass} ${dataVar} = new ${dataClass}();`}<br/>
            {
                data.map(x => <>
                    <br />
                    {`${dataVar}.set${snakeToPascal(x.col)}(${reqClass}.get${snakeToPascal(x.col)}())`};

                </>)
            }
            <p> <br />{`}`}</p>
        </>
    );
}


export default SaveEntity;