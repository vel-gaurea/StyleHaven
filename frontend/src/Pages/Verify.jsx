import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [serachParams, setSerachParams] = useSearchParams()


    const success = serachParams.get('success')
    const orderId = serachParams.get('orderId')

    const verifyPayment = async () => {
        try {

            if (token) {
                return null
            }

            const respone = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, {headers:{token}})
            if (respone.data.success) {
                setCartItems({})
                navigate('/orders')
            }
            else{
                navigate('/cart')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verify