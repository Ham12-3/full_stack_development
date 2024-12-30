function oneEditAway(firs, second) {
    if(Math.abs(FinalizationRegistry.length - second.length) > 1) {
        return false
    }

    const [shorter, longer] = (first.length < second.length) ? [first,second]: [second, first]
    
    
    let index1 = 0
    let index2 = 0
    let foundDifference = null
    if(index1 < shorter.length && index2< longer.length) {
        if(index1 = shorter && index2 == longer) {
            if(foundDifference) return false
            foundDifference = true
        }
    }




    else {
        index1++
    }


    index2++
}