arr=[6,6,8,9,5,4,5,4]
i=0
while i<len(arr):
  j=i+1

  while j<len(arr):
    if(arr[i]==arr[j]):
      del arr[j]
    else:
      j+=1 #Here we are stuck at one element to find the duplicates, to move to the next element to find out its duplicates, 
      
  i+=1 #this is written , once we find the   duplicates of  specific element

print(arr)








     