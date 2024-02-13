package productos.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import productos.modelo.entitybeans.Familia;
import productos.repository.FamiliaRepository;

@Repository
public class FamiliaDaoImplMy8 implements FamiliaDao{
	
	@Autowired
	private FamiliaRepository frepo;

	@Override
	public Familia findById(int idFamilia) {
		// TODO Auto-generated method stub
		return frepo.findById(idFamilia).orElse(null);
	}

	@Override
	public List<Familia> findAll() {
		// TODO Auto-generated method stub
		return frepo.findAll();
	}

	@Override
	public Familia insertOne(Familia familia) {
		try {
			return frepo.save(familia);
		} catch (Exception e) {
			return null;
		}
		
	}

	@Override
	public List<Familia> buscarContenido(String contenido) {
		// TODO Auto-generated method stub
		return frepo.findByDescripcionContains(contenido);
	}

	@Override
	public int modificar(Familia familia) {
		if (findById(familia.getIdFamilia()) != null) {
			frepo.save(familia);
			return 1;
		}
		return 0;
			
	}

	@Override
	public int eliminar(int idFamilia) {
		try {
				if (findById(idFamilia) != null) {
					frepo.deleteById(idFamilia);
					return 1;
				}
				return 0;
		} catch (Exception e) {
			//e.printStackTrace();
			System.err.println(e.getMessage());
			return -1;
		}
	}
	
	

}
