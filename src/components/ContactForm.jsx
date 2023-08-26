import { Input, Textarea } from "@material-tailwind/react"
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { AlertCustomStyles } from "../utility/Alert";
import { useState } from "react";
const ContactForm = () => {
    const [hide, setHide] = useState(false);
    const formik = useFormik({
        
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Please Add Your Name!'),
            email: Yup.string().required().email(),
            message: Yup.string().required().min(5, 'Message must have 5 chars'),
        }),
    })
  return (
    <>
        <h1 className="text-3xl font-semibold mb-5">Fill up a Form</h1>
        <form className={`md:w-[500px]  mb-5 space-y-4 ${hide ? 'hidden' : 'block'}`} onSubmit={formik.handleSubmit}>
            <div>
                <Input variant="standard" label="Name" value={formik.values.name} name="name" onChange={formik.handleChange}/>
                <small className="text-[red]">{formik.errors.name}</small>
            </div>
            <div>
                <Input variant="standard" label="Email" value={formik.values.email} name="email" onChange={formik.handleChange}/>
                <small className="text-[red]">{formik.errors.email}</small>
            </div>
            <div>
                <Textarea label="Message" name="message" value={formik.values.message} onChange={formik.handleChange}/>
                <small className="text-[red]">{formik.errors.message}</small>
            </div>
            <button type="submit" onClick={() => formik.isValid ? setHide(true) : setHide(false)} className={`px-10 py-2 bg-black text-white ${!formik.isValid ? 'text-[#ccc] cursor-no-drop' : 'text-white cursor-pointer'} `} disabled={!formik.isValid}>Post</button>
        </form>
        {hide ? (
            <AlertCustomStyles />
        ) : (null)}
    </>
  )
}

export default ContactForm