import axios from 'axios';
import { toast } from 'react-toastify';

const RestHelper = {
    authenticated: async (method, url, payload) => {
        try {
            const response = await axios({
                method: method,
                url: url,
                data: payload,
                headers: {
                    'Authorization': ''
                },
            });
            return response;

        } catch (err) {
            if (err?.response?.status === 401) {
                console.error(method.toString().toUpperCase(), " ", url, " ERRORE: ", err.message)
            } else if (err?.response?.status === 500) {
                toast.error('Server non disponibile.');
                console.error(method.toString().toUpperCase(), " ", url, " ERRORE: ", err.message)
            } else if (err?.response?.status === 404) {
                toast.error('Risorsa non trovata.');
                console.error(method.toString().toUpperCase(), " ", url, " ERRORE: ", err.message)
            } else if (err?.response?.status === 400) {
                toast.error(err?.response?.data?.message);
            } else if (err?.response?.status === 403) {
                toast.error(err?.response?.data?.message);
            } else {
                toast.error('Qualcosa è andato storto!');
                console.error(method.toString().toUpperCase(), " ", url, " ERRORE: ", err.message)
            }
            return {
                'Errore': err.message,
                'status': err?.response?.status
            }
        } finally {
            console.log("Request", method.toString().toUpperCase(), " ", url)
        }
    },
};

export default RestHelper;
