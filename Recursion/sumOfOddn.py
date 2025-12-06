<<<<<<< HEAD
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
=======
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
>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
print(sum(len(arr)-1))