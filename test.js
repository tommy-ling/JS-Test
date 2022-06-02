function solution(S) {
  if(!S.includes('a') || !S.includes('b')) {
    return true
  } else {
    let arr = []
    for(i = 0; i < S.length; i++) {
      arr.push(S[i])
    }
    let newArr = [...arr]
    newArr = newArr.sort((prev, curr) => {
      return prev.charCodeAt() - curr.charCodeAt()
    })

    const sameArr = arr.every((a, idx) => a === newArr[idx])

    return sameArr
  }
}