import React from 'react';

function Table(props) {
    const {rows, columns} = props;
    return (
        <>
            <table className="table table-borderless">
                <thead className="tableHead">
                {columns && columns.map(({title}) => {
                    return (
                        <th className="tableHead--item" scope="col">{title}</th>
                    )
                })}
                </thead>
                <tbody>
                {rows && rows.map((row) => {
                    return (
                        <tr>
                            {row && row.map((data) => (<td>{data}</td>))}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
}

export default Table;
