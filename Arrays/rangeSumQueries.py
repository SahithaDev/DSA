<<<<<<< HEAD
def fun(arr,queries):
  n=len(arr)
  prefix=[0]*(n+1)
  for i in range(1,n+1):

    prefix[i]=prefix[i-1]+arr[i-1]
  results=[]
  for query in queries:
    l,r=query
    range_sum=prefix[r+1]-prefix[l]
    results.append(range_sum)
  return results


print(fun([2,4,1,3,6],[(1,3),(0,2)]))


=======
def fun(arr,queries):
  n=len(arr)
  prefix=[0]*(n+1)
  for i in range(1,n+1):

    prefix[i]=prefix[i-1]+arr[i-1]
  results=[]
  for query in queries:
    l,r=query
    range_sum=prefix[r+1]-prefix[l]
    results.append(range_sum)
  return results


print(fun([2,4,1,3,6],[(1,3),(0,2)]))


>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
