import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProducts (){

    try{
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })

        return response
    }catch (e){
        console.log(e)
    }
}

export async function saveProduct (productData){

    try{
       // console.log(productData);
        const formData = new FormData()

        formData.append('nombre', productData.nombre)
        formData.append('precio', productData.precio)
        formData.append('cantidad_existente', productData.cantidad_existente)
        formData.append('categoria', productData.categoria)
        formData.append('descripcion', productData.descripcion)
        formData.append('image', productData.image)


       const response = await axios({
       url: `${baseUrl}/products`,
       method: 'POST',
       data: formData,
       })

        return response
    }catch (e){
        console.log(e)
    }
}
