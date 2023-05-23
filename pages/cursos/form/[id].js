
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if(query.id) {
          const id = query.id
          const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
          const curso = cursos[id]

          for(let atributo in curso){
            setValue(atributo, curso[atributo])
          }
        //setValue('nome', curso.nome)
       // setValue('duracao', curso.duracao)
      //  setValue('modalidade', curso.modalidade)

    }
    }, [query.id])

    console.log(query.id);

   
    function salvar(dados){
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))

    }
}