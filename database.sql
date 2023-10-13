CREATE DATABASE "places" 

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INT DEFAULT 0
);

CREATE TABLE "My_Places" (
	"id" SERIAL PRIMARY KEY,
	"restr_name" VARCHAR (255) NOT NULL,
	"photo_url" VARCHAR (4000) NOT NULL,
	"user_rating" NUMERIC(3,2) DEFAULT 0,
	"place_location" VARCHAR,
	"user_id" int REFERENCES "user",
	"place_id" VARCHAR (80) NOT NULL
);
