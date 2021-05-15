import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

const AddButton = ({onClick}) => {
    return(
        <section>
            <Container>
                <div className="is-pulled-right">
                <Button onClick={onClick} color='primary'>Agregar</Button>
                </div>
            </Container>
        </section>
    )
}

export default AddButton