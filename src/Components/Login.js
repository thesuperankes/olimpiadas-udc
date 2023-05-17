import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';

import { Button, CardActions } from '@mui/material';

export const Login = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh' // esto hace que el contenedor ocupe toda la altura de la pantalla
        }}>
            <Card sx={{ maxWidth: 345, border: '1px solid', padding: '5px 5px 5px 5px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bienvenido
                    </Typography>
                    <div className='row'>


                        <div className='col-12' style={{ marginTop: '10px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Programa</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Programa"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'Ingenieria de Software'}>Ingenieria de Software</MenuItem>
                                    <MenuItem value={'Ingenieria de Sistemas'}>Ingenieria de Sistemas</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-12' style={{ marginTop: '10px' }}>
                            <TextField id="outlined-basic" className='w-100' label="Nombre" variant="outlined" />
                        </div>
                        <div className='col-12' style={{ marginTop: '10px' }}>
                            <TextField id="outlined-basic" className='w-100' label="Identificacion" variant="outlined" />
                        </div>

                    </div>



                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant='contained' component={Link} to="/esperando" fullWidth>
                        Ingresar
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
