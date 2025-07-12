import { useCallback, useState } from 'react';

const useGetCFLATSum = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | unknown>(null);

    const fetchCFLATSum = useCallback(async (inputSum: number) => {
        setLoading(true);
        setError(null);
        try {
            if (!inputSum) {
                return;
            }
            const tonPrice = await fetch(`https://api-webapp.cryptoflats.io/users/price?ticker=TON`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer user={"id":0,"is_premium":false}&viaBot=true&secret=${process.env.REACT_APP_SECRET_TOKEN}`
                },
                credentials: 'omit'
            })
            const tonPriceTotal = await tonPrice.json()
            const cflatPrice = await fetch(`https://api-webapp.cryptoflats.io/users/price?ticker=CFLAT`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer user={"id":0,"is_premium":false}&viaBot=true&secret=${process.env.REACT_APP_SECRET_TOKEN}`
                },
                credentials: 'omit'
            })
            const cflatPriceTotal = await cflatPrice.json()

            const cflatAmount = (tonPriceTotal / cflatPriceTotal) * inputSum;

            return cflatAmount
            
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchCFLATSum, loading, error };
};

export default useGetCFLATSum;

