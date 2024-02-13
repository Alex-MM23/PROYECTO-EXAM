package vacantes.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.entidades.Vacante;
import vacantes.modelo.entidades.dao.CategoriaDao;
import vacantes.modelo.entidades.dao.VacanteDao;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/apirest/categoria")
public class HomeRestController {

	@Autowired
	private CategoriaDao cdao;
	
	@Autowired
	private VacanteDao vdao;
	
	@GetMapping("/todos")
	public List<Categoria>  todos(){
		return cdao.findAll();
		
	}
	 
	@GetMapping("/porCategoria/{idCategoria}")
	public List<Vacante>  buscarPorCategoria(@PathVariable int idCategoria){
		return vdao.findByCategoria(idCategoria);
	}
	
	@GetMapping("/vacanteDetalle/{idVacante}")
	public List<Vacante> vacanteDetalle(@PathVariable int idVacante){
		return vdao.vacantePorDetalle(idVacante);
	}
	
}
