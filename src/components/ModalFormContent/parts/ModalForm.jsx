"use client"

import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

const ModalForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string(),
    nickname: Yup.string(),
    email: Yup.string().required(),
  })
  return (
    <Formik 
    initialValues={{name: "", nickname: "", email:""}} 
    onSubmit={(values) => console.log(values)} 
    validationSchema={validationSchema}>
          <Form>
            <div className="flex flex-col gap-[18px]">
              <div>
              <label className="visually-hidden" htmlFor="name">Имя</label>
              <Field className="w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:outline-red-400" name="name" id="name" placeholder="Имя"/>
              </div>
    
              <div>
              <label className="visually-hidden" htmlFor="nickname">Ник Telegram</label>
              <Field className="w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:outline-red-400" name="nickname" id="nickname" placeholder="Ник Telegram"/>
              </div>
    
              <div>
              <label className="visually-hidden" htmlFor="email">Email</label>
              <Field className="w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:outline-red-400" name="email" id="email" placeholder="Email"/>
              </div>
            </div>
            <button className="h-[50px] rounded-[10px] min-w-[317px] bg-[#ffffff] font-bold text-[14px] leading-[1.43] text-[#0c0117] mt-[40px]" type="submit">Отправить</button>
          </Form>
        </Formik>
  )
}

export default ModalForm