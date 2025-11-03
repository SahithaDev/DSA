def sum(n):
  isOdd=(arr[n]%2!=0)
  if(n==0):
    if(isOdd):
      return arr[n]
    else:
      return 0
  if(isOdd):
    return arr[n]+sum(n-1)
  else:
    return 0+sum(n-1)
arr=[1,6,7,8,9]
print(sum(len(arr)-1))