'use client'

import {useEffect, useState} from "react";
import {getCafes} from "@/api/cafe-api";
import Table from "@/app/components/table";

const CafeGrid = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getCafes().then(setData)
    }, []);

    if(!data) {
        return <h1>Cargando...</h1>
    }

    return (
        <Table headers={['Id', 'Nombre', 'Tipo', 'Region',]} data={data} />
    );
};

export default CafeGrid;
