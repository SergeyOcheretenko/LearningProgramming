package main

import (
    "io/ioutil"
    "os"
    "encoding/json"
    "fmt"
)

type Data []struct {
    Id int `json:"global_id"`
}

func main() {
    var (
		savedData Data
		sum int = 0
	)
    
	file, _ := os.Open("./data/data.json")

	data, err := ioutil.ReadAll(file)
    if err != nil {
        panic(err)
    }
    
    if decod_err := json.Unmarshal(data, &savedData); decod_err != nil {
        panic(decod_err)
    }
    
	for _, elem := range savedData {
		sum += elem.Id
	}

	fmt.Println(sum)
}