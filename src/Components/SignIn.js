import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

 const SignIn = () => {
    return (
        <div style={{'display':'flex'}}>
        <div>
            <Stack className='Search-btn' spacing={2} direction="row">
                <Button variant="text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </Button>
            </Stack>
            </div>

            <Stack spacing={2} direction="row">
                <NavLink className='Search-btn' style={{'color' : 'white'}} variant="text">
                   Sign In
                </NavLink>
            </Stack>
       
        </div>
    );
  }
  export default SignIn