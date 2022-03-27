package main

import "fmt"

func checkValue(i interface{}) bool {
	if _, ok := i.(float64); ok {
		return true
	}

	return false
}

func checkOperationType(i interface{}) bool {
	if _, ok := i.(string); ok {
		return true
	}

	return false
}

func doOperation(value1, value2, operation interface{}) string {
	var result float64

	if !checkValue(value1) {
		return fmt.Sprintf("value=%v: %T", value1, value1)
	} else if !checkValue(value2) {
		return fmt.Sprintf("value=%v: %T", value2, value2)
	} else if !checkOperationType(operation) {
		return "unknown operation"
	} else {
		first_number := value1.(float64)
		second_number := value2.(float64)

		switch operation {
		case "/":
			result = first_number / second_number
		case "*":
			result = first_number * second_number
		case "+":
			result = first_number + second_number
		case "-":
			result = first_number - second_number
		default:
			return "unknown operation"
		}

		return fmt.Sprintf("%.4f", result)
	}
}

func main() {
	fmt.Println(doOperation(43.1423, 5.5422, "/"))  // 7.7843
	fmt.Println(doOperation(42.0, 5.0, "/"))        // 8.4000
	fmt.Println(doOperation(43.1423, "Hello", "/")) // value=Hello: string
	fmt.Println(doOperation(13, 7.0, "+"))          // value=13: int
	fmt.Println(doOperation(13.0, 7.0, "+"))        // 20.0000
	fmt.Println(doOperation(8.0, 5.0, "&"))         // unknown operation
}
