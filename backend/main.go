package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize DB connection (connectDB defined in db.go)
	err := connectDB()
	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	r.Run() // listen on :8080
}
