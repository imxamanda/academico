import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdAdd } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { MdOpenInNew } from 'react-icons/md';

const index = () => {

    const [cursos, setCursos] = useState([])
    
    useEffect(()=>{
        setCursos(getAll())
    }, [])

function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
}

function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')) {
    const itens = getAll()
    itens.splice(id, 1)
    window.localStorage.setItem('cursos', JSON.stringify(itens))
    setCursos(itens)
    }
}

    return (
        <Navbar titulo='Cursos'>
            <Link href="cursos/form" className='mb-2 btn btn-dark'> Novo <MdAdd />

            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                        <th>Excluir</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {cursos.map((item, i) => (
                    <tr key={i}>
                        <td>{item.nome}</td>
                        <td>{item.duracao}</td>
                        <td>{item.modalidade}</td>
                        <td>
                            <BsFillTrash3Fill onClick={()=>excluir(i)} className='text-danger'/>
                            
                        </td>
                        <td>
                            <Link href={'/cursos/' + i}>
                            <MdOpenInNew title="Alterar" className='text-dark'/>
                            </Link>
                        </td>
                        
                    </tr>
                 ))}
                  
                </tbody>
            </Table>
        </Navbar>

    )
}

export default index
