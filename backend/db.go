package main

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

var dbpool *pgxpool.Pool

func connectDB() error {
	dsn := "postgres://alan:1234@localhost:5432/algo_db"

	var err error
	dbpool, err = pgxpool.New(context.Background(), dsn)
	if err != nil {
		return err
	}

	log.Println("connected to db")
	return nil
}
