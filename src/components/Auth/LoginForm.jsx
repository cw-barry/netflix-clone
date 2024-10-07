"use client"

import { loginFormFields } from "../../constants"
import { FcGoogle } from "react-icons/fc";
import { Field, Form, Formik } from "formik"
import Link from "next/link"
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
    const {signupProvider, signIn, forgotpassword} = useAuth()

    const initialValues = {email:'', password:''}
  
    const handleSubmit = (values, actions)=>{
        signIn(values.email, values.password )

    }
  
    return (

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>

        {({values})=>(
        <Form className="flex flex-col ">
        <h1 className="text-red-main text-3xl font-[500] text-center mb-3"> Sign In</h1>

        {loginFormFields.map(field=>(
            <div key={field.name} className="relative z-0 mb-5">
                <Field type={field.type} name={field.name} id={field.name} placeholder=" " className="peer"/>
                <label htmlFor={field.name}>{field.label}</label>
            </div>
            ))}

            <div className="flex justify-between">
                <span onClick={()=> forgotpassword(values.email) }className="py-3 font-[0.7rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors"> 
                    Forgot Password
                </span>
            </div>


            <div className="flex justify-center">
                <Link className="py-3 font-[0.7rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors" href="/register">Sign Up</Link>
            </div>
            <button className="btn-danger mb-5" type="submit">
                Login
            </button>

            <button className="btn-danger flex items-center justify-between" type="button" onClick={()=> signupProvider()}>
                <span> Continue with Google</span>
                <FcGoogle size={24}/>
            </button>
    </Form>

        )}

    </Formik>

)
}
