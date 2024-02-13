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
import productos.modelo.dao.ProductoDao;
import productos.modelo.entitybeans.Familia;
import productos.modelo.entitybeans.Producto;

@RestController
@RequestMapping("/apirest/productos")
public class ProductoRestController {
	
	@Autowired
	private ProductoDao pdao;
	
 	@DeleteMapping("/eliminar/{idProducto}")

	public String eliminar(@PathVariable int idProducto) {
		switch (pdao.eliminarOne(idProducto)) {
			case 1:
				return "Producto eliminado correctamente";
	
			case 0:
				return "Producto no existe";
	
			default:
				return " Problemas para eliminar la Producto, NOOO eliminado";

		}
			
	}
	@PutMapping("/modificar")
	public String modificar(@RequestBody Producto producto) {
		if (pdao.modificarOne(producto) == 1)
			return "Producto modificado correctamente";
		else
			return " Problemas para modificar la Producto, NOOO modificado";
	}
	
	
	@PostMapping("/alta")
	public Producto alta(@RequestBody Producto producto) {
		return pdao.insertOne(producto);
	}
	
	
	@GetMapping("/todos")
	public List<Producto>  todes(){
		
		return pdao.findAll();
		
	}
	
	@GetMapping("/uno/{idProducto}")
	public Producto  uno(@PathVariable int idProducto){
		
		return pdao.findById(idProducto);
		
	}
	
	@GetMapping("/descripcion/{cadena}")
	public List<Producto>  buscarPorDescripcion(@PathVariable String cadena){
		
		return pdao.buscarDescripcion(cadena);
		
	}
	
	@GetMapping("/marca/{marca}")
	public List<Producto>  buscarPorMarca(@PathVariable String marca){
		
		return pdao.findByMarca(marca);
		
	}
	
	@GetMapping("/pofamilia/{idFamilia}")
	public List<Producto>  buscarPorFamilia(@PathVariable int idFamilia){
		
		return pdao.findPorFamilia(idFamilia);
		
	}

}
