import React, { useState, useEffect } from 'react'
import { Modal, Container } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
import Form from './Form'
import Loading from './Loading'
import { saveProduct, getProducts } from '../services'




const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function loadProducts () {
        const response = await getProducts()

        if (response.status === 200) {
            setProducts(response.data.products)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const handleSubmit = async (data) => {
        await saveProduct(data)
        loadProducts()
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title="Agregar Productos"/>
            <AddButton onClick={() => setIsModalOpen(true)}/>
            {
                isLoading && <Loading/>
            }
            {
                !isLoading && !products && (
                    <h2 className="title has-text-centered">No hay Productos</h2>
                )
            }
            {
                isLoading && products && <ListProducts products={products}/>
            }
            <ListProducts products={products}/>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        <Modal.Card.Title>
                        Agregar Producto
                        </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit}/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    )
}

export default ProductLayout
