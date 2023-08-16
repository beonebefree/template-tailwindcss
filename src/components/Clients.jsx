import React, { useState } from "react";
import { addDestination } from "../state/actions/destinationActions";
import { useDispatch } from "react-redux";
import { useGetUsersQuery } from "../services/getClients";

const Form = () => {
  const { data } = useGetUsersQuery();
  console.log(data);
  const dispatch = useDispatch();
  const [nameSeller, setNameSeller] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [enterprice, setEnterprice] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [notification, setNotification] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDestination = {
      nameSeller,
      name,
      lastName,
      email,
      location,
      enterprice,
      category,
      size,
      description,
    };
    dispatch(addDestination(newDestination));
    setNameSeller("");
    setName("");
    setLastName("");
    setEmail("");
    setLocation("");
    setEnterprice("");
    setCategory("");
    setSize("");
    setDescription("");

    console.log(newDestination);
  };

  return (
    <>
      <div className="space-y-12">
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rubro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendedor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data &&
                data.map((client, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.enterprice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.nameSeller}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Form;
