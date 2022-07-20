import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Spinner from "../components/Spinner";
const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/clients/${id}`;
      const response = await fetch(url);
      const result = await response.json();

      setClient(result);
      setLoading(false);
    };
    getClient();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar un cliente</p>
      {loading ? (
        <Spinner />
      ) : Object.keys(client).length > 0 ? (
        <ClientForm client={client} />
      ) : (
        <p>No existe el cliente a editar</p>
      )}
    </>
  );
};

export default EditClient;
