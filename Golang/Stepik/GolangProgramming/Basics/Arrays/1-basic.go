package main

import "fmt"

func main() {
    var (
        workArray [10]byte
        swap [6]byte
        number byte
    )

    for i := 0; i < 10; i++ {
        fmt.Scan(&number)
        workArray[i] = number
    }

    for i := 0; i < 6; i++ {
        fmt.Scan(&number)
        swap[i] = number
    }

    number = workArray[swap[1]]
    workArray[swap[1]] = workArray[swap[0]]
    workArray[swap[0]] = number

    number = workArray[swap[3]]
    workArray[swap[3]] = workArray[swap[2]]
    workArray[swap[2]] = number

    number = workArray[swap[5]]
    workArray[swap[5]] = workArray[swap[4]]
    workArray[swap[4]] = number

    for _, elem := range workArray {
        fmt.Printf("%d ", elem)
    }
}
