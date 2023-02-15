import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import * as apiClient from "../../../api"
import { UserCard } from "../components/UserCard"
import { User } from "../interfaces"


interface Props {
  user: User[];
}

const getUsers = async () => {
  const data = await apiClient.getUsers()
  return data
}

export const UserList: FC<Props> = () => {
  const usersQuery = useQuery(['users'], getUsers)
  return (
    <>
      {
        usersQuery.isLoading ? (<p>Loading...</p>) : (
          usersQuery.data?.map((user: any) => (
              <UserCard key={user.id} user={user} />
            )
          )
        )
      }
    </>
  )
}

export default UserList