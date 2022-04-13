package main

import (
    "fmt"
    "bufio"
    "os"
    "time"
    "strings"
)

func main() {
    const TEMPLATE string = "02.01.2006 15:04:05"
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    inputData := scanner.Text()
    
    times := strings.Split(inputData, ",")
    
    firstInput, secondInput := times[0], times[1]
    
    firstDate, _ := time.Parse(TEMPLATE, firstInput)
    secondDate, _ := time.Parse(TEMPLATE, secondInput)
    
    if firstDate.Before(secondDate) {
        fmt.Println(secondDate.Sub(firstDate) )
    } else {
        fmt.Println(firstDate.Sub(secondDate))
    }
}