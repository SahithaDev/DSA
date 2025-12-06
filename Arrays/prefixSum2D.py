<<<<<<< HEAD
def prefixSum(arr):
  row=len(arr)
  col=len(arr[0])
  PA = [[0] * col for _ in range(row)]

  for i in range(row):
    for j in range(col):
      if i>0 and j>0:
        diag=PA[i-1][j-1]
      else:
        diag=0
      
      if i>0:
        top=PA[i-1][j]
      else:
        top=0
      
      if j>0:
        left=PA[i][j-1]
      else:
        left=0
      
      PA[i][j]=arr[i][j]+left+top-diag

  return PA

arr=[
  [1,2,3],
  [5,4,2],
  [2,1,4]
]
print(prefixSum(arr))


     




      
=======
def prefixSum(arr):
  row=len(arr)
  col=len(arr[0])
  PA = [[0] * col for _ in range(row)]

  for i in range(row):
    for j in range(col):
      if i>0 and j>0:
        diag=PA[i-1][j-1]
      else:
        diag=0
      
      if i>0:
        top=PA[i-1][j]
      else:
        top=0
      
      if j>0:
        left=PA[i][j-1]
      else:
        left=0
      
      PA[i][j]=arr[i][j]+left+top-diag

  return PA

arr=[
  [1,2,3],
  [5,4,2],
  [2,1,4]
]
print(prefixSum(arr))


     




      
>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
