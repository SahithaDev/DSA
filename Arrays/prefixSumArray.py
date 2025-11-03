def fun(arr):
  prefix=[0]*len(arr)  #Initialize a prefix sum array of the same length with all elements as 0
  prefix[0]=arr[0] #Set the first element of prefix array as the first element of the original array
  for i in range(0,len(arr)):
    prefix[i]=prefix[i-1]+arr[i]
  return prefix 
  
print(fun([2,4,6,8,10]))
                