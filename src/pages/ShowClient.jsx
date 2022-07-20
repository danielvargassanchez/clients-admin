import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
const ShowClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/clients/${id}`;;
      const response = await fetch(url);
      const result = await response.json();

      setClient(result);
      setLoading(false);
    };
    getClient();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p> No hay resultados </p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {client.name}
      </h1>
      <p className="mt-3">Información del cliente</p>

      <p className="text-2xl mt-2 text-gray-600">
        <span className="text-gray-800 uppercase font-bold ">Cliente:</span>{" "}
        {client.name}
      </p>
      <p className="text-2xl mt-2 text-gray-600">
        <span className="text-gray-800 uppercase font-bold ">Email:</span>{" "}
        {client.email}
      </p>
      <p className="text-2xl mt-2 text-gray-600">
        <span className="text-gray-800 uppercase font-bold ">Teléfono:</span>{" "}
        {client.phone}
      </p>
      <p className="text-2xl mt-2 text-gray-600">
        <span className="text-gray-800 uppercase font-bold ">Compañia:</span>{" "}
        {client.company}
      </p>
      {client.notes && (
        <p className="text-2xl mt-2 text-gray-600">
          <span className="text-gray-800 uppercase font-bold ">Notas:</span>{" "}
          {client.notes}
        </p>
      )}
    </div>
  );
};

export default ShowClient;
