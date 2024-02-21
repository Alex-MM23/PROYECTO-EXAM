package vacantes.modelo.entidades.dao;

import java.util.List;

import vacantes.modelo.entidades.Solicitud;

public interface SolicitudDao {

	Solicitud findById(int idSolicitud);
	List<Solicitud> findAll();
	Solicitud insertOne(Solicitud solicitud);
	int modificar(Solicitud solicitud);
}