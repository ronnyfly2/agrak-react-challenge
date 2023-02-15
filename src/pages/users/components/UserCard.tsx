import { FC } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import { ButtonLink } from "../components/ButtonLink"

import { User } from '../interfaces';

interface Props {
  user: User;
}

const handleDelete = (id:string|number) => {
  console.log('delete', id)
}

export const UserCard: FC<Props> = ({ user }) =>{

  return (
    <Card sx={{ minWidth: 345, margin: '0 auto', mb: 4, width:'100%' }}>
      <CardHeader
        avatar={
          <Avatar alt={user.first_name} src={user.avatar} />
        }
        title={`${user.first_name} ${user.second_name}`}
        subheader={`${user.email}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt={user.first_name}
      />
      <CardActions disableSpacing>
        <ButtonLink link={`/user/${user.id}`} title={'Edit'} />
        <Button size="small" color="error" onClick={()=>handleDelete(user.id)} >Delete</Button>
    </CardActions>
    </Card>
  );
}

export default UserCard