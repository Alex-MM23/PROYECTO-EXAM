package productos.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import productos.modelo.dao.FamiliaDao;
import productos.modelo.entitybeans.Familia;
import productos.repository.FamiliaRepository;

@RestController
@RequestMapping("/apirest/familias")
public class FamiliaRestController {
	
	@Autowired
	private FamiliaDao fdao;
	
 	@DeleteMapping("/eliminar/{idFamilia}")
//	@GetMapping("/eliminar/{idFamilia}")
	public String eliminar(@PathVariable int idFamilia) {
		switch (fdao.eliminar(idFamilia)) {
			case 1:
				return "Familia eliminada correctamente";
	
			case 0:
				return "Familia no existe";
	
			default:
				return " Problemas para eliminar la Familia, NOOO eliminada";

		}
			
	}
	@PutMapping("/modificar")
	public String modificar(@RequestBody Familia familia) {
		if (fdao.modificar(familia) == 1)
			return "Familia modificada correctamente";
		else
			return " Problemas para modificar la Familia, NOOO modificada";
	}
	
	
	@PostMapping("/alta")
	public Familia alta(@RequestBody Familia familia) {
		return fdao.insertOne(familia);
	}
	
	
	@GetMapping("/todas")
	public List<Familia>  todes(){
		
		return fdao.findAll();
		
	}
	
	@GetMapping("/una/{idFamilia}")
	public Familia  una(@PathVariable int idFamilia){
		
		return fdao.findById(idFamilia);
		
	}
	
	@GetMapping("/buscar/{letra}")
	public List<Familia>  buscar(@PathVariable String letra){
		
		return fdao.buscarContenido(letra);
		
	}

}
