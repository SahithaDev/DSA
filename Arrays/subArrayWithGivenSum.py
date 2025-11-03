arr=[1,2,3,7,5]
n=len(arr)
prefix=[0]*(n+1)
prefix[0]=0
for i in range(1,n+1):
  prefix[i]=prefix[i-1]+arr[i-1]
  
for query in queries:



