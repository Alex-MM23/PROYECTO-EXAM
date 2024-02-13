package productos.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;
import productos.modelo.dao.FamiliaDao;
import productos.modelo.dao.UsuarioDao;
import productos.modelo.entitybeans.Usuario;

@Controller
public class HomeController {
	@Autowired
	private UsuarioDao udao;
	
	@Autowired
	private FamiliaDao fdao;
	
	@GetMapping({"/","","/index"})
	public String inicio(Model model) {
		model.addAttribute("familias", fdao.findAll());
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
		Usuario usuario = udao.buscarPorUsernameYPassword(username, password);
		System.out.println(usuario);
		if (usuario != null) {
			usuario.setPassword(null);
			System.out.println(usuario);
			sesion.setAttribute("usuario", usuario);
			return "redirect:/";
		}
		
		ratt.addFlashAttribute("mensaje", "Usuario o password incorrecto, try again");
		
		return "redirect:/login";
	}
	
	
	@GetMapping("/registro")
	public String registro(Model model) {
		model.addAttribute("usuario", new Usuario());
		return "formRegistro";
	}
	
	@PostMapping("/registro")
	public String procRegistro(Usuario usuario, RedirectAttributes ratt) {
		usuario.setEnabled(1);
		usuario.setCreatedAt(new Date());
		if (udao.insertOne(usuario) == 1) {
			ratt.addFlashAttribute("mensaje", "Identificate");
			return "redirect:/login";
		}
		
		ratt.addFlashAttribute("mensaje", "Este usuario ya existe");
		return "redirect:/registro";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession sesion) {
		
		sesion.removeAttribute("usuario");
		sesion.invalidate();
		
		return "forward:/";
	}

}
