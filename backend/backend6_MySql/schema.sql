USE delta_app;
CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50),
    emailid  VARCHAR(50)  UNIQUE
);  