import React,{ useState, useRef } from 'react'
import { Form as BulmaForm, Button} from 'react-bulma-components'

const { Field, Control, Label, Input} = BulmaForm

const Form = ({handleSubmit}) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        precio: '',
        cantidad_existente: '',
        categoria: '',
        descripcion: '',
    })

    const inputFileRef = useRef()


const handleChange = (event) => {
    const{ name, value } = event.target
    setFormValues({...formValues, [name]: value})
}

const _handleSubmit = (e) => {
    e.preventDefault()
    handleSubmit({...formValues, image: inputFileRef.current.files[0] })
    console.log(formValues)
    //console.log(inputFileRef.current.files)
}


    return (
        <form onSubmit={_handleSubmit}>
        <Field>
            <Label>Nombre</Label>
            <Control>
                <Input placeholder="Text input" name="nombre" value={formValues.name} onChange={handleChange}/>
            </Control>
        </Field>

        <Field>
            <Label>Precio</Label>
            <Control>
                <Input placeholder="Text input" type="number" name="precio" value={formValues.precio} onChange={handleChange}/>
            </Control>
        </Field>

        <Field>
            <Label>Cantidad Existente</Label>
            <Control>
                <Input placeholder="Text input" type="number" name="cantidad_existente" value={formValues.cantidad_existente} onChange={handleChange}/>
            </Control>
        </Field>

        <Field>
            <Label>Categoria</Label>
            <Control>
                <Input placeholder="Text input" name="categoria" value={formValues.categoria} onChange={handleChange}/>
            </Control>
        </Field>

        <Field>
            <Label>Descripcion</Label>
            <Control>
                <Input placeholder="Text input" name="descripcion" value={formValues.descripcion} onChange={handleChange}/>
            </Control>
        </Field>

        <Field>
            <Label>Imagen</Label>
            <Control>
                <input type="file" ref={inputFileRef}/>
            </Control>
        </Field>
        
         <Button type="submit" color="primary">Guardar</Button>

        </form>
    )
}

export default Form