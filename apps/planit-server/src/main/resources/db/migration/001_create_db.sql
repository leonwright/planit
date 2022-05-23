--liquibase formatted sql
--changeset opsexcellenceagileteam@jncb.com:00526_create_function_salary_deduction.00536_error_log_pagination_func runOnChange:true

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP
);

--rollback DROP TABLE IF EXISTS accounts;
