import { useEffect, useState } from "react";

async function useCurrencyConverter() {
    const [data, setData] = useState({});

    useEffect(() => {
        featch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyConverter;