package com.dentalcare.service;

import com.dentalcare.entity.Appointment;
import com.dentalcare.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository repo;

    public AppointmentServiceImpl(AppointmentRepository repo) {
        this.repo = repo;
    }

    @Override
    public Appointment create(Appointment appointment) {
        return repo.save(appointment);
    }

    @Override
    public List<Appointment> findAll() {
        return repo.findAll();
    }
}
