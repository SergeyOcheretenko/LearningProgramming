package main
import "fmt"

func main()  {
	var (
        a, max int
        array [5]int
    )
    
	for i := 0; i < 5; i++ {
		fmt.Scan(&a)
		array[i] = a
	}
    
    max = array[0]
    
    for _, elem := range array {
        if elem > max {
            max = elem   
        }
    }
    
    fmt.Println(max)
}
