import { Container, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom';



import React, { useEffect, useState } from 'react'
import { UserCard } from './UserCard'

export const Waiting = () => {
    const navigate = useNavigate();
    const [tiempoRestante, setTiempoRestante] = useState(null);



    useEffect(() => {
        const intervalo = setInterval(() => {


            const horaEspecifica = new Date('2023-05-18T07:00:00'); // Reemplaza esta fecha y hora con la hora específica de tus olimpiadas
            const ahora = new Date();
            setTiempoRestante(obtenerTiempoRestante(horaEspecifica, ahora));
            
            console.log(ahora);
            if (ahora >= horaEspecifica) {
                console.log("Entro");
                // Si la hora actual es igual o posterior a la hora especificada
                // Redirigir al usuario a la página de la partida
                clearInterval(intervalo); // Detenemos el intervalo
                navigate('/partida');
            }
        }, 1000); // Verificar cada segundo (puedes ajustar el intervalo según tus necesidades)

        return () => {
            clearInterval(intervalo); // Limpiamos el intervalo al desmontar el componente
        };
    }, [navigate]);


    const obtenerTiempoRestante = (horaEspecifica, ahora) => {
        const diferencia = horaEspecifica.getTime() - ahora.getTime();

        const horasRestantes = Math.floor(diferencia / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);

        return {
            horas: horasRestantes,
            minutos: minutosRestantes,
            segundos: segundosRestantes
        };
    };


    let userList = [
        { identification: '345678', name: 'Sofía Andrea Díaz' },
        { identification: '876543', name: 'Andrés Felipe Ríos' },
        { identification: '987654', name: 'Camila Gómez López' },
        { identification: '234567', name: 'Diego Alejandro Castañeda' },
        { identification: '765432', name: 'Valentina Torres Ramírez' },
        { identification: '456789', name: 'Mateo Sánchez Jiménez' },
        { identification: '678954', name: 'Isabella Morales Castro' },
        { identification: '543678', name: 'Santiago Ortega Giraldo' },
        { identification: '876345', name: 'María Fernanda Herrera' },
        { identification: '234876', name: 'Sebastián Vargas Mejía' },
        { identification: '654321', name: 'Valeria Peña García' },
        { identification: '789654', name: 'Daniel Ramírez Pulido' },
        { identification: '987456', name: 'Laura Camila Soto' },
        { identification: '567890', name: 'Carlos Andrés Martínez' },
        { identification: '345678', name: 'Ana Sofía Rojas' },
        { identification: '876543', name: 'Juan Sebastián Pineda' },
        { identification: '987654', name: 'Valentina Gutiérrez' },
        { identification: '234567', name: 'Andrea Franco Osorio' },
        { identification: '765432', name: 'Javier Ríos Morales' },
        { identification: '456789', name: 'Carolina Ramírez Gómez' }
    ];

    return (
        <Container fixed>
            <Paper elevation={3} style={{ padding: '20px 20px 20px 20px', marginTop: '20px' }}>

                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1>{  tiempoRestante ? ( tiempoRestante.horas  + ":" + tiempoRestante.minutos + ":" +  tiempoRestante.segundos ) : "" }</h1>
                    </div>

                    {
                        userList.map((user, index) => {
                            return (<div className='col-md-6' style={{ marginTop: '10px' }}>
                                <UserCard identification={user.identification} name={user.name} />
                            </div>)
                        })
                    }



                </div>

            </Paper>
        </Container>
    )
}
