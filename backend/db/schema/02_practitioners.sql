DROP TABLE IF EXISTS practitioners CASCADE;

CREATE TABLE practitioners(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    specialty VARCHAR(255) NOT NULL,
    verified BOOLEAN NOT NULL,
    available BOOLEAN NOT NULL
);