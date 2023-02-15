import { User } from '../interfaces';
import { useNavigate } from "react-router-dom"
import { FormUser } from '../components/FormUser';
import { ButtonLink } from "../components/ButtonLink"

import * as apiClient from "../../../api"

const saveUser = async (user: User ) => {
  const data = await apiClient.createUser(user)
  return data
}

export const CreateUserView = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  const handleSubmit = (user:User) => {
    saveUser(user)
    navigate('/')
  }

  return (
    <div>
      <h1>Create User</h1>
      <ButtonLink link={'/'} title={'Back'} />
      <FormUser
        handleCancel={handleBack}
        handleSubmit={handleSubmit}
       />
    </div>
  )
}

export default CreateUserView