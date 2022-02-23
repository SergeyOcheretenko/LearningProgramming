package main

import "fmt"

func main() {
    var degrees, allMinutes, minutes, hours int
    
    fmt.Scan(&degrees)
    
    allMinutes = degrees * 2
    hours = allMinutes / 60
    minutes = allMinutes - hours * 60
    
    fmt.Println("It is", hours, "hours", minutes, "minutes.")
}
