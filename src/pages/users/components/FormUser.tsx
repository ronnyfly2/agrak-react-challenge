import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import styled from '@emotion/styled'

import md5 from 'blueimp-md5'

import { User } from '../interfaces'
import './../components/assets/styles/FormUser.css'

const Form = styled.form`
  max-width: 500px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

type Props = {
  userData?: User | undefined,
  handleSubmit: Function,
  handleCancel: React.MouseEventHandler
}

export const FormUser = ({ userData, handleCancel, handleSubmit }: Props)=> {

  const formik = useFormik({
    initialValues: userData || {
      first_name: '',
      second_name: '',
      email: '',
      avatar: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      second_name: Yup.string().required('Second name is required'),
      email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i,'Invalid email address').email().required('Email is required'),
      avatar: Yup.string().required('Avatar is required'),
    }),
    onSubmit: values => {
      handleSubmit({...values });
    },
  })

  const getAvatar = async (email: string) => {
    const encrypt = md5(email)
    const link = await fetch(`https://www.gravatar.com/avatar/${encrypt}?d=robohash&f=y&s=420`)
    formik.setFieldValue('avatar', link.url)
  }

  return (
    <Form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField
        error={!!(formik.touched.first_name && formik.errors.first_name)}
        helperText={formik.errors.first_name}
        className={'TextField'}
        label="First Name"
        id="first_name"
        name="first_name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
      />

      <TextField
        error={!!(formik.touched.second_name && formik.errors.second_name)}
        helperText={formik.errors.second_name}
        className={'TextField'}
        label="Second Name"
        id="second_name"
        name="second_name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.second_name}
      />

      <TextField
        error={!!(formik.touched.email && formik.errors.email)}
        helperText={formik.errors.email}
        className={'TextField'}
        label="Email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />


      <Button color="primary" onClick={()=>getAvatar(formik.values.email)}>Generate Avatar</Button>
      {formik.values.avatar && <img src={formik.values.avatar} alt="avatar" width={400} />}
      <TextField
        error={!!(formik.touched.avatar && formik.errors.avatar)}
        helperText={formik.errors.avatar}
        className={'TextField'}
        label="Url Avatar"
        id="avatar"
        name="avatar"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.avatar}
      />

      <Buttons>
        <Button className={'ButtonCancel'} color="error" onClick={handleCancel}>Cancel</Button>
        <Button color="success" disabled={formik.isSubmitting || !formik.isValid} type='submit'>
          Save
        </Button>
      </Buttons>
    </Form>
  )
}
export default FormUser;