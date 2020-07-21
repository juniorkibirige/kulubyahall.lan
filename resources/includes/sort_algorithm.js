sort = (a) => {
    let sorted = []
    sorted = a.sort(dy)
    sorted = sorted.sort(m)
    return sorted
}
m = (a,b) =>{
    d = a.split(' ')[1].split('-')
    e = b.split(' ')[1].split('-')
    return d[1] - e[1]
}
dy = (a,b) =>{
    d = a.split(' ')[1].split('-')
    e = b.split(' ')[1].split('-')
    return d[0] - e[0]
}