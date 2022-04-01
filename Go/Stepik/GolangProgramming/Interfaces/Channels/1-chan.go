package main

import "fmt"

func removeDuplicates(inputStream, outputStream chan string) {
    var last string
    defer close(outputStream)
    
    last = <- inputStream
    outputStream <- last

    for value := range inputStream {
        if value != last {
            outputStream <- value  
        }
        last = value
    }
}

func main() {
    inputStream := make(chan string)
    outputStream := make(chan string)
    go removeDuplicates(inputStream, outputStream)

    go func() {
        defer close(inputStream)

        for _, r := range "112233444556" {
            inputStream <- string(r)
        }
    }()

    for x := range outputStream {
        fmt.Print(x)
    }

    fmt.Println()
}