const Curso = (props) => {
    return (
      <>
      <h2>{props.curso}</h2>
      <div>
        <p>Profesor: {props.profesor}</p>
        <p>Duracion: {props.duracion} semanas</p>
        <p>Precio: {props.precio}</p>
      </div>
      <hr/>
      </>
    )
  }

  export default Curso;
  