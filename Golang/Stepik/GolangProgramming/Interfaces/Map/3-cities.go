package main

import (
    "fmt"
)

func main() {
    groupCity := map[int][]string{
        10:   []string{"New York", "Los Angeles"}, // population - 10k-99k
        100:  []string{"Chicago", "Dallas", "San Francisco", "Boston"},         // population - 100k-999k
        1000: []string{"Kansas City", "Detroit", "Las Vegas"}, // population - 1000k and more
    }

    cityPopulation := map[string]int{
        "New York":         54, // must be deleted
        "Los Angeles":      65, // must be deleted
        "Chicago":         789, // ok
        "Dallas":          345, // ok
        "San Francisco":   548, // ok
        "Boston":          579, // ok
        "Kansas City":   65468, // must be deleted
        "Detroit":       78645, // must be deleted
        "Las Vegas":     57498, // must be deleted
    }

    flag := false

    for city, number := range cityPopulation {
        for _, rightCity := range groupCity[100] {
            if city == rightCity || (number >= 100 && number <= 999) {
                flag = true
                break
            }
        }

        if !flag {
            delete(cityPopulation, city)
        }

        flag = false
    }

    fmt.Println(cityPopulation)
}
