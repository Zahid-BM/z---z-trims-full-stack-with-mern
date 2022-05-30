import axios from "axios";
import { useEffect, useState } from "react"

const usePurchaseItem = (id) => {
    const [purchaseItem, setPurchaseItem] = useState({});
    useEffect(() => {
        const getItemById = async () => {
            const url = `http://localhost:5000/trims/${id}`
            const { data } = await axios.get(url);
            setPurchaseItem(data);
        }
        getItemById();
    }, [id])
    return [purchaseItem, setPurchaseItem];
};
export default usePurchaseItem;