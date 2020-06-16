import React, {useState} from 'react'

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda;

    //funcion leer cada input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,        
            [e.target.name] : e.target.value
        })
    }

    //Consultar la API's
    const buscarInformacion = e =>{
        e.preventDefault();

        //Validación
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
        } else {
            guardarError(false);

            //Pasar a componente principal
            guardarBusquedaLetra(busqueda);


        }
        

    }

    return ( 
        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form 
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="artista"                                            
                                            name="artista"
                                            placeholder="Nombre del Artista"   
                                            onChange={actualizarState}      
                                            value={artista}                                  
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cancion">Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="cancion"                                            
                                            name="cancion"
                                            placeholder="Nombre de Canción"  
                                            onChange={actualizarState}        
                                            value={cancion}                                                                                                             
                                        />
                                    </div>
                                </div>
                            </div>    
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>                            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>


     );
}
 
export default Formulario;