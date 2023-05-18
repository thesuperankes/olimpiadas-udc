import React, { useState, useEffect, useRef  } from 'react';
import { Box, Button, Paper } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Grid from '@mui/material/Unstable_Grid2';
import { validarCodigoPython } from '../../Services/code-test';

export const InGame = () => {
    const [code, setCode] = useState(
        `#Escriba aqui el codigo
def suma(a, b):
  return a + b`
    );

    const [resultado, setResultado] = useState('C:');
    const iFrameRef = useRef(null);



    useEffect(() => {
        const messageHandler = function (e) {
          if (e.data && e.data.language) {
            console.log(e.data);
            // handle the e.data which contains the code object
          }
        };
    
        window.addEventListener('message', messageHandler);
    
        // Limpiar el oyente de eventos cuando el componente se desmonta
        return () => {
          window.removeEventListener('message', messageHandler);
        };
      }, []);


    const handleProbar = async () => {
        try {
            const result = await validarCodigoPython(code);
            setResultado(result.data.toString());
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const sendCodeToFrame = () => {
        const iFrame = iFrameRef.current;
    
        console.log("iFrame: ", iFrame);

        if(iFrame) {
          iFrame.contentWindow.postMessage({
            eventType: 'populateCode',
            language: 'python',
            files: [{
              "name": "HelloWorld.py",
              "content": "print('Hola Mundo')"
            }]
          }, "*");
        }
      }


    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: '25px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className='text-center'>
                        <h2>Construya un programa que cifre una contraseña usando MD5</h2>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        style={{
                            flex: '1',
                            marginRight: '10px',
                            position: 'relative',
                            height: '70vh',
                        }}
                    >
                        <iframe
                            frameBorder="0"
                            ref={iFrameRef}
                            height="550px"
                            src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideNewFileOption=true&disableCopyPaste=true&listenToEvents=true&theme=dark"
                            width="100%"
                        ></iframe>

                        <div className='row' style={{ marginTop: '20px' }}>
                            <div className='col-md-6'>
                                <Button variant='contained' onClick={handleProbar} fullWidth>Probar</Button>
                            </div>
                            <div className='col-md-6'>
                                <Button variant='contained' onClick={sendCodeToFrame} color="success" fullWidth>Enviar</Button>
                            </div>
                        </div>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper
                        elevation={3}
                        style={{
                            flex: '1',
                            position: 'relative',
                            height: '40vh',
                            marginBottom: '10px',
                            padding: '10px'
                        }}
                    >
                        Para que el ejercicio sea validado correctamente debe asegurarse de mantener el siguiente comportamiento: <br /><br />

                        1) Debe crear una función....<br />
                        2) El programa debe mantener...<br />
                        3) Este debe procesar...<br />
                    </Paper>
                    <Paper
                        elevation={3}
                        style={{
                            flex: '1',
                            marginRight: '10px',
                            position: 'relative',
                            height: '40vh',
                            marginBottom: '10px',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '10px'
                        }}
                    >
                        {resultado}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
