/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
const RequireAuth = ({children}) => {
    const value = useSelector((state) => state.products)
    if(!value.products.length) {
        return <Navigate to='/' />
    }
    return children
} 
export default RequireAuth;