DROP TABLE IF EXISTS practitioners CASCADE;

CREATE TABLE practitioners(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id)
);