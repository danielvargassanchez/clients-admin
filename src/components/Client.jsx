import { useNavigate } from "react-router-dom";

const Client = ({ client, handlerDelete }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b hover:bg-gray-50">
      <td>{client.name}</td>
      <td>
        <p>
          <span className="text-gray-800 uppercase font-bold">Teléfono:</span>{" "}
          {client.phone}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {client.email}
        </p>
      </td>
      <td>{client.company}</td>
      <td>
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase 
        font-bold text-xs mt-3"
          onClick={() => navigate(`/clients/${client.id}`)}
        >
          Ver
        </button>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase 
        font-bold text-xs mt-3"
          onClick={() => navigate(`/clients/edit/${client.id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase 
        font-bold text-xs mt-3 mb-3"
          onClick={() => handlerDelete(client.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
