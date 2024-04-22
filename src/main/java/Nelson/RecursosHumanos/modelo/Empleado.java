package Nelson.RecursosHumanos.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //Crea la tabla de bd
@Data // getter y setter
@NoArgsConstructor //Constructor basio
@AllArgsConstructor //Constructor con todos los argumentos y clase
public class Empleado {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer idEmpleado;
	String nombre;
	String departamento;
	Double sueldo;
}
