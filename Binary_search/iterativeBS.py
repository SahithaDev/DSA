def firstOccurance(arr,target):
  low=0
  high=len(arr)-1
  result=-1
  while(low<=high):
    mid=low+(high-low)//2
    if(arr[mid]==target):
      result=mid
      high=mid-1 #go to the earliest occurance
    elif(arr[mid]<target):
      low=mid+1
    else:
      high=mid-1
  return result
  
def lastOccurance(arr,target):
  low=0
  high=len(arr)-1
  result=-1
  while(low<=high):
    mid=low+(high-low)//2
    if(arr[mid]==target):
      result=mid
      low=mid+1 #keep searching to the right 
    elif(arr[mid]<target):
      low=mid+1
    else:
      high=mid-1
  return result
  
first=firstOccurance([2,4,6,8,10,10],11)
last=lastOccurance([2,4,6,8,10,10],11)
count=(last-first)+1 if first!=-1 else 0 #if the element is not found
print(count)




