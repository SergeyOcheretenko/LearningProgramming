package main

import (
    "os"
    "fmt"
    "bufio"
)

func main() {
	var counter int = 0

    file, _ := os.Open("task.txt")
    defer file.Close()

    reader := bufio.NewReader(file)
    
    for ; ; {
        number, _ := reader.ReadString(';')
        counter++
        if number == "0;" {
            fmt.Println(counter)
            break
        } 
    } 
}
