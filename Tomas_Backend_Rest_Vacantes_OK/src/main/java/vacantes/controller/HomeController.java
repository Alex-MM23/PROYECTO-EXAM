package vacantes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;
import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.entidades.Usuario;
import vacantes.modelo.entidades.dao.CategoriaDao;
import vacantes.modelo.entidades.dao.UsuarioDao;

@Controller
public class HomeController {

	@Autowired
	private UsuarioDao udao;
	
	@Autowired
	private CategoriaDao cdao;
	
	@GetMapping({"/","","index","home"})
	public String mostrarCategorias(Model model) {
		List<Categoria> categoria = cdao.findAll();
		model.addAttribute("categorias", categoria);
		return "home";
	}
	
	@GetMapping("/login")
	public String login() {
		return "formLogin";
	}
	
	@PostMapping("/login")
	public String procLogin(@RequestParam("username") String username,
							@RequestParam("password") String password,
							HttpSession sesion, RedirectAttributes ratt) {
		Usuario usuario = udao.findByUsernameAndPassword(username, password);
		if(usuario != null) {
			usuario.setPassword(null);
			sesion.setAttribute("usuario", usuario);
			return "redirect:/";
		}
		
		ratt.addFlashAttribute("mensaje", "Usuario o password Incorrecto");
		return "redirect:/login";
	}
	
}
