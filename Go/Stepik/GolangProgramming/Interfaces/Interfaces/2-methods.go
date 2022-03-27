package main

import (
    "fmt"
    "strings"
)

type Battery struct {
    Power string
}

func (b *Battery) String() string {
    result := "["
    
    ones := strings.Count(b.Power, "1")
    zeros := strings.Count(b.Power, "0")
    
    result = result + strings.Repeat(" ", zeros)
    result = result + strings.Repeat("X", ones)
    
    result = result + "]"
    
    return result
}

func main() {
    var power string
    fmt.Scan(&power)
    batteryForTest := &Battery{Power: power}
    
    fmt.Println(batteryForTest) 
}
