# DentalCare Backend (Spring Boot + MySQL +HTML CSS)

## Run
1. Create DB:
   ```sql
   CREATE DATABASE dentalcare CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
2. Update `src/main/resources/application.properties` with your MySQL username/password.
3. Start:
   ```bash
   mvn spring-boot:run
   ```
4. API:
   - POST `http://localhost:8081/api/appointments`
     ```json
     {
       "fullName": "John Doe",
       "email": "john@example.com",
       "phone": "9999999999",
       "date": "2025-01-20",
       "time": "10:30",
       "doctor": "Dr. Smita Warpe - Orthodontist",
       "message": "Tooth pain"
     }
     ```
   - GET `http://localhost:8081/api/appointments`
