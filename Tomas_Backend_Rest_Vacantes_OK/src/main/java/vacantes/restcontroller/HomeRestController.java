package vacantes.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.entidades.Usuario;
import vacantes.modelo.entidades.Vacante;
import vacantes.modelo.entidades.dao.CategoriaDao;
import vacantes.modelo.entidades.dao.VacanteDao;
import vacantes.modelo.repository.UsuarioRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/apirest/categoria")
public class HomeRestController {

	@Autowired
	private CategoriaDao cdao;
	
	@Autowired
	private VacanteDao vdao;
	
	@Autowired
	private UsuarioRepository urepo;
	
	@GetMapping("/todos")
	public List<Categoria>  todos(){
		return cdao.findAll();
		
	}
	
	@GetMapping("/todosVacantes")
	public List<Vacante>  todosVacantes(){
		return vdao.findAll();
		
	}
	 
	@GetMapping("/porCategoria/{idCategoria}")
	public List<Vacante>  buscarPorCategoria(@PathVariable int idCategoria){
		return vdao.findByCategoria(idCategoria);
	}
	
	@GetMapping("/vacanteDetalle/{idVacante}")
	public List<Vacante> vacanteDetalle(@PathVariable int idVacante){
		return vdao.vacantePorDetalle(idVacante);
	}
	
	@GetMapping("/login")
	public ResponseEntity<String> login(@RequestParam("username") String username, @RequestParam("password") String password){
		Usuario usuario = urepo.findByUsernameAndPassword(username, password);
		if(usuario != null) {
			return ResponseEntity.ok("Login correcto");
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña o username incorrecto");
		}
	}
	 
}
