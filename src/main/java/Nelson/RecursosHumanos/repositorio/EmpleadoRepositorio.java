package Nelson.RecursosHumanos.repositorio;

import Nelson.RecursosHumanos.modelo.Empleado;
import org.springframework.data.repository.CrudRepository;

public interface EmpleadoRepositorio extends CrudRepository<Empleado, Integer> {
}
