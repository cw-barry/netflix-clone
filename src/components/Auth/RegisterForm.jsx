"use client"

import { registerationFormFields } from "../../constants"
import { FcGoogle } from "react-icons/fc";
import { Field, Form, Formik } from "formik"
import Link from "next/link"
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
    const {signupProvider, createUser} = useAuth()

    const initialValues = {firstName:'', lastName:'', email:'', password:''}
  
    const handleSubmit = (values, actions)=>{
        const displayName = `${values.firstName} ${values.lastName}`
        createUser(values.email, values.password, displayName)

    }
  
    return (

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col ">
            <h1 className="text-red-main text-3xl font-[500] text-center mb-3"> Sign Up</h1>

            {registerationFormFields.map(field=>(
                <div key={field.name} className="relative z-0 mb-5">
                    <Field type={field.type} name={field.name} id={field.name} placeholder=" " className="peer"/>
                    <label htmlFor={field.name}>{field.label}</label>
                </div>
                ))}

                <div className="flex justify-center">
                    <Link className="py-3 font-[0.7rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors" href="/login">Sign In</Link>
                </div>
                <button className="btn-danger mb-5" type="submit">
                    Register 
                </button>

                <button className="btn-danger flex items-center justify-between" type="button" onClick={()=> signupProvider()}>
                    <span> Continue with Google</span>
                    <FcGoogle size={24}/>
                </button>
        </Form>

    </Formik>

)
}
