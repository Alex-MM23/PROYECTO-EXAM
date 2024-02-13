package productos.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import productos.modelo.entitybeans.Familia;

public interface FamiliaRepository extends JpaRepository<Familia, Integer>{

	public List<Familia> findByDescripcionContains(String letra);

}
