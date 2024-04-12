import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo() {
    let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Ebn09TkyvhTvTY4c9XZsmwoYp5myB0VoF4GAY4Lx`
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(url).then(res => res.json()).then(result => setData(result.data))
        // axios.request(url).then(res => {
        //     return console.log((res.data.data).currency)
        // })
    }, [])
    return data;
}



export default useCurrencyInfo