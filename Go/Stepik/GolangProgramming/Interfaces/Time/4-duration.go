package main

import (
    "fmt"
    "time"
    "bufio"
    "os"
    "strings"
)

func main() {
    const (
        now = 1589570165
        UnixDate = "Mon Jan _2 15:04:05 MST 2006"
    )
    
    currentTime := time.Unix(now, 0)
    
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    inputData := scanner.Text()
    
    inputData = strings.Replace(inputData, " мин. ", "m", 1)
    inputData = strings.Replace(inputData, " сек.", "s", 1)
    
    duration, _ := time.ParseDuration(inputData)
    
    resultTime := currentTime.Add(duration)
    fmt.Println(resultTime.Format(UnixDate))   
}