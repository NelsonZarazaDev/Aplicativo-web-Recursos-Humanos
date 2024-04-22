package Nelson.RecursosHumanos.controller;

import Nelson.RecursosHumanos.modelo.Empleado;
import Nelson.RecursosHumanos.servicio.EmpleadoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class EmpleadoController {
	@Autowired
	private EmpleadoServicio empleadoServicio;

	/*Crear*/
	@PostMapping("empleado")
	public ResponseEntity<Empleado> crear (@Valid @RequestBody Empleado empleado){
		return new ResponseEntity<>((empleadoServicio.crearEmpleado(empleado)), HttpStatus.CREATED);
	}

	/*Actualizar*/
	@PutMapping("empleado/{id}")
	public ResponseEntity<Empleado> actualizar(@Valid @RequestBody Empleado empleado, @PathVariable Integer id){
		return new ResponseEntity<>(empleadoServicio.actualizarEmpleado(empleado, id), HttpStatus.OK);
	}

	/*Eliminar*/
	@DeleteMapping("empleado/{id}")
	public ResponseEntity<String> eliminar (@PathVariable Integer id){
		return new ResponseEntity(empleadoServicio.eliminarEmpleado(id), HttpStatus.NO_CONTENT);
	}

	/*Buscar*/
	@GetMapping("empleado/{id}")
	public ResponseEntity<Empleado> buscarEmpleado (@PathVariable Integer id){
		return ResponseEntity.ok(empleadoServicio.buscarPorId(id));
	}

	/*Listar*/
	@GetMapping("empleado")
	public ResponseEntity<List<Empleado>> listarEmpleados(){
		return ResponseEntity.ok(empleadoServicio.todosLosEmpleados());
	}
}
