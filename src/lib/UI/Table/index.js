import React from 'react';

function Table(props) {
    const { rows, columns } = props;
    return (
        <>
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead className="tableHead">
                        <tr>
                            {columns &&
                                columns.map(({ title, i }) => {
                                    return (
                                        <th className="tableHead--item" scope="col" key={title + ':' + i}>
                                            {title}
                                        </th>
                                    );
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows &&
                            rows.map((row, i) => {
                                return (
                                    <tr key={'row:' + i}>
                                        {row && row.map((data, i) => <td key={data + ':' + i}>{data}</td>)}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
