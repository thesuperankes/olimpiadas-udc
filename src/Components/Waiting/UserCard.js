import React from 'react'
import { Card, CardContent, Typography, Avatar } from '@mui/material'

export const UserCard = ({ identification, name }) => {

    // En esta pagina existen más opciones: https://www.dicebear.com/playground

    let avatar = `https://api.dicebear.com/6.x/bottts/svg?seed=${identification}`

    return (
        <Card>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={ avatar } alt="Avatar" />
                <Typography variant="h6" style={{ marginLeft: '1rem' }}>
                    { name }
                </Typography>
            </CardContent>
        </Card>
    )
}
