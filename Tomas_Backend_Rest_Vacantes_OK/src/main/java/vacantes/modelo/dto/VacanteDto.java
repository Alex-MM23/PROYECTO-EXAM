package vacantes.modelo.dto;

import java.io.Serializable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import vacantes.modelo.entidades.EstatusVacante;

import java.util.Date;


/**
 * The persistent class for the vacantes database table.
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class VacanteDto{
	private int idVacante;
	private String descripcion;
	private int destacado;
	private String detalles;
	@Enumerated(value = EnumType.STRING)
	private EstatusVacante estatus;
	private Date fecha;
	private String imagen;
	private String nombre;
	private double salario;
	private int idCategoria;

	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idVacante;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof VacanteDto))
			return false;
		VacanteDto other = (VacanteDto) obj;
		if (idVacante != other.idVacante)
			return false;
		return true;
	}

	public int getIdVacante() {
		return idVacante;
	}

	public void setIdVacante(int idVacante) {
		this.idVacante = idVacante;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getDestacado() {
		return destacado;
	}

	public void setDestacado(int destacado) {
		this.destacado = destacado;
	}

	public String getDetalles() {
		return detalles;
	}

	public void setDetalles(String detalles) {
		this.detalles = detalles;
	}

	public EstatusVacante getEstatus() {
		return estatus;
	}

	public void setEstatus(EstatusVacante estatus) {
		this.estatus = estatus;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public int getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(int idCategoria) {
		this.idCategoria = idCategoria;
	}

	
	

}