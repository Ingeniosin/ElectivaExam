const Table = ({headers, data}) => {
    return (
        <table className="items-center bg-transparent w-full border-collapse text-xl">
            <thead>
            <tr>
                {
                    headers.map((header) => {
                        return (
                            <th key={header} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                {header}
                            </th>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
                {
                    data.map((data, index) => {
                        return (
                            <tr key={index}>
                                {
                                    headers.map((header) => {
                                        return (
                                            <td key={index + ' ' + header} className="border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                                                {data[header.toLowerCase()]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;
