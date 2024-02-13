package productos.modelo.entitybeans;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
/*
 * Lombook
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
/*
 * entidades anotadas jpa
 */
@Entity
@Table(name="usuarios")

public class Usuario implements Serializable{
	
	/**
	 * identificador  serialización
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String username;
	private String password;
	private String nombre;
	private String apellidos;
	@Column(name="created_at")
	@Temporal(TemporalType.DATE)
	private Date createdAt;
	private int enabled;

}
