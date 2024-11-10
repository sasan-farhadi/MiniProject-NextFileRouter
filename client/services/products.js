import api from '../configs/api'
const limit = 10

const products = (page) => {
    const pageNumber = page.queryKey[1]
    return (
        api.get(`products?page=${pageNumber}&limit=${limit}`)
    )
}

const allProducts = () => api.get(`products?limit=1000`)

const addProduct = (data) => api.post(`products`, data)

const deleteProduct = (id) => api.delete(`products/${id}`)

const editProduct = (data) => api.put(`products/${data.id}`, data)

const searchProduct = async (id) => {
    try {
        const response = await api.get(`products/${id}`)
        return { response }
    } catch (error) {
        console.log(error)
    }
}




export { products, addProduct, deleteProduct, allProducts, editProduct, searchProduct }