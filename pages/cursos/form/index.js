import Navbar from '@/components/Navbar'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const index = () => {

    const { register, handleSubmit } = useForm()

    function salvar(dados){
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))

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

export default index
