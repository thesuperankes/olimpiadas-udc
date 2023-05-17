export async function validarCodigoPython(codigo) {
    const data = {
      codigo: codigo
    };
  
    const response = await fetch('http://localhost:3030/validar-codigo-python', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    return result;
  }
  