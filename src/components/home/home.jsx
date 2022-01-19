import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";
import { getJobs, getPosts } from "../../controllers";
import { SearchBar } from "../SearchBar/SearchBar";
import Boton from '../Boton/Boton'
import FormEmpleador from "../FormEmpleador/FormEmpleador";
import Chat from "../chat/chat";
import Filtros from "../Filtros/Filtros";

import socket from "../socket";

import { Link } from 'react-router-dom';



export default function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.search}>
      <SearchBar  />
      </div>
      <div>
        <Chat />
        <Filtros/>
        <div className={styles.newPostButton}>
        <Boton
          data-toggle="modal"
          data-target="#FormEmpleador"
          colorBtn='btn_azul'
        >
          Nuevo post
        </Boton>
        <Link to="/email">
        <Boton colorBtn='btn_azul'
         > Crear Alerta de Empleo </Boton>
        </Link>
        </div>
      </div>
      <div className={styles.divJobs}>
        <Cards />
      </div>
      <FormEmpleador/>
    </div>
  );
};