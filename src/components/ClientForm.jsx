import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import Error from "./Error";
const ClientForm = () => {
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo requerido")
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres"),
    company: Yup.string()
      .required("Campo requerido")
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres"),
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (value) => {};
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agrager cliente
      </h1>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
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
                  placeholder="Teléfono del cliente"
                />
              </div>

              <input
                type="submit"
                value="Agregar cliente"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ClientForm;
