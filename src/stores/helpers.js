export function deleteItem(list,id) {
    return list.filter(item => item.id !== id)
}

export function addData(list, val) {
    return list.push(val)
}

export function getFindById(list, id) {
    return list.find(item => item.id === id)
}
