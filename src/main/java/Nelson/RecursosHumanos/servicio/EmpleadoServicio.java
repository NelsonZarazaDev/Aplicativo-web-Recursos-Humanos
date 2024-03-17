package Nelson.RecursosHumanos.servicio;
import Nelson.RecursosHumanos.modelo.Empleado;
import Nelson.RecursosHumanos.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoServicio {
	@Autowired
	private EmpleadoRepositorio empleadoRepositorio;

	public Empleado crearEmpleado(Empleado empleadoReq){
		return empleadoRepositorio.save(empleadoReq);
	}

	public Empleado actualizarEmpleado(Empleado empleadoReq, Integer id){
		Optional<Empleado> empleadoAc = empleadoRepositorio.findById(id);
		empleadoAc.get().setSueldo(empleadoReq.getSueldo());
		empleadoAc.get().setDepartamento(empleadoReq.getDepartamento());
		return empleadoRepositorio.save(empleadoAc.get());
	}

	public boolean eliminarEmpleado(Integer id){
		Optional<Empleado> empleadoEl = empleadoRepositorio.findById(id);
		empleadoRepositorio.delete(empleadoEl.get());
		return true;
	}

	public Empleado buscarPorId(Integer id){
		Optional<Empleado> empleado=empleadoRepositorio.findById(id);
		return empleadoRepositorio.save(empleado.get());
	}

	public List<Empleado> todosLosEmpleados(){
		return (List<Empleado>) empleadoRepositorio.findAll();
	}
}
