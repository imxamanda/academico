import Navbar from '@/components/Navbar'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useForm } from 'react-hook-form'

const index = () => {

    const { register, handleSubmit } = useForm()

    function salvar(dados){
        console.log(dados);
/*        set(ref(db, 'cursos', dados))*/
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

                <Button variant="dark" onClick={handleSubmit(salvar)}>
                    Salvar
                </Button>
            </Form>
        </Navbar>
    )
}

export default index
