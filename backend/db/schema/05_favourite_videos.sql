DROP TABLE IF EXISTS favourite_videos CASCADE;

CREATE TABLE favourite_videos(
    id SERIAL PRIMARY KEY NOT NULL,
    patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
    link VARCHAR(255) NOT NULL
);