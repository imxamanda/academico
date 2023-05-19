import Navbar from '@/components/Navbar'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useForm } from 'react-hook-form'

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

                <Button href="cursos" variant="dark" onClick={handleSubmit(salvar)}>
                    Salvar
                </Button>
            </Form>
        </Navbar>
    )
}

export default index
