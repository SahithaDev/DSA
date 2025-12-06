<<<<<<< HEAD
def sorted(arr):
  for i in range(0,len(arr)-1):
    if(arr[i]>arr[i+1]):
      return "array is not sorted" #If any element is greater than the next , array is not sorted

  return "array is sorted" #If loop completes without returning, the array is sorted
    

arr=[5,4,3,2]
print(sorted(arr))
=======
def sorted(arr):
  for i in range(0,len(arr)-1):
    if(arr[i]>arr[i+1]):
      return "array is not sorted" #If any element is greater than the next , array is not sorted

  return "array is sorted" #If loop completes without returning, the array is sorted
    

arr=[5,4,3,2]
print(sorted(arr))
>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
