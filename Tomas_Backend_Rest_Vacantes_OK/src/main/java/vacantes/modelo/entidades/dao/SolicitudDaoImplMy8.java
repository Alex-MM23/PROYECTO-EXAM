package vacantes.modelo.entidades.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vacantes.modelo.entidades.Solicitud;
import vacantes.modelo.repository.SolicitudRepository;

@Repository
public class SolicitudDaoImplMy8 implements SolicitudDao{
	
	@Autowired
	public SolicitudRepository srepo;
	
	@Override
	public Solicitud insertOne(Solicitud solicitud) {
		// TODO Auto-generated method stub
		try {
			 return srepo.save(solicitud);
			
		} catch (Exception e) {
			System.err.println(e.getMessage());
			 
			return null;
			}
	}

	@Override
	public List<Solicitud>findAll() {
		// TODO Auto-generated method stub
		return srepo.findAll();
	}

	@Override
	public int modificar(Solicitud solicitud) {
		// TODO Auto-generated method stub
		if (findById(solicitud.getIdSolicitud()) != null) {
			srepo.save(solicitud);
			return 1;
		}
		return 0;
	}

	@Override
	public Solicitud findById(int idSolicitud) {
		// TODO Auto-generated method stub
		return srepo.findById(idSolicitud).orElse(null);
	}
}
