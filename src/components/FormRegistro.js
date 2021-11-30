const FormRegistro = () => (
    <div className="container col-6">

        <div className="">
            <h2>Registro de Nuevo Usuario</h2>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
            <h5>Información Básica</h5>
        </div>
        <form>
            <div className="mb-3">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre" />
                <label for="apellidos" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="apellidos" aria-describedby="apellido" />
                <label for="sel1" className="form-group">Tipo Id:</label>
                <select className="form-control" id="sel1">
                    <option>Cedula de Ciudadanía</option>
                    <option>Cedula de Extranjería</option>
                </select>
                <label for="numeroId" className="form-label">Numero Id:</label>
                <input type="text" className="form-control" id="numeroId" aria-describedby="numeroId" />

                <label for="exampleInputEmail1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                <label for="celular" className="form-label">Celular:</label>
                <input type="text" className="form-control" id="celular" aria-describedby="celular" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Recordar</label>
            </div>
            <h3>Información para acceso a la plataforma</h3>
            <div className="row">
                <div className="col">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="nombre" />
                </div>

                <div className="col mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)
export default FormRegistro;