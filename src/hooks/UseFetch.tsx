//hooks/UseFetch.tsx
import { useEffect, useState } from "react";


const UseFetch = (url: string) => {

    const [data, setData] = useState<DataList | undefined>(undefined);

    useEffect(() => {

        fetch(url, {
            headers: {
                // "Content-Type": "application/json",
                Accept: "application/json",
                "Content-Type": "text/plain",
            },
        })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [url])

    return [data]
}
export default UseFetch;