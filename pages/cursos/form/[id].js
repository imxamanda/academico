
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
        cursos.splice(query.id, 1, dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }

    return (
      <Navbar titulo='Formulário'>
          <Form>
              <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" {...register('nome')}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="duracao">
                  <Form.Label>Duração</Form.Label>
                  <Form.Control type="text" {...register('duracao')}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="modalidade">
                  <Form.Label>Modalidade</Form.Label>
                  <Form.Control type="text" {...register('modalidade')}/>
              </Form.Group>

             <div className='text-center'>
              <Button variant="danger" onClick={handleSubmit(salvar)}>
                  <BsCheckLg clasname="me-2"/>
                  Salvar
              </Button>

              <Link className="ms-2 btn btn-dark" href="/cursos">
                  <BiArrowBack className="me-2"/>
                  Voltar
              </Link>
              </div>
          </Form>
      </Navbar>
  )
}

export default form