package vacantes.restcontroller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vacantes.modelo.dto.VacanteDto;
import vacantes.modelo.entidades.EstatusVacante;
import vacantes.modelo.entidades.Solicitud;
import vacantes.modelo.entidades.Vacante;
import vacantes.modelo.entidades.dao.SolicitudDao;
import vacantes.modelo.repository.VacanteRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/vacantes")
public class VacanteRestController {
	
	@Autowired
	private SolicitudDao sdao;
	
	@Autowired
	private VacanteRepository vrepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@PostMapping("/agregarVacante")
	public ResponseEntity<?> alta(@RequestBody VacanteDto vacanteDto){
		vacanteDto.setDestacado(1);
	    vacanteDto.setFecha(new Date());
		vacanteDto.setEstatus(EstatusVacante.CREADA);
		Vacante vacante = new Vacante();
		modelMapper.map(vacanteDto, vacante);
		if (vrepo.save(vacante) != null) {
			vacanteDto.setIdVacante(vacante.getIdVacante());
			return ResponseEntity.status(201).body(vacanteDto);
		}else {
			String mensaje = "Alta NOOO realizada";
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(mensaje);
		}
	}

	@PutMapping("/modificarVacante/{id}")
	public ResponseEntity<?> modificar(@PathVariable int id, @RequestBody VacanteDto vacanteDto) {
	    Optional<Vacante> optionalVacante = vrepo.findById(id);

	    if (optionalVacante.isPresent()) {
	        Vacante vacante = optionalVacante.get();

	        vacante.setCategoria(null);
	        vacante.setNombre(vacanteDto.getNombre());
	        vacante.setDescripcion(vacanteDto.getDescripcion());
	        vacante.setDetalles(vacanteDto.getDetalles());
	        vacante.setSalario(vacanteDto.getSalario());
	        vacante.setImagen(vacanteDto.getImagen());
	        Vacante vacanteActualizada = vrepo.save(vacante);
	        VacanteDto vacanteDtoActualizada = new VacanteDto();
	        modelMapper.map(vacanteActualizada, vacanteDtoActualizada);

	        return ResponseEntity.ok(vacanteDtoActualizada);
	    } else {
	        String mensaje = "Vacante no encontrada con ID: " + id;
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensaje);
	    }
	}
	
	@PostMapping("/solicitudes")
    public ResponseEntity<?> crearSolicitud(@RequestBody Solicitud solicitud) {
        try {
            solicitud.setFecha(new Date());
            solicitud.setEstado(0);
            sdao.insertOne(solicitud);
            return ResponseEntity.status(HttpStatus.CREATED).body(solicitud);
        } catch (Exception e) {
            String mensajeError = "Error al crear la solicitud: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mensajeError);
        }
    }

	@GetMapping("/todasSolicitudes")
	public List<Solicitud> todos(){
	return sdao.findAll();
}
	
}
