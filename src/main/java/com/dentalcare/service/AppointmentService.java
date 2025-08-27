package com.dentalcare.service;

import com.dentalcare.entity.Appointment;
import java.util.List;

public interface AppointmentService {
    Appointment create(Appointment appointment);
    List<Appointment> findAll();
}
