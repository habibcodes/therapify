DROP TABLE IF EXISTS appointments CASCADE;

CREATE TABLE appointments(
    id SERIAL PRIMARY KEY NOT NULL,
    practitioner_id INTEGER REFERENCES practitioners(id) ON DELETE CASCADE,
    patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    time TIME NOT NULL,
    symptom VARCHAR(255) NOT NULL,
    treatment VARCHAR(255) NOT NULL
);