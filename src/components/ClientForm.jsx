import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const ClientForm = ({ client }) => {
  const navigate = useNavigate();
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo requerido")
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres"),
    company: Yup.string()
      .required("Campo requerido")
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres"),
    email: Yup.string().required("Campo requerido").email("Correo invalido"),
    phone: Yup.number()
      .integer("Número inválido")
      .positive("Número inválido")
      .typeError("Número inválido")
      .min(1111111111, "Mínimo 10 números")
      .max(9999999999, "Máximo 12 números"),
    notes: "",
  });

  const handleSubmit = async (value) => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/clients`;

      if (client.id) {
        const response = await fetch(`${url}/${client.id}`, {
          method: "PUT",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await response.json();
        navigate("/clients");
        return;
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {client.name ? "Editar cliente" : "Agregar cliente"}
      </h1>
      <Formik
        initialValues={{
          name: client?.name ?? "",
          company: client?.company ?? "",
          email: client?.email ?? "",
          phone: client?.phone ?? "",
          notes: client?.notes ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4 ">
                <label htmlFor="name" className="text-gray-800">
                  Nombre
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del cliente"
                />

                {errors.name && touched.name ? (
                  <Error>{errors.name}</Error>
                ) : null}
              </div>

              <div className="mb-4 ">
                <label htmlFor="company" className="text-gray-800">
                  Empresa
                </label>
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Empresa del cliente"
                />
                {errors.company && touched.company ? (
                  <Error>{errors.company}</Error>
                ) : null}
              </div>

              <div className="mb-4 ">
                <label htmlFor="email" className="text-gray-800">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del cliente"
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </div>

              <div className="mb-4 ">
                <label htmlFor="phone" className="text-gray-800">
                  Teléfono
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Teléfono del cliente"
                />
                {errors.phone && touched.phone ? (
                  <Error>{errors.phone}</Error>
                ) : null}
              </div>

              <div className="mb-4 ">
                <label htmlFor="notes" className="text-gray-800">
                  Notas
                </label>
                <Field
                  name="notes"
                  as="textarea"
                  type="text"
                  id="notes"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Notas"
                />
              </div>

              <input
                type="submit"
                value={client.name ? "Editar cliente" : "Agregar cliente"}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ClientForm.defaultProps = {
  client: {},
};

export default ClientForm;
