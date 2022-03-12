package main

import "fmt"

type Action struct {
    On bool
    Ammo int
    Power int
}

func (action *Action) Shoot() bool {
    if action.On == false || action.Ammo <= 0 {
        return false
    }
    
    action.Ammo -= 1
    return true
}

func (action *Action) RideBike() bool {
    if action.On == false || action.Power <= 0 {
        return false
    }
    
    action.Power -= 1
    return true
}

func main() {
    a := Action{On: true, Ammo: 2, Power: 3}
    fmt.Printf("Ammo: %v, Power: %v\n", a.Ammo, a.Power)
    fmt.Printf("Shoot: %v, Ammo: %v, Power: %v\n", a.Shoot(), a.Ammo, a.Power)
    fmt.Printf("Shoot: %v, Ammo: %v, Power: %v\n", a.Shoot(), a.Ammo, a.Power)
    fmt.Printf("Shoot: %v, Ammo: %v, Power: %v\n", a.Shoot(), a.Ammo, a.Power)
    fmt.Printf("RideBike: %v, Ammo: %v, Power: %v\n", a.RideBike(), a.Ammo, a.Power)
}
