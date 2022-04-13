package main

import (
    "fmt"
    "time"
    "os"
    "bufio"
)

func main() {
    const (
        TEMPLATE string = "2006-01-02 15:04:05"
        COMPARE  int    = 780
    )
    var inputData string
    
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    inputData = scanner.Text()
    
    inputTime, _ := time.Parse(TEMPLATE, inputData)
    
    inputClock := inputTime.Hour() * 60 + inputTime.Minute()
    
    if inputClock < COMPARE {
        fmt.Println(inputData)   
    } else {
        inputTime = inputTime.AddDate(0, 0, 1)
        fmt.Println(inputTime.Format(TEMPLATE))
    }
}