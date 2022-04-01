package main

import (
    "fmt"
    "time"
)

func main() {
    var (
        UnixDate string = "Mon Jan _2 15:04:05 MST 2006"
        RFC3339 string = "2006-01-02T15:04:05Z07:00"
        data, result_data string
    )
    
    fmt.Scan(&data)
    
    input_time, _ := time.Parse(RFC3339, data)
    result_data = input_time.Format(UnixDate)
    
    fmt.Println(result_data)
}