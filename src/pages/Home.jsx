import { useEffect, useState } from "react";
import Client from "../components/Client";

const Home = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/clients`;
      const response = await fetch(url);
      const result = await response.json();
      setClients(result);
    };

    getClients();
  }, []);

  const handlerDelete = async (id) => {
    const result = confirm("¿Deseas eliminar este cliente?");
    if (result) {
      const url = `${import.meta.env.VITE_BASE_URL}/clients/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      await response.json();
      const filterClients = clients.filter((client) => client.id !== id);
      setClients(filterClients);
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              key={client.id}
              client={client}
              handlerDelete={handlerDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
