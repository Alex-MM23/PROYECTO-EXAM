package vacantes.restcontroller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.entidades.Perfil;
import vacantes.modelo.entidades.Usuario;
import vacantes.modelo.entidades.Vacante;
import vacantes.modelo.entidades.dao.CategoriaDao;
import vacantes.modelo.entidades.dao.PerfilServicioDao;
import vacantes.modelo.entidades.dao.UsuarioDao;
import vacantes.modelo.entidades.dao.VacanteDao;
import vacantes.modelo.repository.CategoriaRepository;
import vacantes.modelo.repository.UsuarioRepository;
import vacantes.modelo.repository.VacanteRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/apirest/categoria")
public class HomeRestController {

	@Autowired
	private CategoriaDao cdao;
	
	@Autowired
	private CategoriaRepository crepo;
	
	@Autowired
	private VacanteDao vdao;
	
	@Autowired
	private UsuarioRepository urepo;
	
	@Autowired
	private PerfilServicioDao pdao;
	
	@Autowired
	private UsuarioDao udao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
    private VacanteRepository vrepo;
	
	@GetMapping("/todos")
	public List<Categoria>  todos(){
		return cdao.findAll();
		
	}
	
	@GetMapping("/todosVacantes")
	public List<Vacante>  todosVacantes(){
		return vdao.vacanteCreada();
		
	}
	
	@PostMapping("/altaCategoria")
	public ResponseEntity<?> alta(@RequestBody Categoria categoria) {
	//	Categoria nuevacategoria = new Categoria();
	//	modelMapper.map(categoria,nuevacategoria);
		if(crepo.save(categoria) != null) {
			return ResponseEntity.status(201).body(categoria);
		}else {
			String mensaje = "Alta NOOO realizada";
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(mensaje);
		}
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
	public ResponseEntity<?> login(@RequestParam("username") String username, @RequestParam("password") String password) {
	    Usuario usuario = urepo.findByUsernameAndPassword(username, password);
	    if (usuario != null) {
	        List<Perfil> perfiles = usuario.getPerfiles();
	        if (!perfiles.isEmpty()) {
	            String tipoUsuario = null;
	            for (Perfil perfil : perfiles) {
	                if (perfil.getNombre().equals("USU_ADMIN")) {
	                    tipoUsuario = "admin";
	                    break;
	                } else if (perfil.getNombre().equals("USU_CLIENTE")) {
	                    tipoUsuario = "cliente";
	                    break;
	                }
	            }
	            if (tipoUsuario != null) {
	                ObjectMapper mapper = new ObjectMapper();
	                Map<String, Object> userData = new HashMap<>();
	                userData.put("username", usuario.getUsername());
	                userData.put("apellidos", usuario.getApellidos());
	                userData.put("email", usuario.getEmail());
	                userData.put("enabled", usuario.getEnabled());
	                userData.put("fecha_Registro", usuario.getFecha_Registro());
	                userData.put("nombre", usuario.getNombre());
	                userData.put("password", usuario.getPassword());
	                List<String> perfilesUsuario = perfiles.stream().map(Perfil::getNombre).collect(Collectors.toList());
	                userData.put("perfiles", perfilesUsuario);

	                String userDataJson;
	                try {
	                    userDataJson = mapper.writeValueAsString(userData);
	                } catch (JsonProcessingException e) {
	                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"Error al procesar los datos del usuario\"}");
	                }

	                return ResponseEntity.ok().body("{\"message\": \"Login correcto\", \"userData\": " + userDataJson + ", \"tipoUsuario\": \"" + tipoUsuario + "\"}");
	            } else {
	                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"El usuario no tiene perfil de admin o cliente\"}");
	            }
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"El usuario no tiene perfiles asociados\"}");
	        }
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Contraseña o nombre de usuario incorrecto\"}");
	    }
	}
	
	@PostMapping("/registro")
	public Usuario registrarUsuario(@RequestBody Usuario usuario) {
	    usuario.setEnabled(1);
	    usuario.setFecha_Registro(new Date());
	    usuario.addPerfil(pdao.findById(2));
	    System.err.println(usuario);
	    if(udao.insertOne(usuario) != null) {
	    	return usuario;
	    }
	    return null;
	}
	 
}
