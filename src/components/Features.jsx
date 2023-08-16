import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/Global";
import { ModalBasic } from "./Modal";

function Cards({
  title,
  price,
  descUno,
  descUnoText,
  descDos,
  descDosText,
  descTres,
  descTresText,
  descCuatro,
  descCuatroText,
  descCinco,
  descCincoText,
  descSeis,
  descSeisText,
}) {
  return (
    <>
      <div className="bg-white mb-6 text-center flex-wrap flex flex-auto flex-col shadow-lg rounded-lg relative min-w-0 break-words mb-6 rounded-lg">
        <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-300">
          <h6 className="text-6xl font-normal leading-normal mt-0 mb-2 text-indigo-800">
            {title}
          </h6>
        </div>
        <div className="px-4 py-5 flex-wrap justify-between">
          <p className="text-2xl">Desde</p>
          <div className="text-6xl mt-0 mb-0 text-emerald-900">${price}</div>
          <span className="text-2xl"> / mes </span>
          <ul className="mt-6 mb-0 list-none text-center">
            <li className="text-blueGray-500">
              <b className="text-emerald-600"> {descUno} </b> {descUnoText}
            </li>
            <li className=" text-blueGray-500">
              <b className="text-emerald-600"> {descTres} </b>
              {descTresText}
            </li>
            <li className=" text-blueGray-500">
              <b className="text-emerald-600"> {descCuatro} </b>
              {descCuatroText}
            </li>
            <li className=" text-blueGray-500">
              <b className="text-emerald-600"> {descCinco} </b>
              {descCincoText}
            </li>
            <li className="py-1 text-blueGray-500">
              <b className="text-emerald-600"> {descDos} </b>
              {descDosText}
            </li>
            <li className=" text-blueGray-500">
              <b className="text-emerald-600"> {descSeis} </b>
              {descSeisText}
            </li>
          </ul>
        </div>
        <div className="mt-4 py-6 bg-transparent bg-transparent rounded-b px-4 py-3 border-t border-blueGray-200">
          <ModalBasic />
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Get Start
          </button>
        </div>
      </div>
    </>
  );
}

const Features = () => {
  return (
    <div className={` ${styles.bgPrimary} ${styles.section} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText} mt-`}>
            Planes de pago
          </h1>
          <p className={`${styles.pText} ${styles.whiteText} `}>
            Conectá con el plan que se ajuste a tus preferencias.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-8 md:grid-cols-2 gap-3 w-[100%]">
          <Cards
            title={"Básico"}
            price={4990}
            descUno={1}
            descUnoText={"Landing page personalizada"}
            descDos={1}
            descDosText={"Actualización todos los meses"}
            descTres={"1gb"}
            descTresText={"de almacenamiento en la nube"}
          ></Cards>

          <Cards
            title={"Medio"}
            price={5990}
            descUno={"+2"}
            descUnoText={"Secciones de página"}
            descDos={1}
            descDosText={"Actualización todos los meses"}
            descTres={"5gb"}
            descTresText={" de Base de datos"}
            descCuatro={1}
            descCuatroText={"Correo empresarial con dominio propio"}
          ></Cards>

          <Cards
            title={"Full"}
            price={6990}
            descUno={"+4"}
            descUnoText={"Secciones de página"}
            descDos={"+2"}
            descDosText={"Subdominios"}
            descTres={"10gb"}
            descTresText={" de Almacenamiento en la nube"}
            descCinco={1}
            descCincoText={"Correo empresarial con dominio propio"}
            descCuatro={1}
            descCuatroText={"Dominio incluido"}
            descSeis={"plus"}
            descSeisText={"Sistema de cobro en linea"}
          ></Cards>
        </div>
      </div>
    </div>
  );
};

export default Features;
