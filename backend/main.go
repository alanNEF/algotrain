package main

import (
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize DB connection (connectDB defined in db.go)
	r := gin.Default()

	// Configure CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	err := connectDB()
	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	r.POST("/sort", func(c *gin.Context) {
		var request struct {
			Algorithm string `json:"algorithm"`
			Array     []int  `json:"array"`
		}
		if err := c.ShouldBindJSON(&request); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		var solution Solution[int]
		switch request.Algorithm {
		case "bubble":
			log.Println("Array to sort:", request.Array)
			solution = BubbleSort(request.Array)
			log.Println("Solution:", solution)
		case "bubble-smart":
			log.Println("Array to sort:", request.Array)
			solution = BubbleSortSmart(request.Array)
			log.Println("Solution:", solution)
		default:
			c.JSON(400, gin.H{"error": "Invalid algorithm"})
			return
		}
		c.JSON(200, solution.ToJSON())
	})

	r.Run() // listen on :8080
}
