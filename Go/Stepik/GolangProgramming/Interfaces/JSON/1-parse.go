package main

import (
    "io/ioutil"
    "os"
    "encoding/json"
    "fmt"
)

type Result struct {
    Average float32  
}

type Person struct {
    LastName string
    FirstName string
    MiddleName string
    Birthday string
    Address string
    Phone string
    Rating []int
}

type File struct {
    ID int
    Number string
    Year int
    Students []Person
}

func main() {
    var (
		s File
		sum float32 = 0.0
		count float32 = 0.0
	)
    
	file, _ := os.Open("test.json")

	data, err := ioutil.ReadAll(file)
    if err != nil {
        panic(err)
    }
    
    if decod_err := json.Unmarshal(data, &s); decod_err != nil {
        panic(decod_err)
    }
    
    for _, elem := range s.Students {
        rating := elem.Rating
        sum += float32(len(rating))
        count++
    }
    
    result_number := sum / count
    
    result_struct := Result{
        Average: result_number,   
    }
    
    json_result, _ := json.MarshalIndent(result_struct, "", "    ")

    fmt.Printf("%s\n", json_result)
}