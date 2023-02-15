import { FC } from "react";
import { UserList } from "../components/UserList"
import { Grid } from "@mui/material"

interface HomeInterface {}

export const HomeView: FC<HomeInterface> = () => {

  return (
    <Grid item xs={12}>
      <h1>User List</h1>
      <UserList user={[]} />
    </Grid>
  )
}

export default HomeView