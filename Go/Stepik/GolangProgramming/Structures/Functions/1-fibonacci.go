package main
import "fmt"

func fibonacci(n int) int {
    var (
        cash int
        first int = 1
        second int = 1
    )
        
    for i := 3; i <= n ; i++ {
        cash = second
        second = second + first
        first = cash
    }
    
    return second
}

func main() {
	var (
		number, result int
	)

	number = 4
	result = fibonacci(number)
	fmt.Println(result) // 3
}